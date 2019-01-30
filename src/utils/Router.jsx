import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AttractLoopView from  '../views/AttractLoopView';
import Config from '../config/config';
import UserIdentificationView from '../views/UserIdentificationView';
import DisplayCouponsView from '../views/DisplayCouponsView';
import PropTypes from 'prop-types';
import CameraScanner from '../components/CameraScannerComponent/CameraScanner';

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
		sessionStorage.setItem('token',false);
  }

  handleUserInteract = () => {

    
	};
	
	LoggedInTimeout = () => {
		
	}

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
            <Route exact path="/" history={this.props.history} component={AttractLoopView} />
            <Route exact path="/userIdentification" render={props => <UserIdentificationView history={this.props.history} overtime={this.state.overtime} {...props} />} />
            <Route exact path="/DisplayCoupons" render={props => <DisplayCouponsView history={this.props.history}  overtime={this.state.overtime}  {...props} />} />
						<Route exact path="/ScanImage" render={props => <CameraScanner history={this.props.history}  overtime={this.state.overtime}  {...props} />} />
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
  }),
};
