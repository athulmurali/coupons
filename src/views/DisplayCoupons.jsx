import React, { Component } from 'react';
import Config from "../config/config";

class DisplayCoupons extends Component {

  render() {
    Config.loggedIn = true;
    console.log("From Display Coupons: "+Config.loggedIn);
    
    return <div>Display Coupons</div>;
  }
}

export default DisplayCoupons;
