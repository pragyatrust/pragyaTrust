import express from 'express';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import speakeasy from 'speakeasy';
import { User } from '../models/User.js';
import { authenticateToken } from '../middleware/auth.js';
import passport from '../config/passport.js';
import {
  generateVerificationToken,
  generateOTP,
  sendVerificationEmail,
  sendOTPEmail,
  sendPasswordResetEmail,
  sendWelcomeEmail
} from '../utils/emailService.js';

const router = express.Router();

// In-memory storage for users (fallback)
let inMemoryUsers: any[] = [];
let inMemoryOTPs: { [email: string]: { otp: string; expires: Date; attempts: number } } = {};

// Validation schemas
const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  otp: Joi.string().length(6).optional()
});

const otpSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().length(6).required()
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required()
});

const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  password: Joi.string().min(6).required()
});

// Generate JWT token
const generateToken = (userId: string) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET || 'fallback-secret',
    { expiresIn: '7d' }
  );
};

// Register with email/password
router.post('/register', async (req, res) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, password } = value;

    // Check if user exists
    let existingUser;
    if (process.env.MONGO_URL) {
      existingUser = await User.findOne({ email });
    } else {
      existingUser = inMemoryUsers.find(u => u.email === email);
    }

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Generate verification token
    const verificationToken = generateVerificationToken();
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Create user
    let user;
    if (process.env.MONGO_URL) {
      user = new User({
        name,
        email,
        password,
        emailVerificationToken: verificationToken,
        emailVerificationExpires: verificationExpires
      });
      await user.save();
    } else {
      user = {
        _id: Date.now().toString(),
        name,
        email,
        password, // In production, this should be hashed
        emailVerificationToken: verificationToken,
        emailVerificationExpires: verificationExpires,
        isEmailVerified: false,
        createdAt: new Date()
      };
      inMemoryUsers.push(user);
    }

    // Send verification email
    const emailSent = await sendVerificationEmail(email, verificationToken, name);
    
    res.status(201).json({
      message: 'Registration successful! Please check your email to verify your account.',
      emailSent,
      userId: user._id
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Verify email
router.post('/verify-email', async (req, res) => {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({ error: 'Verification token required' });
    }

    let user;
    if (process.env.MONGO_URL) {
      user = await User.findOne({
        emailVerificationToken: token,
        emailVerificationExpires: { $gt: new Date() }
      });
    } else {
      user = inMemoryUsers.find(u => 
        u.emailVerificationToken === token && 
        u.emailVerificationExpires > new Date()
      );
    }

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired verification token' });
    }

    // Update user
    if (process.env.MONGO_URL) {
      await User.findByIdAndUpdate(user._id, {
        isEmailVerified: true,
        $unset: { emailVerificationToken: 1, emailVerificationExpires: 1 }
      });
    } else {
      user.isEmailVerified = true;
      delete user.emailVerificationToken;
      delete user.emailVerificationExpires;
    }

    // Send welcome email
    await sendWelcomeEmail(user.email, user.name);

    res.json({ message: 'Email verified successfully!' });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ error: 'Email verification failed' });
  }
});

// Login with email/password
router.post('/login', async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, password, otp } = value;

    // Find user
    let user;
    if (process.env.MONGO_URL) {
      user = await User.findOne({ email });
    } else {
      user = inMemoryUsers.find(u => u.email === email);
    }

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check if account is locked
    if (user.isLocked) {
      return res.status(423).json({ error: 'Account temporarily locked due to too many failed attempts' });
    }

    // Verify password
    let isValidPassword = false;
    if (process.env.MONGO_URL) {
      isValidPassword = await user.comparePassword(password);
    } else {
      isValidPassword = user.password === password; // In production, use proper hashing
    }

    if (!isValidPassword) {
      // Increment login attempts
      if (process.env.MONGO_URL) {
        await user.incLoginAttempts();
      }
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check if email is verified
    if (!user.isEmailVerified) {
      return res.status(400).json({ 
        error: 'Please verify your email before logging in',
        needsVerification: true 
      });
    }

    // Check if OTP is enabled
    if (user.otpEnabled && !otp) {
      // Generate and send OTP
      const otpCode = generateOTP();
      const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
      
      if (process.env.MONGO_URL) {
        // Store OTP in user document temporarily
        await User.findByIdAndUpdate(user._id, {
          tempOTP: otpCode,
          tempOTPExpires: otpExpires
        });
      } else {
        inMemoryOTPs[email] = {
          otp: otpCode,
          expires: otpExpires,
          attempts: 0
        };
      }

      await sendOTPEmail(email, otpCode, user.name);
      
      return res.json({
        message: 'OTP sent to your email',
        requiresOTP: true
      });
    }

    // Verify OTP if provided
    if (user.otpEnabled && otp) {
      let isValidOTP = false;
      
      if (process.env.MONGO_URL) {
        const userWithOTP = await User.findOne({
          _id: user._id,
          tempOTP: otp,
          tempOTPExpires: { $gt: new Date() }
        });
        isValidOTP = !!userWithOTP;
        
        if (isValidOTP) {
          // Clear temporary OTP
          await User.findByIdAndUpdate(user._id, {
            $unset: { tempOTP: 1, tempOTPExpires: 1 }
          });
        }
      } else {
        const storedOTP = inMemoryOTPs[email];
        if (storedOTP && storedOTP.otp === otp && storedOTP.expires > new Date()) {
          isValidOTP = true;
          delete inMemoryOTPs[email];
        }
      }

      if (!isValidOTP) {
        return res.status(400).json({ error: 'Invalid or expired OTP' });
      }
    }

    // Reset login attempts on successful login
    if (process.env.MONGO_URL) {
      await user.resetLoginAttempts();
      await User.findByIdAndUpdate(user._id, { lastLogin: new Date() });
    } else {
      user.lastLogin = new Date();
    }

    // Generate JWT token
    const token = generateToken(user._id);

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role || 'user'
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Google OAuth routes
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback', 
  passport.authenticate('google', { session: false }),
  (req, res) => {
    try {
      const user = req.user as any;
      const token = generateToken(user._id);
      
      // Redirect to frontend with token
      res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
    } catch (error) {
      console.error('Google callback error:', error);
      res.redirect(`${process.env.FRONTEND_URL}/login?error=auth_failed`);
    }
  }
);

