import React, { Component } from "react";
class StoreAllCoupons extends Component{
	constructor(props){
		super(props);
		
	}
	_checkTheLocalStorageForPreviousState = () => {
		sessionStorage.getItem('dealsOfTheDay') ? "check for the changes" : "load new coupons"
	} 
}

export default StoreAllCoupons;