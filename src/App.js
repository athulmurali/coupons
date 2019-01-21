
import React, { Component } from 'react';

import './App.css';
import { TestComponent } from './components/TestComponent';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    timestamp: '',
    location: ''

  }

  render() {
    return (
      <div>

          <HashRouter >
            <div>
              <p>App JS Page</p>
              <Route path="/test" component =  {TestComponent} />
            </div>
          </HashRouter>
          {/* {alert("sadfgh")} */}
      </div>
    );
  }
}

export default App;
