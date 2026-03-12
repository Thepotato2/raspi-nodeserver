const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from the Raspberry Pi! also you stink\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://your-pi-ip:${port}/`);
});