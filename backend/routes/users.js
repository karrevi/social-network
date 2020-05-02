const router = require('express').Router();
const UserController = require('../controllers/UserController.js');


router.get('/',  UserController.getAll);
router.post('/register', UserController.register);
module.exports = router;