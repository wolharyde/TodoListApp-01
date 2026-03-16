const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace with your actual connection string)
mongoose.connect('mongodb://localhost/todolistapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// Define routes here (to be implemented)
app.get('/api/todos', (req, res) => {
  // Implement get all todos
});

app.post('/api/todos', (req, res) => {
  // Implement create new todo
});

app.put('/api/todos/:id', (req, res) => {
  // Implement update todo
});

app.delete('/api/todos/:id', (req, res) => {
  // Implement delete todo
});

app.get('/api/stats', (req, res) => {
  // Implement get stats
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});