'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.list_all_users = function(req, res){
    User.find({}, function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
};

exports.create_a_user = function(req, res){
    var new_user = new User(req.body);
    new_user.save(function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
};

exports.list_a_user = function(req, res){
    User.findById(req.params.userId, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
};

exports.update_a_user = function(req, res){
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
};
