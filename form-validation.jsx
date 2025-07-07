import React, { Component } from "react";

class TodoClass extends Component {
  state = {
    todos: [],
    input: ""
  };

  // Use class property to autobind
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  addTodo = () => {
    const input = this.state.input.trim();
    if (!input) return;

    this.setState((prevState) => ({
      todos: [...prevState.todos, input],
      input: "" // Clear input after adding
    }));
  };

  render() {
    const { input, todos } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          onChange={this.handleInputChange}
        />
        <button onClick={this.addTodo} disabled={!input.trim()}>
          Add
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoClass;
