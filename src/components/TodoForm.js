import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: ''
    }
  };

  handleChanges = e => {
    this.setState({formData: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({formData: ''});
    this.props.addTodo(e, this.state.formData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text" 
          name="item"
          placeholder="add todo here..." 
          value={this.state.formData} 
          onChange={this.handleChanges}
        />
        <button className="btn one">Add todo</button>
        <button className="btn two"onClick={(e) => {this.props.clearCompleted(e)}}>Clear completed</button>
      </form>
    );
  }
}

export default TodoForm;