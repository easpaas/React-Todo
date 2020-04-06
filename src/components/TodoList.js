import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList}) => {
  return (
    todoList.map(item => {
      return <Todo key={item.id} todo={item} />
    })
  );
}  

export default TodoList;