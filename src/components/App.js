import React, { Component } from 'react';
import '../scss/main.css';
import Header from './Header.js';
import Description from './Description.js';
import Characters from './Characters.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Characters />
        <Description />
      </div>
    );
  }
}

export default App;
