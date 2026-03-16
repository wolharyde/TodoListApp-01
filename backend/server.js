const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection (replace with your actual connection string)
const uri = "mongodb://localhost:27017/todolistapp";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Import routes
const todosRouter = require('./routes/todos');
const statsRouter = require('./routes/stats');

// Use routes
app.use('/api/todos', todosRouter);
app.use('/api/stats', statsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});