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
    })
  }

render() {
  return (
    <div>
      <h1>My Todos</h1>
      < TodoFo  rm addNewTodoFunc={this.addNewTodo.bind(this)}/>
      < TodoList todo_data={this.state.todos}/>
    </div>
  );
  }
}

export default App;
