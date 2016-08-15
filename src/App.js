import React, { Component } from 'react';
import './App.css';
import Zip from './zip'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Zip onValue={(value) => console.log(`such value ${value}`)}/>
      </div>
    )
  }
}

export default App;
