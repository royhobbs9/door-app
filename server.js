const express = require('express');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
  });
io.on('connection', function (socket) {
    socket.emit('doorbell', { 
     
    });
  });
  server.listen(3000);
