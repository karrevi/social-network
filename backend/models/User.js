const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    surname: String,
    age: Number,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [String]
}),

const User = mongoose.model( 'User' , UserSchema );
module.exports = User;