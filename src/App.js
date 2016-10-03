import React, { Component } from 'react';
import CentredInput from './CentredInput.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-bar">
          <CentredInput className="App-search" placeholder="Search the site..." />
        </div>
        <div className="App-section">
          <p>This is a more narrow section.</p>
          <CentredInput
            className="App-section-search"
            placeholder="And the input is still centred!" />
        </div>
      </div>
    );
  }
}

export default App;
