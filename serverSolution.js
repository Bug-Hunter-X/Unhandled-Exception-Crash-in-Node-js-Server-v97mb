const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle requests here.  Example of potential error:
    // const result = someFunctionThatMightThrowAnError();
    res.end('Hello, world!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
