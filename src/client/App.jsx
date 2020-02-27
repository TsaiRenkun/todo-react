import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {

constructor(){
  super()
  console.log("constructing");

  this.state = {
    thingsTodo : "",
    ToDoList : [],
  }
}

clickHandler(number) {
    console.log("DO DO DO")
}



  render() {
    return (
      <div>
        Welcome.
        <button onClick={()=>{this.clickHandler()}}>Add a "To Do"</button>
      </div>
    );
  }
}

export default hot(module)(App);