// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy API requests to another server
app.use('/api', createProxyMiddleware({ target: 'http://smart.com', changeOrigin: true }));

// Serve your React app (replace 'build' with your actual build directory)
app.use(express.static('my-react-app'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
