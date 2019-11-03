import React, { Component } from 'react';
import TodoItems from './TodoItem'
import propTypes from 'prop-types'; 

class Todos extends Component {


  render(){
return this.props.todos.map((todo) => (
  <TodoItems key={todo.id} todo = {todo} markComplete = {this.props.markComplete} />
))
  }
}

//proptypes
Todos.propTypes = {
  todos: propTypes.array.isRequired
}

export default Todos;
