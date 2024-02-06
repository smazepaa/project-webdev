const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');

router.get('/', userController.getUserList);
router.post('/', userController.postUser);

module.exports = router;