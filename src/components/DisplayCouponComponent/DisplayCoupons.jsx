import React from "react";
import Header from "../HeaderComponent/Header";
import "./DisplayCoupons.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import TimeoutPopup from "../TimeoutPopupComponent/TimeoutPopup";

 class Coupons extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			couponDetails : [],
		};
	}

	handleScreenTap = () => {
    this.props.history.push(`/`);
	};
	
	buttonClick = (el) => {
		if(el) {
		el.click();
		};
	}

	render() {
		let userCoupons = [];
		let userCouponData = "";
		let couponsLength = "";
		let userName = "";
		let couponData = this.props.data;
		if (couponData.length !== 0) {
			userCouponData = couponData[0].couponDetails;
			couponsLength = userCouponData.length;
			userName = userCouponData[0].userName;
		}
		const Image_coupon = require("../../assets/stopandshop.png");
		for (var i = 0; i < couponsLength; i++) {
			userCoupons.push(
				<div className="Cards" key={i}>
				<Flippy flipOnHover={false} 
					flipOnClick={true} 
					flipDirection="horizontal" 
					ref={(r) => this.flippy = r}
					style={{
						width: "170px",
						height: "150px",
						padding: "0",
					}}>
					<FrontSide style={{
						width: "171px",
						height: "264px"
					}}>
						<img src={Image_coupon} width="103px" height="103px" alt="image_image" /> <br />
						<h5> {userCouponData[i].couponName}</h5>
						<h6> {userCouponData[i].couponDescription}</h6>
						<h6> Exp: {userCouponData[i].expDate.slice(0,10)} </h6>
						{/* <h6 className="viewMore"> Tap to View more </h6> */}
					</FrontSide>
					<BackSide style={{
						backgroundColor: "white",
						color: "black",
						width: "171px",
						height: "264px",
					}} >
            Category {i} <br /> Aisle {i}
					</BackSide>
				</Flippy>
			</div>);
	};	

		return (
			<div>
				<div className="WelcomeUser_Logout">
					<h2 className="userName"> Welcome {userName}! </h2>
					<button className="logoutButton" onClick ={this.handleScreenTap}> Exit </button>
				</div>
				<Header/>
				<div className="printDiv">
					<button className="printButton"> PRINT </button>
				</div>
				<div className="AllCoupons">
					<ul>
						<li> <a href="#news" > New Coupons </a></li>
						<li> <a className="active" href="#displayCoupons" > Loaded Coupons </a></li>
					</ul>
					<div className="LoadedCoupons" >
						<TimeoutPopup history={this.props.history}/>						
						<h4 className="LoadedCouponCount"> Loaded Coupons ({couponsLength}) </h4>
						{userCoupons}    
					</div>
				</div> 
			</div>
		);
	}
}
  
export default Coupons;
