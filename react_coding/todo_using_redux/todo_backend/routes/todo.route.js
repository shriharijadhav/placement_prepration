const express = require('express');
const { createTodo, fetchAllTodo } = require('../controllers/todo');
const router = express.Router();

router.post('/createTodo',createTodo);
router.get('/fetchAllTodos',fetchAllTodo);


module.exports = router;