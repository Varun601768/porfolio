// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
// Serve your React app’s build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// Configure Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,     // your Gmail address
    pass: process.env.EMAIL_PASS,     // your Gmail app password
  },
});

app.post('/api/send-message', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'varunmcchinthu@gmail.com',
    subject: subject || 'New Contact Message',
    text: `You received a message from ${name} <${email}>:\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Email error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    res.json({ message: 'Email sent successfully!' });
  });
});

// Fallback to React
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) =>
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
