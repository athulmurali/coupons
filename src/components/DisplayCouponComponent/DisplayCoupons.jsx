import React from "react";
import Header from "../HeaderComponent/Header";
import "./DisplayCoupons.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Popup from "reactjs-popup";
import ReactToPrint from "react-to-print";
import Config from '../../config/config';


 class Coupons extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			couponDetails : [],
			count: 0,
		};		
	}
	
	handleScreenTap = () => {
    this.props.history.push(`/`);
	}

	buttonClick = (el) => {
		if(el) {
		el.click();
		};
	}
	
	componentWillUnmount () {
		clearInterval(this.timer);
	}
	tick () {
		this.setState({count: (this.state.count + 1)})
	}
	startTimer () {
		clearInterval(this.timer)
		this.timer = setInterval(this.tick.bind(this), 1000)
	}
	timerReset () {
		this.setState({count: 0});
	}

	newXyz = ()  => {
		this.setState({count: 0});
	}


	render() {
		let couponData = this.props.data;
		let buttonTrigger = "";
		let userCoupons = [];
		let userCouponData = "";
		let couponsLength = "";
		let userName = "";
		this.startTimer();

		if(this.state.count > Config.COUPONS_POPUP_TIMER){
			buttonTrigger = this.buttonClick;
			if(this.state.count > Config.COUPONS_LOGOUT_TIMER) {
			this.handleScreenTap();
			}
		}

		if (couponData.length != 0 && couponData[0]) {
			userCouponData = couponData[0];
			couponsLength = userCouponData.length;
			userName = userCouponData[0].userName;
		}
		const Image_coupon = require("../../assets/stopandshop.png");
		for (var i = 0; i < couponsLength; i++) {
			userCoupons.push(
				<div className="Cards" key={i} onClick={this.newXyz}>
				<Flippy flipOnHover={false} // default false
					flipOnClick={true} // default false
					flipDirection="horizontal" // horizontal or vertical
					ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
					style={{
						width: "170px",
						height: "150px",
						padding: "0",
					}}>
					<BackSide style={{
						backgroundColor: "white",
						color: "black",
						width: "171px",
						height: "264px",
					}} >
            Category {i} <br /> Aisle {i}
					</BackSide>
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

				</Flippy>
			</div>);
	};	

		return (
			<div>
				<div className="WelcomeUser_Logout" >
					<h2 className="userName"> Welcome {userName}! </h2>
					<button className="logoutButton" onClick ={this.handleScreenTap}> Exit </button>
				</div>
				<Header/>
				<div className="printDiv">
					{/* <button className="printButton" onClick={this.print}> PRINT </button> */}
					<ReactToPrint
				
          trigger={() => <button 	className="printButton">PRINT</button>}
          content={() => this.componentRef}
        />
				</div>
				<div className="AllCoupons">
					<ul>
						<li> <a href="#news" > New Coupons </a></li>
						<li> <a className="active" href="#displayCoupons" > Loaded Coupons </a></li>
					</ul>
					<div className="LoadedCoupons" ref= {el => (this.componentRef = el)} >
						<Popup trigger={<button ref={buttonTrigger}  className="button" ></button>} true modal>
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
											onClick={() => {this.timerReset(); close();}}>
                    I'm here
										</button>
									</div>
								</div>
							)}
						</Popup> 
						<h4 className="LoadedCouponCount"> Loaded Coupons ({couponsLength})  {this.state.count}</h4>
						{userCoupons}        
					</div>
				</div> 
			</div>
		);
	}
}
  
export default Coupons;
