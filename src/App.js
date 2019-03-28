import React, { Component } from 'react';
import './assets/css/App.css';
// import ToDoList from './components/ToDoList/ToDoList'
import RouterTest from './components/RouterTest'

class App extends Component {
    state = {
    }
    render() {
        return (
            <div className="App">
                {/*<ToDoList></ToDoList>*/}
                <RouterTest></RouterTest>
            </div>
        );
    }
}

export default App;
