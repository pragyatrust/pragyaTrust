import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Create email transporter
const createTransport = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('⚠️  Email configuration incomplete - emails will not be sent');
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Generate verification token
export const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Generate OTP
export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send verification email
export const sendVerificationEmail = async (email: string, token: string, name: string) => {
  const transporter = createTransport();
  if (!transporter) return false;

  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Verify Your Email - Pragya Trust',
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: #0B2545; padding: 20px; text-align: center;">
            <h1 style="color: #E85E00; margin: 0;">Pragya Trust</h1>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0B2545; margin-bottom: 20px;">Welcome, ${name}!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Thank you for joining Pragya Trust. Please verify your email address to complete your registration.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationUrl}" 
                 style="background: #E85E00; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                Verify Email Address
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              If the button doesn't work, copy and paste this link into your browser:<br>
              <a href="${verificationUrl}" style="color: #E85E00;">${verificationUrl}</a>
            </p>
            
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              This link will expire in 24 hours. If you didn't create an account, please ignore this email.
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px;">
            © ${new Date().getFullYear()} Pragya Trust. All rights reserved.
          </div>
        </div>
      `
    });
    return true;
  } catch (error) {
    console.error('Error sending verification email:', error);
    return false;
  }
};

// Send OTP email
export const sendOTPEmail = async (email: string, otp: string, name: string) => {
  const transporter = createTransport();
  if (!transporter) return false;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Your Login OTP - Pragya Trust',
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: #0B2545; padding: 20px; text-align: center;">
            <h1 style="color: #E85E00; margin: 0;">Pragya Trust</h1>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0B2545; margin-bottom: 20px;">Login Verification</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Hello ${name}, here's your one-time password (OTP) for login:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <div style="background: #f8f9fa; border: 2px solid #E85E00; padding: 20px; border-radius: 8px; display: inline-block;">
                <span style="font-size: 32px; font-weight: bold; color: #0B2545; letter-spacing: 5px;">${otp}</span>
              </div>
            </div>
            
            <p style="color: #666; font-size: 14px; text-align: center;">
              This OTP will expire in 10 minutes.
            </p>
            
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              If you didn't request this login, please ignore this email and ensure your account is secure.
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px;">
            © ${new Date().getFullYear()} Pragya Trust. All rights reserved.
          </div>
        </div>
      `
    });
    return true;
  } catch (error) {
    console.error('Error sending OTP email:', error);
    return false;
  }
};

// Send password reset email
export const sendPasswordResetEmail = async (email: string, token: string, name: string) => {
  const transporter = createTransport();
  if (!transporter) return false;

  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Reset Your Password - Pragya Trust',
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: #0B2545; padding: 20px; text-align: center;">
            <h1 style="color: #E85E00; margin: 0;">Pragya Trust</h1>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0B2545; margin-bottom: 20px;">Reset Your Password</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Hello ${name}, you requested to reset your password. Click the button below to create a new password:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" 
                 style="background: #E85E00; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                Reset Password
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              If the button doesn't work, copy and paste this link into your browser:<br>
              <a href="${resetUrl}" style="color: #E85E00;">${resetUrl}</a>
            </p>
            
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              This link will expire in 1 hour. If you didn't request this reset, please ignore this email.
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px;">
            © ${new Date().getFullYear()} Pragya Trust. All rights reserved.
          </div>
        </div>
      `
    });
    return true;
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return false;
  }
};

// Send welcome email
export const sendWelcomeEmail = async (email: string, name: string) => {
  const transporter = createTransport();
  if (!transporter) return false;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Welcome to Pragya Trust!',
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: #0B2545; padding: 20px; text-align: center;">
            <h1 style="color: #E85E00; margin: 0;">Pragya Trust</h1>
          </div>
          
          <div style="padding: 30px; background: #ffffff;">
            <h2 style="color: #0B2545; margin-bottom: 20px;">Welcome to Our Community!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Dear ${name},
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Welcome to Pragya Trust! We're delighted to have you join our community of seekers exploring consciousness and spiritual wisdom.
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              You now have access to:
            </p>
            
            <ul style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              <li>Exclusive courses and workshops</li>
              <li>Sacred texts and resources</li>
              <li>Community discussions and satsang</li>
              <li>Meditation practices and guidance</li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.FRONTEND_URL}/courses" 
                 style="background: #E85E00; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                Explore Courses
              </a>
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              "Let noble thoughts come to us from all sides."
            </p>
            
            <p style="color: #666; line-height: 1.6;">
              With gratitude,<br>
              The Pragya Trust Team
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px;">
            © ${new Date().getFullYear()} Pragya Trust. All rights reserved.
          </div>
        </div>
      `
    });
    return true;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return false;
  }
};
