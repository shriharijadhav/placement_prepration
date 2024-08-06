const express = require('express');
const { createTodo, fetchAllTodo, deleteTodo, updateTodo } = require('../controllers/todo');
const router = express.Router();

router.post('/createTodo',createTodo);
router.get('/fetchAllTodos',fetchAllTodo);
router.delete('/deleteTodo',deleteTodo)
router.patch('/updateTodo',updateTodo)


module.exports = router;