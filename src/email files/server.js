const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const axios = require('axios'); // For making API requests
const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: '*', 
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 200
}));

// Route to send an email with the generated and shortened chat link
app.post('/send-chat-link', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    const chatLink = `https://l9ts4fww-3000.uks1.devtunnels.ms/openchat/${encodeURIComponent(email)}`;

    try {
        // Shorten the chat link using Bitly API
        const bitlyResponse = await axios.post(
            'https://api-ssl.bitly.com/v4/shorten',
            { long_url: chatLink },
            {
                headers: {
                    'Authorization': `Bearer 0e3ff4363456aa352a85fc635b06e6ea8445c112`, // Replace with your Bitly access token
                    'Content-Type': 'application/json'
                }
            }
        );

        const shortenedLink = bitlyResponse.data.link; // The shortened link

        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'isrealdiviney@gmail.com',
                pass: 'lqmjqlwerejsbbin' // Store securely, consider using environment variables
            }
        });

        // HTML email body with the shortened link
        const personalizedEmail = `
          <p>Hello!</p>
          <p>We are excited to chat with you. Please click the button below to continue the chat with us.</p>
          <a href="${shortenedLink}" target="_blank" style="text-decoration:none;">
            <button style="
              background-color: #4CAF50; 
              color: white; 
              padding: 10px 20px; 
              border: none; 
              border-radius: 5px;
              cursor: pointer;
              font-size: 16px;">
              Start Chat
            </button>
          </a>
          <p>Or copy and paste this link in your browser: <br>
          <a href="${shortenedLink}">${shortenedLink}</a></p>
        `;

        const mailOptions = {
            from: 'isrealdiviney@gmail.com',
            to: email,
            subject: 'Chat with Us',
            html: personalizedEmail,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('Chat link sent successfully!');
    } catch (error) {
        console.error('Error sending email or shortening link:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(4050, '0.0.0.0', () => {
    console.log('Server running on port 4050');
});
