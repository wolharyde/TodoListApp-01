const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
  notes: { type: String },
  cost: { type: Number }
}, {
  timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;