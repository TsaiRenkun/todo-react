import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from "moment";



class Form extends React.Component {

constructor(){
  super()
  console.log("constructing");

  this.state = {
        thingsTodo: "",
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD")
    }
  }

clickTodoHandler() {


    let currentword = this.state.thingsTodo
    console.log(this.state.thingsTodo)


    let list = {text :currentword, date: this.state.currentDate}


    console.log(list)

if (currentword){
    this.props.toDoUpdate(list)

    this.refs.input.value = "";
    this.state.thingsTodo = "";
    }
}

todoHandler(event){
this.state.thingsTodo = event.target.value
}

  render() {

    return (
        <div>
        <input ref= "input" onChange={(event)=>{this.todoHandler(event);}}/>
        <button onClick={()=>{this.clickTodoHandler()}}>Add a "To Do"</button>
        </div>
    );
  }
}

export default Form;