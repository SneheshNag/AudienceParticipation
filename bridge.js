var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(4000, function(){
  console.log('listening on port 4000');
});

//static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('made s c', socket.id);
  socket.on('chat', function(data){
    io.emit('chat', data);
  });
    socket.on('slide', (data)=>{
        console.log(data);
    });
});
