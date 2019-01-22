import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AttractLoop from  '../views/AttractLoop';
import Coupons from  '../components/DisplayCouponComponent/DisplayCoupons';
import UserIdentification from '../components/UserIdentificationComponent/UserIdentification';
import API from './API';
import Config from '../config/config';
import UserIdentificationView from '../views/UserIdentificationView';
import DisplayCouponsView from '../views/DisplayCouponsView';
import PropTypes from 'prop-types';

const RESET_TIME = Config.resetTime * 1000;

class Router extends Component {
  constructor(props) {
    super(props);
    this.flag = false;
    this.timer = null;
    this.reset = true;
    this.state = {
      overtime: false,
    };
  }

  componentWillMount() {
    sessionStorage.setItem('Phone-Number', '');
  }

  /**
   * This method runs whenever the screen is tapped (or clicked). It checks to see if this is the
   * first touch since reset. If it is then it stores a date object and sets reset to false. It then
   * starts the timer.
   */
  handleUserInteract = () => {
  };

  /**
   * This method runs when the timeout gets through a complete cycle. We then calculate the amount
   * of time that the user has been browsing minus or timeout time (aka RESET_TIME). It then will
   * make an API post request to the server and then route the user back to the attract loop page.
   * The exception to the last sentence is if the RESET_TIME is equal to 0. This is for development
   * purposes.
   */
  


  render() {
    return (
      <HashRouter >
        <div
          onClick={this.handleUserInteract}
          onKeyDown={this.handleUserInteract}
          onScroll={this.handleUserInteract}
          role="button"
          
        >
        
          <Switch>
            <Route exact path="/" history={this.props.history} component={AttractLoop} />
            <Route exact path="/userIdentification" render={props => <UserIdentificationView history={this.props.history} overtime={this.state.overtime} {...props} />} />
            <Route exact path="/DisplayCoupons" render={props => <DisplayCouponsView history={this.props.history}  overtime={this.state.overtime}  {...props} />} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Router;
Router.propTypes = {
    

  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
