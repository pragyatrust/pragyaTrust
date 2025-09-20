import express from 'express';
import Joi from 'joi';
import nodemailer from 'nodemailer';
import { Message } from '../models/Message.js';

const router = express.Router();

// In-memory storage fallback
let inMemoryMessages: any[] = [];

const contactSchema = Joi.object({
  name: Joi.string().trim().max(100).required(),
  email: Joi.string().email().max(255).required(),
  phone: Joi.string().trim().max(20).optional().allow(''),
  message: Joi.string().trim().max(2000).required()
});

// Email transporter setup
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

router.post('/', async (req, res) => {
  try {
    // Validate input
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, phone, message } = value;

    // Store message
    let savedMessage;
    if (process.env.MONGO_URL) {
      savedMessage = new Message({ name, email, phone, message });
      await savedMessage.save();
    } else {
      savedMessage = {
        _id: Date.now().toString(),
        name,
        email,
        phone,
        message,
        createdAt: new Date(),
        read: false
      };
      inMemoryMessages.push(savedMessage);
    }

    // Send email notification
    const transporter = createTransport();
    if (transporter) {
      try {
        // Email to admin
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: 'pragyatrust108@gmail.com',
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `
        });

        // Auto-reply to user
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: email,
          subject: 'Thank you for contacting Pragya Trust',
          html: `
            <h2>Thank you for your message!</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you within 3-5 business days.</p>
            <p>Your message:</p>
            <blockquote style="border-left: 4px solid #CC8A19; padding-left: 16px; margin: 16px 0; color: #666;">
              ${message.replace(/\n/g, '<br>')}
            </blockquote>
            <p>Best regards,<br>Pragya Trust Team</p>
            <hr>
            <p><small>This is an automated response. Please do not reply to this email.</small></p>
          `
        });

        console.log('✅ Contact form emails sent successfully');
      } catch (emailError) {
        console.error('❌ Email sending failed:', emailError);
        // Don't fail the request if email fails
      }
    }

    res.json({ ok: true, message: 'Message received successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

// Get messages (for admin)
router.get('/', async (req, res) => {
  try {
    let messages;
    if (process.env.MONGO_URL) {
      messages = await Message.find().sort({ createdAt: -1 });
    } else {
      messages = inMemoryMessages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    res.json(messages);
  } catch (error) {
    console.error('Get messages error:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

export default router;
