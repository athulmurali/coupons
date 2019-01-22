import React from "react";
import Header from "../Header";
import "./DisplayCoupons.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Popup from "reactjs-popup";


 
const Image_coupon = require("../../assets/Attract-loop-image.png");
class Coupons extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			couponDetails : [],
		};
		this.indents = [];
		
	}
	componentDidMount(){
		console.log(this.props.data);
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
		const Image_coupon = require("../../assets/Attract-loop-image.png");
		for (var i = 0; i < couponsLength; i++) {
			userCoupons.push(
				<div className="Cards" >
				<Flippy flipOnHover={false} // default false
					flipOnClick={true} // default false
					flipDirection="horizontal" // horizontal or vertical
					ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
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


		let x = true;
		let xyz = "";

		if(x) {
			xyz = this.buttonClick;
		}

		return (
			<div>
				<div className="WelcomeUser_Logout">
					<h2 className="userName"> Welcome {userName}! </h2>
					<button className="logoutButton" onClick ={this.handleScreenTap}> Exit </button>
				</div>
				<Header />
				<div className="printDiv">
					<button className="printButton"> PRINT </button>
				</div>
				<div className="AllCoupons">
					<ul>
						<li> < a  > New Coupons </a></li >
						<li> < a className="active"  > Loaded Coupons </a></li >
					</ul>
					<div class="LoadedCoupons" >
						<Popup trigger={<button  className="button" ></button>} true modal>
							{close => (
								<div className="modal">
									<h1 className="popupHeader"> Are you still there? </h1>
									<h4 className="popupMessage">Your session is about to expire</h4>
									<div class="bar">
										<div class="in"></div>
									</div> 
									<div className="actions">
										<button
											className="buttons"
											onClick={this.handleScreenTap}>
                    Logout
										</button>
										<button
											className="buttons"
											onClick={() => {close();}}>
                    I'm here
										</button>
									</div>
								</div>
							)}
						</Popup> 
						<h4 className="LoadedCouponCount"> Loaded Coupons ({couponsLength}) </h4>
						{userCoupons}        
					</div>
				</div> 
			</div>
		);
	}
};
  
export default Coupons;
