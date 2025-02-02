const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
const todovalidator = require('../validators/todo');

router.post('/',todovalidator.createtodo,todoController.createTodo );
router.get('/users/:id',todoController.getUserTodos);
router.patch('/:id',todoController.updateTodo);
router.delete('/:id',todoController.deleteTodo);



module.exports = router;