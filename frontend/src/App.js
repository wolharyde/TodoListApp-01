import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import Statistics from './components/Statistics';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>TodoListApp-01</h1>
        </header>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/stats" component={Statistics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;