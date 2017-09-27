import React, { Component } from 'react';

search(event){
  var todos = this.state.list;
  var filterTodos = todos.filter(function(todo){
    return todo.includes(event.target.value)
  })
}

this.setState({
  search: filterTodos
})
  console.log(event.target.value);
}




export default SearchForm;
