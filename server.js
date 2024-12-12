const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.end('Hello, world!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});