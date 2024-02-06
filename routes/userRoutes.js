const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');

router.get('/', userController.getUserList);
router.post('/', userController.postUser);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.putUser);
router.patch('/:id', userController.patchUser);

module.exports = router;