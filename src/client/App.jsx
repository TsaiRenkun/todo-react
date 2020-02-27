import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {

constructor(){
  super()
  console.log("constructing");

  this.state = {
    thingsTodo : "",
    ToDoList : []
  }
}

clickTodoHandler() {

    let currentword = this.state.thingsTodo
    let array = this.state.ToDoList
if (currentword){
    array.push(currentword)

    this.setState(array)

    this.refs.input.value = "";
    this.state.thingsTodo = "";
    }
}

todoHandler(event){
this.state.thingsTodo = event.target.value
}


deleteItem(key){
    const filteredItems = this.state.ToDoList.filter((item) => {
      return this.state.ToDoList[key] !== item
    })
    this.setState({
      ToDoList: filteredItems,
    })
  }

  render() {

    let showList = this.state.ToDoList.map((stuff, index)=>{
        return(
            <div>
            <li key={index}>{stuff}
            <button key={index} onClick={() => this.deleteItem(index)}>Delete</button>
            </li>
            </div>
            )
    })

    return (
      <div >
        Welcome.
        <div>
        <input ref= "input" onChange={(event)=>{this.todoHandler(event);}}/>
        <button onClick={()=>{this.clickTodoHandler()}}>Add a "To Do"</button>
        </div>
        <div >
            <ul>
            {showList}
            </ul>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);