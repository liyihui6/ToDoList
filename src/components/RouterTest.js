import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './Home'
import ToDoList from "./ToDoList/ToDoList";

class RouterTest extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <Router>
                <div>
                    <Link to={'/'}>首页</Link>
                    <Link to={'/todo'}>ToDo</Link>
                    <br/>
                    <br/>
                    <hr/>
                    <Route path={'/'} exact component={Home}></Route>
                    <Route path={'/todo'} component={ToDoList}></Route>
                </div>
            </Router>
        )
    }
}

export default RouterTest;
