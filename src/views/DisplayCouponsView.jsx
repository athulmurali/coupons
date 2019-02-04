import React, { Component } from 'react';
import Coupons from "../components/DisplayCouponComponent/DisplayCoupons";
import Config from "../config/config";

class DisplayCouponsView extends Component{
	constructor(props){
		super(props);
		
		
		this.couponsDetails= [];
		}
	
	componentDidMount(){
		
		this.couponsDetails.push(this.props.location.state);
		
		
	}
	render(){
		Config.loggedIn = true;
		return (<Coupons history={this.props.history} data = {this.couponsDetails}></Coupons>);
	}
}
export default DisplayCouponsView;