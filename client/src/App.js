import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ItemSubmit from './ItemSubmit';
import ItemList from './ItemList';

class App extends Component {
  constructor(props) {
    console.log("in App c'tor");
    super(props);
    this.state = {
      items: [],
      default: [{
        name: "Nothing to do!"
      }]
    };
    // Use this line to bind 'this' for class functions
    this.getListItems = this.getListItems.bind(this);
    this.getListItems();
  }

  getListItems() {
    fetch('/listitems')
      .then(items => items.json())
      .then(items => {
        this.setState({items: items}, function() {
          console.log("Fetched listitems from back");
          console.log(this.state.items);
        });
      });
  }

  renderList() {
    if (this.state.items.length > 0) {
      return (<ItemList items={this.state.items} />);
    } else {
      return (<ItemList items={this.state.default} />);
    }
  }

  render() {
    return (
      <div className="App">
        <ItemSubmit />
        {this.renderList()}
      </div>
    );
  }
}

export default App;
