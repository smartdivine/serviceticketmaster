import React, { useState } from 'react';

const ChatPage = ({info}) => {
  const [email, setEmail] = useState(info.email);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle sending the email
  const sendEmail = async () => {
    setLoading(true);
    setMessage(''); // Reset message

    try {
      const response = await fetch('http://localhost:4050/send-chat-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Chat link sent successfully!');
      } else {
        setMessage('Error sending the chat link.');
      }
    } catch (error) {
      setMessage('Error sending the chat link.');
      console.error('Error:', error);
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      sendEmail();
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Send Chat Link</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter receiver's email"
          style={{
            padding: '10px',
            width: '100%',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Chat Link'}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: '20px', color: message.includes('Error') ? 'red' : 'green' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default ChatPage;
