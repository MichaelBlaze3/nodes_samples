'use string';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String, 
        required: 'Please, enter the name of the new user'
    },
    phone: {
        type: String 
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [
            {
                type: String,
                enum: ['active', 'inactive']
            }
        ],
        default: ['active']
    },
    address: {
        type: String
    },
    rol: {
        type: [
            {
                type: String,
                enum: ['admin', 'user']
            }
        ],
        default: ['user']
    }
});

module.exports = mongoose.model('Users', UserSchema);