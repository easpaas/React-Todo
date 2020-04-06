import React, { Component } from 'react';


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: ''
    }
  };

  // TODO handleChange
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  }
  // TODO handleSubmit
  handleSubmit

  render() {
    return (
      <form>
        <input 
          type="text" 
          name="item"
          placeholder="add todo here..." 
          value={this.state.formData} 
          onChange={this.handleChanges}
        />
        <button type="submit">Add todo</button>
        <button type="button">Clear completed</button>
      </form>
    );
  }
}

export default TodoForm;