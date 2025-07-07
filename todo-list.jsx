import React, { Component } from 'react';

class TaskManager extends Component {
  state = {
    taskList: [],
    taskInput: ''
  };

  appendTask = () => {
    const { taskInput, taskList } = this.state;
    if (taskInput.trim()) {
      this.setState({ taskList: [...taskList, taskInput], taskInput: '' });
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder="Enter Task"
          value={this.state.taskInput}
          onChange={(e) => this.setState({ taskInput: e.target.value })}
        />
        <button onClick={this.appendTask}>Add Task</button>
        <ul>
          {this.state.taskList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskManager;

