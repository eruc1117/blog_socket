const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat mes', (msg) => {
    console.log(msg);
    io.emit('chat mes', msg);
  });
});
server.listen(4500, () => {
  console.log('listening on *:3000');
});