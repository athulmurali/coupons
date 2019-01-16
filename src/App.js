<<<<<<< HEAD
=======
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
    location: ''

  }

  render() {
    return (
      <div>
        
          <HashRouter>
            <div>
              <p>App JS Page</p>
              <Route path="/test" component={TestComponent} />
            </div>
          </HashRouter>
          {/* {alert("sadfgh")} */}
      </div>
    );
  }
}

export default App;
>>>>>>> 47506d0e8b4c93ef5fed37c3c9c7c35475d385c0
