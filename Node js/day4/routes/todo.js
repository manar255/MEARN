const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
const todovalidator = require('../validators/todo');
const auth = require('../middleware/auth');


router.post('/',auth,todovalidator.createtodo,todoController.createTodo );
router.get('/users',auth,todoController.getUserTodos);
router.patch('/:id',auth,todoController.updateTodo);
router.delete('/:id',auth,todoController.deleteTodo);



module.exports = router;