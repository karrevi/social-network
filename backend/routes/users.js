const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const {
    authentication
} = require('../middleware/authenticaction')

router.get('/', authentication, UserController.getAll);
router.get('/', UserController.getAll);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/logout', authentication, UserController.logout);

module.exports = router;