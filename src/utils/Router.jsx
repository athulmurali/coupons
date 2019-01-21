import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AttractLoop from  '../views/AttractLoop';
import UserIdentification from '../views/UserIdentification';
import DisplayCoupons from '../views/DisplayCoupons';

import Config from '../config/config';
import userSS from '../config/config';

class Router extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.reset = true;
    this.state = {
      overtime: false,
    };
  }

  componentWillMount() {
    sessionStorage.setItem('Phone-Number', '');
  }

  handleUserInteract = () => {
    clearTimeout(this.timer);

    // console.log(Config);
    const attractLoopUrl = "http://"+Config.client.host + ":" + Config.client.port+ "/";
    const userIdentificationUrl = attractLoopUrl + "#/userIdentification";
    const timeout = Config.timeout;
    this.timer = setTimeout(function(){ 
      if (Config.loggedIn === false){
        window.location.href = attractLoopUrl
      }
      else
        window.location.href = userIdentificationUrl
    }, timeout);

  };

  render() {
    console.log(userSS.loggedIn);

    return (
      <HashRouter>
        <div
          onClick={this.handleUserInteract}
          onKeyDown={this.handleUserInteract}
          onScroll={this.handleUserInteract}
          role="button"
        >
          <Switch>
            <Route exact path="/" history={this.props.history} timer={null} component={AttractLoop} />
            <Route exact path="/userIdentification" render={props => <UserIdentification history={this.props.history} overtime={this.state.overtime} {...props} />} />
            <Route exact path="/displayCoupons" render={props => <DisplayCoupons history={this.props.history} overtime={this.state.overtime} {...props} />} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Router;
