import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import {TestComponent} from '../components/TestComponent';
import Config from '../config/config';


const RESET_TIME = Config.resetTime * 1000;

class Router extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.reset = true;
    this.state = {
      overtime: false,
    };
  }


  render() {
    return (
      <HashRouter>
        <div
          onClick=''
          onKeyDown=''
          onScroll=''
          role="button"
        >
        "fxghgjhkl;"
          <Switch>
            <Route exact path="/test" render={TestComponent} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Router;
