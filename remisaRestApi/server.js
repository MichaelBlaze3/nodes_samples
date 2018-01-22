var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Task = require('./api/models/remisaModel');
var bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/remisadb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + 'not found'})
});


var routes = require('./api/routes/remisaRoutes');
routes(app);
app.listen(port);

console.log('remisa RESTful API server started on: ' + port);