import React, { Component } from 'react';
import Coupons from "../components/DisplayCouponComponent/DisplayCoupons";

class DisplayCouponsView extends Component{
	constructor(props){
		super(props);
		this.state = {
			couponsDetails: [],
		};
		
	}
	componentDidMount(){
		
		this.state.couponsDetails.push(this.props.location.state);
		
	}
	render(){

		return (<Coupons history={this.props.history} data = {this.state.couponsDetails}></Coupons>);
	};

}
export default DisplayCouponsView;