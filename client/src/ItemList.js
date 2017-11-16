import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS........");
    console.log(this.props);

    // console.log(this.state);
  }
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (<li key={index}>{item.name}</li>))}
      </ul>
    );
  }
}

export default ItemList;
