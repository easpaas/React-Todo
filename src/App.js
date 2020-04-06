import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const todos = [
  {
    task: 'todo task', 
    id: Date.now(), 
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  };

  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = (e, todo) => {
      e.preventDefault();
      const newTodo = {
        task: todo,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todoList={this.state.todos} />
      </div>
    );
  }
}

export default App;
