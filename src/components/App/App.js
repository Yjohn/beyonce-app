import React, { Component } from 'react';
import './App.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Albums from '../Albums/Albums';
import Home from '../Home/home';
import About from '../About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/albums">Albums </Link></li>
          </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/albums" component={Albums} />
            
        </div>
      </Router>
        );
  }
}

export default App;
