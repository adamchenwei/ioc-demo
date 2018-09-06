import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Pocket from './Pocket';
import myPocket from './service/myPocket';
import About from './pages/About';
import Home from './pages/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pocket: [],
    }
  }

  componentDidMount() {
    myPocket.add('apple');
    
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          {JSON.stringify(this.state.pocket, null, '  ')}
        </div>
      </Router>
    );
  }
}

export default App;
