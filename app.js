var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

server.listen(80)

app.use("/", express.static(__dirname + '/public'))

io.sockets.on('connection', function (socket) {
	socket.on('msg', function (data) {
		io.sockets.emit('new', data)
	})
})


/*
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
*/