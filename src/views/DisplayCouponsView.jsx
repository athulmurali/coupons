import React from "react";
import DisplayCoupons from "../components/DisplayCouponComponent/DisplayCoupons";

class DisplayCouponsView extends React.Component{
	render(){
		return (<DisplayCoupons history={this.props.history}></DisplayCoupons>);
	}
}
export default DisplayCouponsView;
