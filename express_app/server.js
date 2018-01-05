var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, { 'content-type': 'text/plain'});
    res.end('Hello World');
});


server.listen(9001, '127.0.0.1');
console.log("Server started ar port 9001");