// Enable/disable OTP
router.post('/otp/toggle', authenticateToken, async (req, res) => {
  try {
    const userId = (req as any).user.id;
    const { enable } = req.body;

    let user;
    if (process.env.MONGO_URL) {
      user = await User.findById(userId);
    } else {
      user = inMemoryUsers.find(u => u._id === userId);
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (enable) {
      // Generate OTP secret
      const secret = speakeasy.generateSecret({
        name: `Pragya Trust (${user.email})`,
        issuer: 'Pragya Trust'
      });

      if (process.env.MONGO_URL) {
        await User.findByIdAndUpdate(userId, {
          otpSecret: secret.base32,
          otpEnabled: true
        });
      } else {
        user.otpSecret = secret.base32;
        user.otpEnabled = true;
      }

      res.json({
        message: 'OTP enabled successfully',
        qrCode: secret.otpauth_url
      });
    } else {
      if (process.env.MONGO_URL) {
        await User.findByIdAndUpdate(userId, {
          otpEnabled: false,
          $unset: { otpSecret: 1 }
        });
      } else {
        user.otpEnabled = false;
        delete user.otpSecret;
      }

      res.json({ message: 'OTP disabled successfully' });
    }
  } catch (error) {
    console.error('OTP toggle error:', error);
    res.status(500).json({ error: 'Failed to toggle OTP' });
  }
});

// Forgot password
router.post('/forgot-password', async (req, res) => {
  try {
    const { error, value } = forgotPasswordSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email } = value;

    let user;
    if (process.env.MONGO_URL) {
      user = await User.findOne({ email });
    } else {
      user = inMemoryUsers.find(u => u.email === email);
    }

    if (!user) {
      // Don't reveal if user exists or not
      return res.json({ message: 'If an account exists, password reset instructions have been sent' });
    }

    // Generate reset token
    const resetToken = generateVerificationToken();
    const resetExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    if (process.env.MONGO_URL) {
      await User.findByIdAndUpdate(user._id, {
        resetPasswordToken: resetToken,
        resetPasswordExpires: resetExpires
      });
    } else {
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = resetExpires;
    }

    // Send reset email
    await sendPasswordResetEmail(email, resetToken, user.name);

    res.json({ message: 'If an account exists, password reset instructions have been sent' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Failed to process password reset request' });
  }
});

// Reset password
router.post('/reset-password', async (req, res) => {
  try {
    const { error, value } = resetPasswordSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { token, password } = value;

    let user;
    if (process.env.MONGO_URL) {
      user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: new Date() }
      });
    } else {
      user = inMemoryUsers.find(u => 
        u.resetPasswordToken === token && 
        u.resetPasswordExpires > new Date()
      );
    }

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    // Update password
    if (process.env.MONGO_URL) {
      await User.findByIdAndUpdate(user._id, {
        password,
        $unset: { resetPasswordToken: 1, resetPasswordExpires: 1 }
      });
    } else {
      user.password = password; // In production, hash this
      delete user.resetPasswordToken;
      delete user.resetPasswordExpires;
    }

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Password reset failed' });
  }
});

// Get current user
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const userId = (req as any).user.id;
    
    let user;
    if (process.env.MONGO_URL) {
      user = await User.findById(userId).select('-password -otpSecret');
    } else {
      user = inMemoryUsers.find(u => u._id === userId);
      if (user) {
        const { password, otpSecret, ...userWithoutSensitive } = user;
        user = userWithoutSensitive;
      }
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to get user information' });
  }
});

// Logout
router.post('/logout', authenticateToken, (req, res) => {
  // With JWT, logout is handled client-side by removing the token
  res.json({ message: 'Logged out successfully' });
});

// Resend verification email
router.post('/resend-verification', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email required' });
    }

    let user;
    if (process.env.MONGO_URL) {
      user = await User.findOne({ email, isEmailVerified: false });
    } else {
      user = inMemoryUsers.find(u => u.email === email && !u.isEmailVerified);
    }

    if (!user) {
      return res.json({ message: 'If an unverified account exists, verification email has been sent' });
    }

    // Generate new verification token
    const verificationToken = generateVerificationToken();
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    if (process.env.MONGO_URL) {
      await User.findByIdAndUpdate(user._id, {
        emailVerificationToken: verificationToken,
        emailVerificationExpires: verificationExpires
      });
    } else {
      user.emailVerificationToken = verificationToken;
      user.emailVerificationExpires = verificationExpires;
    }

    // Send verification email
    await sendVerificationEmail(email, verificationToken, user.name);

    res.json({ message: 'If an unverified account exists, verification email has been sent' });
  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({ error: 'Failed to resend verification email' });
  }
});

export default router;
