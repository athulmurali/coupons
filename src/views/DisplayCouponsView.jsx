import React, { Component } from 'react';
import Coupons from "../components/DisplayCouponComponent/DisplayCoupons";

class DisplayCouponsView extends Component{
	render(){

		return (<Coupons history={this.props.history}></Coupons>);
	};

}
export default DisplayCouponsView;