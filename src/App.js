import React, { Component } from 'react';
import './App.css';
import Leapyear from './Components/leapYear';
class App extends Component {
  render() {
    return (                                           
      <div className="App">
        <h1>Check for Leap Year </h1>
        <Leapyear/>
        
      </div>
    );
  }
}

export default App;
