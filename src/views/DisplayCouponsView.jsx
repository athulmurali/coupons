import React, { Component } from 'react';
import Coupons from "../components/DisplayCouponComponent/DisplayCoupons";
import Config from "../config/config";

class DisplayCouponsView extends Component{
	constructor(props){
		super(props);
		this.state = {
			couponsDetails: [],
		};
		
	}
	componentDidMount(){
		console.log(this.props.location.state);
		this.setState({
			couponsDetails:this.props.location.state
		});
		
		
	}
	render(){
		Config.loggedIn = true;
		return (<Coupons history={this.props.history} data = {this.state.couponsDetails}></Coupons>);
	}
}
export default DisplayCouponsView;