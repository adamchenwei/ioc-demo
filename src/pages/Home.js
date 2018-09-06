import React, { Component } from 'react';
import myPocket from '../service/myPocket';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      pocket: [],
    }
  }
  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      pocket: myPocket.get(),
    }))
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        {JSON.stringify(this.state.pocket)}
      </div>
    )
  }

}