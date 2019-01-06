var express = require('express');
var router = express.Router();

var controllerUsers = require('../controllers/users');

/* GET users listing. */
router.get('/', controllerUsers.getUsers);

module.exports = router;
