import React, { Component } from 'react';
import logo from './logo.svg';
import CentredInput from './CentredInput.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-bar">
          <CentredInput className="App-search" placeholder="Search the site..." />
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-section">
          <p>This is a more narrow section.</p>
          <CentredInput
            className="App-section-search"
            placeholder="And the input is still centred!" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
