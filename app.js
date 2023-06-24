const express = require('express');
const app = express();
const routes = require("./routes/index.js");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use((req, res, next) => {
  req.io = io;
  next();
})
app.use(routes);

server.listen(4500, () => {
  console.log('listening on *:3000');
});