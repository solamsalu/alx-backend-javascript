const http = require('http');

// Create a small HTTP server
const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the app variable
module.exports = app;
