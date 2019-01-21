import React, { Component } from 'react';
import Config from '../config/config';

class UserIdentification extends Component {

  handleScreenTap = () => {
    this.props.history.push(`/displayCoupons`);
  };

  render() {
    Config.loggedIn = false;
    console.log("From User Identification: "+Config.loggedIn);
    return <div onClick={this.handleScreenTap}>User Identification</div>;
  }
}

export default UserIdentification;