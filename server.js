var express = require('express')

var app = express()
var server = app.listen(draw-with-me.surge.sh/public)

app.use(express.static('public'))
console.log("My socket server is running")

var socket = require('socket.io')

var io = socket(server)

io.sockets.on('connection', newConnection)

function newConnection(socket){
  console.log('this is a socket: ', socket.id)
  console.log(socket.id)

  socket.on('mouse', mouseMsg)

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data)
    console.log(data);

  }
}
