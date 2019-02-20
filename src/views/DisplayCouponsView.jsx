import React from "react";
import Coupons from "../components/DisplayCouponComponent/DisplayCoupons";

class DisplayCouponsView extends React.Component{
	constructor(props){
		super(props);
		this.couponsDetails= [];
	}
	
	componentDidMount(){
		
		// this.couponsDetails.push(this.props.location.state);
		
		
	}
	render(){
		return (<Coupons history={this.props.history}></Coupons>);
	}
}
export default DisplayCouponsView;