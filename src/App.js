import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// Intialize empty array of todos
const todos = [];


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

  toggleTodo = todoId => {
    // map over array
    // when we find the item we clicked, toggle the completed field
    // otherwise return the item untouched
    this.setState({
      todos: this.state.todos.map(item => {
        if (todoId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    // any todo object that has a completed value of true will be filtered into setState
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  }

  render() {
    return (
      <div 
        style={{border:'4px solid purple', width: '30%', margin: '0 auto', padding: '5%', backgroundColor: 'black', color: 'mediumpurple'}}
      >
        <h2 style={{textAlign: 'center', fontWeight: '300', fontVariant: 'small-caps', fontFamily: 'san-serif', marginBottom: '20%'}}>Welcome to your Todo App!</h2>
        <TodoForm 
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted} 
        />
        <TodoList 
          todoList={this.state.todos}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
