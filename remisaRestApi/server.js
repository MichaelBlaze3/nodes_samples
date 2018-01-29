var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

var Task = require('./api/models/taskModel');
var User = require('./api/models/userModel');

var bodyParser = require('body-parser');

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/remisadb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(function(req, res){
//     res.status(404).send({url: req.originalUrl + 'not found'})
// });

var routes = require('./api/routes/taskRoutes');

routes(app);

app.listen(port);

console.log('remisa RESTful API server started on: ' + port);