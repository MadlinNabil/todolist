import React, { Component } from "react";
import TodoItems from "./Component/TodoItem/TodoItem";
import AddItem from "./Component/AddItem/AddItem";

class App extends Component{
  state = {
    items : [
      {id:1,name:'Madlin' ,age:28},
      {id:2,name:'Tony' ,age:28},
      {id:3,name:'Marto' ,age:23}
    ]
  }
  deleteItem = (id) =>{
    /* first way
    let items=this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i,1);
    this.setState({items}) 
    */
    // second way
    let items=this.state.items.filter(item =>{
      return item.id !== id
    })
    this.setState({items})
  }
  addItem = (item) => {
    item.id = Math.random;
    let items=this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
  return (
    <div className="App container">
      <h1 className="text-center">Todo List App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
      <AddItem addItem={this.addItem}/>
    </div>
  );
  }
}

export default App;
