import React, { useEffect, useState } from "react";
import '../../App.css'

const Email = ({ event, info }) => {
  const [email, setEmail] = useState(info.email);
  const [statusMessage, setStatusMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('Emailbody.html'); // Default template
  const [seat, setSeat] = useState('');
  const [sec, setSec] = useState('');

  const name = info.firstname;
  const lastname = info.lastname;
  const cl = info.yourClname;
  const head = info.emailDets.header;
  const sent = event.tixsent;
  const img = info.emailDets.img;
  const title = event.title;
  const time = event.time;
  const day = event.day;
  const date = event.date;
  const location = event.location;
  const state = event.state;

  useEffect(() => {
    let seats = [];
    if (event.Generaladmission) {
      setSeat(`GENERAL ADMISSION x${event.tixsent}`);
    } else if (event.tixsent < 2) {
      setSeat(event.startingSeatNumber);
    } else {
      for (let i = 0; i < event.tixsent; i++) {
        seats.push(event.startingSeatNumber + i);
      }
      setSeat(seats.join('/'));
    }
  }, [event]);

  useEffect(() => {
    if (event.Generaladmission) {
      setSec(`${seat}`);
    } else {
      setSec(`Section ${event.initialSection}, Row ${event.initialRow}, Seat ${seat}`);
    }
  }, [seat, event]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          lastname,
          cl,
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
          info,
          status: info.status,
          sec,
          template: selectedTemplate,  // Send the selected template
        }),
      });
      const data = await response.json();
      console.log(data.message);
      setStatusMessage('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send email.');
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "red" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter Client's Email"
          style={{
            padding: "5px 10px",
            outline: "none",
            border: "none",
            borderBottom: "2px solid green",
            background: "transparent",
            color: "white",
            fontSize: "18px",
            width: "24rem",
            borderRadius: "0"
          }}
        />
        <br />

        <label htmlFor="template">Select Email Template:</label>
        <select
          name="template"
          id="template"
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
          style={{
            marginTop: "10px",
            padding: "8px",
            borderRadius: "4px",
            width: "100%",
            fontSize: "16px"
          }}
        >
          <option value="Service_Fee.html">Service Fee</option>
          <option value="Processing_Fee.html">Processing Fee</option>
          <option value="Delivery_Fee.html">Delivery Fee</option>
          {/* Add more options as needed */}
        </select>

        <p>{statusMessage}</p>

        <input type="submit" value="Send Email" className="submit-button10" />
      </form>
    </div>
  );
};

export default Email;
