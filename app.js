const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const Room = require("./class/room")


io.on('connection', (socket) => {
  console.log('connected');
  let acceptName = "";
  let room = new Room(io, socket);
    socket.on('roomName', (name) => {
      console.log(name)
      room.joinRoom(name);
      acceptName = `${name}Msg`;
    })
    

    socket.on("chat", (msg) => {
      room.emitMsg(msg);
    });
});


server.listen(4500, () => {
  console.log('listening on *:3000');
});