
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
  state = {
    timestamp: '',
    location: '',
  };

  render() {
    return (
      <div>
          <HashRouter>
            <div>
              <p>App JS Page</p>
              <Route path="/test" component={TestComponent} />
            </div>
          </HashRouter>
      </div>
    );
  }
}

export default App;
