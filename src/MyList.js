import React, { Component } from 'react'
import './App.css'
import logo from "./sloth.gif";
import ListItem from './ListItem'

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ""
    }
  }

  clearList = (e) => {
    console.log("Clearing list!")
    this.setState({
      toDoItemArray: []
    });
  }

  newItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    });
  }

  addItem = (e) => {
    e.preventDefault();
    const updatedArray = this.state.toDoItemArray;
    updatedArray.push(this.state.newItem);
    this.setState({
      toDoItemArray: updatedArray,
      newItem: ""
    })
  }

  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={'todo' + index} />
    ))
    
    return (
      <div>
      <img src={logo} className="App-logo" alt="logo" />
      <br/>
      <br/>
        <h1>Things I should stop procrastinating &#x21AF;</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input 
            type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    )
  }
}

export default MyList
