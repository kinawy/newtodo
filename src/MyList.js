import React, { Component } from "react";
import "./App.css";
import ListItem from "./Components/ListItem";

class MyList extends Component {
  
    state = {
      toDoItemArray: this.props.theList,
      newItem: "",
    };


  newItemChange = (e) => {
    console.log("Changing Item!");
    this.setState({
      newItem: e.target.value,
    });
  }

  addItem = (e) => {
    e.preventDefault();
    console.log("Adding new Item!");
    this.setState({
      newArray: this.state.toDoItemArray.push(this.state.newItem),
    });
  }

  clearList = () => {
    console.log("Clearing List!");
    this.setState({
      toDoItemArray: [],
    });
  }

  render() {
    let toDoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={"todo" + index} />
    ));

    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>{toDoItems}</ul>
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
    );
  }
}

export default MyList;
