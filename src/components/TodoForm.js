import React from 'react';


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: ''
    }
  };

  handleChanges = e => {
    this.setState({ formData: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({formData: ''});
    this.props.addTodo(e, this.state.formData);
  }

  // clearCompleted = e => {

  // }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="item"
          placeholder="add todo here..." 
          value={this.state.formData} 
          onChange={this.handleChanges}
        />
        <button>Add todo</button>
        <button>Clear completed</button>
      </form>
    );
  }
}

export default TodoForm;