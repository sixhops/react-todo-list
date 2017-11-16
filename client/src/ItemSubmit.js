import React, { Component } from 'react';

class ItemSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
    fetch('/listitems', {
      method: 'post',
      body: {
        name: this.state.value
      }
    }).then(function(response) {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <form action="http://localhost:3001/listitems" method="POST" onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.value} placeholder="Enter a new task..." />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default ItemSubmit;
