import React, {Component} from 'react';
import '../../assets/css/todo.css'
import 'antd/dist/antd.css';
import { Input,Button } from 'antd';
import Storage from '../../model/storage'

class ToDoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists:[],
            name: '',
            did:0,
            notdid:0
        }
    }
    remove(key){
        let lists = this.state.lists
        let did = this.state.did
        let notdid = this.state.notdid
        if (lists[key].statue === 1){
            notdid -= 1
        } else {
            did -= 1
        }
        lists.splice(key,1)
        Storage.set('todolist',lists)
        this.setState({
            lists:lists,
            did:did,
            notdid:notdid
        })
    }
    handdleName = (e)=>{
        this.setState({
            name : e.target.value
        })
    }
    addList = (e) => {
        if (e.keyCode!==13){
            return
        }
        let lists = this.state.lists
        lists.push({
            name:this.state.name,
            statue:1,
        })
        Storage.set('todolist',lists)
        this.setState({
            lists:lists,
            name:'',
            notdid:this.state.notdid+1
        })
    }
    setDid = (key)=>{
        let lists = this.state.lists
        lists[key].statue = 2;
        Storage.set('todolist',lists)
        this.setState({
            lists:lists,
            notdid:this.state.notdid-1,
            did:this.state.did+1
        })
    }
    setNotDid = (key)=>{
        let lists = this.state.lists
        console.log(lists)
        lists[key].statue = 1;
        Storage.set('todolist',lists)
        this.setState({
            lists:lists,
            notdid:this.state.notdid+1,
            did:this.state.did-1
        })
    }

    componentWillMount() {
        this.setState({
            lists:Storage.get('todolist')
        })
    }
    componentDidMount() {
        let count = 0
        // console.log(this.state.lists)
        this.state.lists.map((value) => {
            if (value.statue === 1){
                count ++;
            }
            return null
        })
        this.setState({
            notdid:count,
            did:this.state.lists.length-count
        })
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className={"section"}>
                        <label htmlFor="" className="label">ToDoList</label>
                        <div className="form"><Input size={"small"} value={this.state.name} placeholder={"添加ToDo"} onChange={this.handdleName} onKeyUp={this.addList}/></div>
                    </div>
                </header>
                <div className={"content"}>
                    <div className="title">正在进行<span className="count">{this.state.notdid}</span></div>
                    <div>
                        {
                            this.state.lists.map((value,key) => {
                                if (value.statue === 1){
                                    return (
                                        <div key={key} className="box">
                                            <input type="checkbox" checked={value.checked} onChange={this.setDid.bind(this,key)}/>
                                            {value.name}
                                            <div className="remove"><Button size={"small"} onClick={this.remove.bind(this,key)}>移除</Button></div>
                                        </div>
                                    )
                                }
                                return null
                            })
                        }
                    </div>
                </div>
                <div className={"content"}>
                    <div className="title">已完成<span className="count">{this.state.did}</span></div>
                    <div>
                        {
                            this.state.lists.map((value,key) => {
                                if (value.statue === 2){
                                    return (
                                        <div key={key} className="box">
                                            <input type="checkbox" checked={!value.checked} onChange={this.setNotDid.bind(this,key)}/>
                                            {value.name}
                                            <div className="remove"><Button size={"small"} onClick={this.remove.bind(this,key)}>移除</Button></div>
                                        </div>
                                    )
                                }
                                return null
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;
