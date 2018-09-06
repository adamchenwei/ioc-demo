import React, { Component } from 'react';
import myPocket from '../service/myPocket';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      pocket: [],
    }
    this.addItem = this.addItem.bind(this);
  }
  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      pocket: myPocket.get(),
    }))
  }

  addItem(isRemove = false) {


    if (isRemove) {
      myPocket.remove();
    } else {
      myPocket.add(Date.now());
    }
    this.setState(prevState => ({
      ...prevState,
      pocket: myPocket.get(),
    }));
    console.log(this.state.pocket)
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <button onClick={() => {this.addItem(false)}}> Add </button> <br></br>
        <button onClick={() => {this.addItem(true)}}> Remove </button> <br></br>
        {JSON.stringify(this.state.pocket)}
      </div>
    )
  }

}