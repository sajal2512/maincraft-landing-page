const cors = require('cors');
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { Resend } = require('resend');

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseOrigins(value) {
  return clean(value)
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function validateContactPayload(body) {
  const values = {
    name: clean(body && body.name),
    email: clean(body && body.email),
    subject: clean(body && body.subject),
    message: clean(body && body.message)
  };

  const errors = {};

  Object.entries(values).forEach(([field, value]) => {
    if (!value) {
      errors[field] = `${field} is required.`;
      return;
    }

    if (value.length > MAX_LENGTHS[field]) {
      errors[field] = `${field} must be ${MAX_LENGTHS[field]} characters or fewer.`;
    }
  });

  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = 'email must be a valid email address.';
  }

  if (values.message && values.message.length < 10) {
    errors.message = 'message must be at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    values,
    errors
  };
}

function createContactApp() {
  const app = express();
  const allowedOrigins = parseOrigins(process.env.CORS_ORIGINS);

  app.disable('x-powered-by');
  app.use(helmet());
  app.use(express.json({ limit: '32kb' }));
  app.use(cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Origin is not allowed by CORS.'));
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
  }));

  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: {
      success: false,
      error: 'Too many contact form submissions. Please try again later.'
    }
  });

  async function contactHandler(req, res) {
    const validation = validateContactPayload(req.body);
    if (!validation.isValid) {
      res.status(400).json({
        success: false,
        error: 'Please fix the highlighted fields and try again.',
        fields: validation.errors
      });
      return;
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      res.status(500).json({
        success: false,
        error: 'Contact email service is not configured.'
      });
      return;
    }

    const { name, email, subject, message } = validation.values;
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `Portfolio contact: ${subject}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Subject: ${subject}`,
          '',
          message
        ].join('\n'),
        html: `
          <h2>New portfolio contact message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `
      });

      if (error) {
        console.error('Resend API rejected the send:', error);
        res.status(502).json({
          success: false,
          error: 'The message could not be sent right now. Please try again shortly.'
        });
        return;
      }

      console.log('Email sent, Resend id:', data && data.id);
      res.status(200).json({
        success: true,
        message: 'Thanks, your message has been sent.'
      });
    } catch (error) {
      console.error('Failed to send contact email:', error);
      res.status(502).json({
        success: false,
        error: 'The message could not be sent right now. Please try again shortly.'
      });
    }
  }

  app.options(['/api/contact', '/'], (req, res) => res.sendStatus(204));
  app.post(['/api/contact', '/'], contactLimiter, contactHandler);

  app.use((err, req, res, next) => {
    if (err && err.type === 'entity.too.large') {
      res.status(413).json({
        success: false,
        error: 'Message payload is too large.'
      });
      return;
    }

    if (err && err.message === 'Origin is not allowed by CORS.') {
      res.status(403).json({
        success: false,
        error: 'This site is not allowed to submit the contact form.'
      });
      return;
    }

    next(err);
  });

  return app;
}

module.exports = {
  createContactApp,
  validateContactPayload
};
