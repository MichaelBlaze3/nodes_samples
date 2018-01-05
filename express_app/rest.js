var express = require('express');

var app = express();
var http = require('http').Server(app);

// Login. Authentication, something else 
//Middleware

var log = function(req, res, next){
    console.log('Login');
    next();
}

app.route('/').get(function(req, res){
    res.send("Hello Express");
});

app.route('/').put(function(req, res){
    res.send("Hello Express Put");
});

app.route('/about').get(log, function(req, res){
    res.json({result: "Hello Express About"});
});

http.listen(9001, '127.0.0.1', function(){
    console.log('Listening on port 9001');
});