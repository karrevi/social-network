require('./config/mongoose.js');
const express = require('express');
const app = express();
const morgan = require('morgan');
const socketIo = require('socket.io');
const PORT = process.env.PORT || 3001;
const usersRouter = require('./routes/users');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST", "GET", "PUT", "OPTIONS", "DELETE");
    next();
});
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.options('/*', (req, res) => res.send());

app.use('/users', usersRouter);
app.listen(PORT, () => console.log('server running on port: ' + PORT));