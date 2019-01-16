import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
      number : 10
    }
  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1> Savings & Coupons</h1>
        </header>
        <div className="couponScreenBackground">  </div>
        <div id="one" class="screen">
            <div class="container">
                <span>Tap anywhere to start</span>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
