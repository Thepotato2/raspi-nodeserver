// ping thepotato.local
// ssh thepotato@<IP adress>
// cd my-server/raspi-nodeserver
// node app.js

// git commit -a -m "<message>"
// git push
// git pull
const express = require('express');
const app = express()
const http = require('http');
const { Server } = require('socket.io');
const port = 3000

let counter = 0

const server = http.createServer(app);

// Initialize Socket.io on the HTTP server
const io = new Server(server, {
  cors: {
    //origin: "*", // Adjust this for production security
    methods: ["GET", "POST"]
  }
});

app.use(express.static('public'))

// Socket.io Event Handling
io.on('connect', (socket) => {
  io.emit('increment', { counter });
  console.log('A user connected:', socket.id);

  // Listen for a custom event from the client
  socket.on('increment', () => {
    // Broadcast the new nunber to everyone (including sender)
    counter++
    io.emit('increment', { counter });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

// app.get('/increment', (req, res) => {
//   counter++

//   res.json({currentCounter: counter})
// })

// app.use(express.static('public'))

// app.listen(port, () => {
//   console.log(`My stoopid app is listening on port ${port}`)
// })