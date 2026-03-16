const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
  notes: { type: String },
  cost: { type: Number }
});

module.exports = mongoose.model('Todo', TodoSchema);