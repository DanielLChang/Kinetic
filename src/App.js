import React, { Component } from 'react';
import './App.css';

import Clock from './Clock.jsx';
import Todo from './Todo.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
