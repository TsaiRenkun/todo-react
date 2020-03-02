import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from "moment";

class Card extends React.Component {

  constructor(){
  super()
  console.log("constructing");

  this.state = {
        thingsTodo: "",
        currentDate: new Date(),
        markedDate: moment(new Date()).format("YYYY-MM-DD")
    }
  }

    deleteItem(key){
    let items;

    const doneItems = this.props.list.filter((item) => {
      if(this.props.list[key].text == item.text){
        return  items = this.props.list[key]
      }

    })

    const filteredItems = this.props.list.filter((item) => {
      return this.props.list[key].text !== item.text
    })
        this.props.todoNew(filteredItems)
        this.props.doneToDo(items)
    }

    editItem(key){
        console.log("EDITTINASIDNISANFIS STUFF")

        this.props.list.filter((item)=>{
            if(this.props.list[key].text == item.text){
                this.state.thingsTodo = item.text
                return (
                    <div>
                        <input ref= "input" onChange={(item)=>{this.todoHandler(item.text);}}/>
                        <button onClick={()=>{this.clickTodoHandler()}}>Add a "To Do"</button>
                    </div>
                )
            }
        })
    }

  render() {
    console.log("CAREADADSDECARDS CARDS CaRDS s")
    console.log(this.props.list)
    let showList;
if(this.props.delete == "false"){
      showList = this.props.list.map((stuff, index)=>{
        const today = stuff.date;
        const datenow = moment(today).format("LLLL")
        return(
            <div>
            <li key={index}> {stuff.text} {datenow}
            </li>
            </div>
            )
    })

} else {
    showList = this.props.list.map((stuff, index)=>{
        const today = stuff.date;
        const datenow = moment(today).format("LLLL")
        return(
            <div>
            <li key={index}> {stuff.text} {datenow}
            <button key={index} onClick={() => this.deleteItem(index)}>Delete</button>
            <button key={index} onClick={() => this.editItem(index)}>Edit</button>
            </li>
            </div>
            )
    })
}
    return (
        <div>
        {showList}
        </div>
    );
  }
}

export default Card;