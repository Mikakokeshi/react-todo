import React, { Component } from 'react';
import './App.css';
import TodoForm from './Components/Todo/TodoForm';
import TodoList from './Components/Todo/TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: ['clean whiteboard', 'drink water', 'sleep']
    }
  }

  addNewTodo(todo) {
    console.log(todo)
    this.setState({
      todos:this.state.todos.concat(todo)
    });
    this.setState({
      search:this.state.search.concat(todo)
    });
  }

  search(event){
    var items = this.state.todos;
    var filterItems = items.filter(function(todo){
      return todo.includes(event.target.value)
      });
    this.setState({ search: filterItems });
    console.log(event.target.value);
  }


render() {
  return (
    <div>
      <h2>My Todos</h2>
  		< input onChange={(event)=>this.search(event)} type="text" placeholder="Search"/>
      < TodoForm addNewTodoFunc={this.addNewTodo.bind(this)}/>
      < TodoList todo_data={this.state.todos}/>
    </div>
  );
  }
}

export default App;
