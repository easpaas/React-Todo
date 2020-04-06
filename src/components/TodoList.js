import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  return (
    props.todoList.map(item => {
      return (
        <Todo 
          key={item.id} 
          todo={item} 
          toggleTodo={props.toggleTodo}
          clearCompleted={props.clearCompleted}
        />
      )
    })
  );
}  

export default TodoList;