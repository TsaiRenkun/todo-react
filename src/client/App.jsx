import React from 'react';
import {hot} from 'react-hot-loader';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from "moment";


import Form from './form';
import Cards from './cards';

class App extends React.Component {

constructor(){
  super()
  console.log("constructing");

  this.state = {
    ToDoList : [],
    doneList : []
  }
}

  render() {

    const myCallback = (list)=>{
        let array = this.state.ToDoList
        console.log("Add sTuff in list");
        array.push(list)
        this.setState({ToDoList: array})
        console.log(this.state.ToDoList);
    }

    const updateToDo = (list) =>{
        let array = list
        console.log
        this.setState({ToDoList:array})
    }

    const doneCallback = (list) => {
        let array = this.state.doneList
        console.log("Add sTuff in list");
        array.push(list)
        this.setState({doneList: array})
        console.log(this.state.doneList)
    }

    return (
      <div>
        Welcome.
        <div>
        <Form toDoUpdate = {myCallback}/>
        </div>
        <div>
            <h2> TO DO LIST , SO YOU BETTER DO </h2>
            <Cards list = {this.state.ToDoList} doneToDo = {doneCallback} todoNew = {updateToDo}/>
        </div>

        <div>
            <h2> FINISH LIAO </h2>
            <Cards list = {this.state.doneList} delete = "false"/>
        </div>

      </div>
    );
  }
}

export default hot(module)(App);