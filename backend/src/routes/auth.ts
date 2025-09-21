import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import multer from 'multer';
import { User } from '../models/User';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import {
  generateVerificationToken,
  generateOTP,
  sendVerificationEmail,
  sendOTPEmail,
  sendPasswordResetEmail,
  sendWelcomeEmail
} from '../utils/emailService';

const router = express.Router();

// ------------------------
// Validation Schemas
// ------------------------
const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  otp: Joi.string().length(6).optional()
});

const usernameSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(20).required()
});

// ------------------------
// JWT Helper
// ------------------------
const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'fallback-secret', { expiresIn: '7d' });
};

// ------------------------
// Routes
// ------------------------

// Register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { name, email, password } = value;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = generateVerificationToken();
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      emailVerificationToken: verificationToken,
      emailVerificationExpires: verificationExpires,
      isEmailVerified: false
    });

    await user.save();
    await sendVerificationEmail(email, verificationToken, name);

    res.status(201).json({ message: 'Registered! Please verify your email.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Verify Email
router.post('/verify-email', async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: 'Verification token required' });

    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationExpires: { $gt: new Date() }
    });

    if (!user) return res.status(400).json({ error: 'Invalid or expired token' });

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.name);
    res.json({ message: 'Email verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Verification failed' });
  }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { email, password, otp } = value;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' });

    if (!user.isEmailVerified) return res.status(400).json({ error: 'Email not verified' });

    // OTP check
    if (user.otpEnabled && !otp) {
      const otpCode = generateOTP();
      user.tempOTP = otpCode;
      user.tempOTPExpires = new Date(Date.now() + 10 * 60 * 1000);
      await user.save();

      await sendOTPEmail(email, otpCode, user.name);
      return res.json({ message: 'OTP sent', requiresOTP: true });
    }

    if (otp) {
      const validOTP = user.tempOTP === otp && user.tempOTPExpires! > new Date();
      if (!validOTP) return res.status(400).json({ error: 'Invalid or expired OTP' });

      user.tempOTP = undefined;
      user.tempOTPExpires = undefined;
      await user.save();
    }

    const token = generateToken(user._id.toString());
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, username: user.username, avatar: user.avatar }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Update Profile
router.put('/profile', authenticateToken, multer().single('avatar'), async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  const userId = authReq.user?.id;
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const { username, name } = req.body;

    if (username) {
      const { error } = usernameSchema.validate({ username });
      if (error) return res.status(400).json({ error: error.details[0].message });

      const existing = await User.findOne({ username });
      if (existing) return res.status(400).json({ error: 'Username already taken' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (name) user.name = name;
    if (username) user.username = username;
    if (req.file && req.file.buffer) {
      user.avatar = req.file.buffer.toString('base64');
    }

    await user.save();
    res.json({
      message: 'Profile updated',
      user: { id: user._id, name: user.name, username: user.username, avatar: user.avatar }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Profile update failed' });
  }
});

export default router;
