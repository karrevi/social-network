const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const ChatSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    date: {
        type: String,
        default: Date.now
    }
});

module.exports = Chat = moongoose.model('chats', ChatSchema);