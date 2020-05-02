const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {jwt_auth_secret } = require('../config/keys');
const authentication = async(req,res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token,jwt_auth_secret);
        const user = await User.findOne({
            _id: payload._id,
            tokens: token
        });
        if(!user) {
            return res.status(401).send({
                message: 'No estas autorizado'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        res.status(401).send({
            message:'No estas autorizado',
            error
        })
    }
}
module.exports = {
    authentication
}