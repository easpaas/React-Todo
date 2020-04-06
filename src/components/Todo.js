import React from 'react';

const Todo = ({todo}) => {
  return (
    <div>
      <ul>
        <li>
          {
            todo.task
          }
        </li>
      </ul>
    </div>
  );
}

export default Todo;