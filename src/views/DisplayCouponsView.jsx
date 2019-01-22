import React, { Component } from 'react';
import Coupons from "../components/DisplayCouponComponent/DisplayCoupons";
import Config from "../config/config";

class DisplayCouponsView extends Component{
	render(){
		Config.loggedIn = true;
		return (<Coupons history={this.props.history}></Coupons>);
	};

}
export default DisplayCouponsView;