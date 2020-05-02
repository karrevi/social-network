const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserController = {
        getAll(req, res) {
            User.find()
                .then(users => res.send({
                    users,
                    user: req.user
                }))
                .catch(console.error)
        },
        async register(req, res) {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 9)
                const user = await User.create(req.body);
                res.status(201).send({
                    user,
                    message: 'Usuario creado con exito'
                })
            } catch (error) {
                console.error(error)
                res.status(500).send({
                    message: 'Hubo un problema al intentar registrarte',
                    error
                })
            }
        }
    }

        module.exports = UserController;