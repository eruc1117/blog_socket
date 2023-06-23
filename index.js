const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

/**
 * 連線開始，由 API 伺服器提供連線資料
 * 
 */
app.get("/api/socket/:userId", (req, res) => {
  let socketState = false;
  // 建立連線
  io.on('connection', (socket) => {
    socketState = (socket.connected)
    console.log("OK  --> " + socketState)
    //設定 room
    socket.on('chat mes', (msg) => {
      //更新設定狀態
      socketState = (socket.connected)
      //紀錄對話資料
      console.log("OK  --> " + socketState)
      //發送資料
      io.emit('chat mes', msg);
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  res.sendFile(__dirname + '/index.html');
  console.log("OK  --> " + state)
})

/**
 * 中止 socket 連線
 * 
 */
app.get("/api/stop/socket/:userId", (req, res) => {
  io.in("chat mes").disconnectSockets(true);
  res.sendFile(__dirname + '/index.html');
});

server.listen(4500, () => {
  console.log('listening on *:3000');
});