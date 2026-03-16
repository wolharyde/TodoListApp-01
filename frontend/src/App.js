import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Statistics from './components/Statistics';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/api/todos');
    setTodos(response.data);
  };

  const addTodo = async (todo) => {
    const response = await axios.post('http://localhost:5000/api/todos', todo);
    setTodos([...todos, response.data]);
  };

  const updateTodo = async (id, updatedTodo) => {
    await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="App">
      <h1>TodoListApp-01</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <Statistics todos={todos} />
    </div>
  );
}

export default App;