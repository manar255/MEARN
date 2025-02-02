const express = require('express');
const router = express.Router();


const userController = require('../controllers/user');
const userValidator = require('../validators/user');

router.post('/', userValidator.createUser, userController.createUser);

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.delete('/:id', userController.deleteUser);

router.patch('/:id',userValidator.updateUser, userController.updateUser);


module.exports = router;