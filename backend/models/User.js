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
    tokens: [String],
});

UserSchema.method.toJSON = function (params) {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    delete user._v;
    return user;

}

const User = mongoose.model('User', UserSchema);
module.exports = User;