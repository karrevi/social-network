const router = require('express').Router();
const UserController = require('../controllers/UserController.js');


router.get('/',  UserController.getAll);
module.exports = router;