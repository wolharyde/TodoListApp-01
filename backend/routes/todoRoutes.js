const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new todo
router.post('/', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    cost: req.body.cost,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a todo
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    if (req.body.title != null) {
      todo.title = req.body.title;
    }
    if (req.body.description != null) {
      todo.description = req.body.description;
    }
    if (req.body.completed != null) {
      todo.completed = req.body.completed;
      if (todo.completed) {
        todo.completedAt = new Date();
      } else {
        todo.completedAt = null;
      }
    }
    if (req.body.notes != null) {
      todo.notes = req.body.notes;
    }
    if (req.body.cost != null) {
      todo.cost = req.body.cost;
    }

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    await todo.remove();
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;