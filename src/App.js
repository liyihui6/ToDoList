import React, { Component } from 'react';
import './assets/css/App.css';
import ToDoList from './components/ToDoList/ToDoList'

class App extends Component {
  state = {
  }
  render() {
    return (
      <div className="App">
          <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;
