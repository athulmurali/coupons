import React from "react";
import Header from "../HeaderComponent/Header";
import "./DisplayCoupons.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Popup from "reactjs-popup";
import ReactToPrint from "react-to-print";
import Config from "../../config/config";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

 class Coupons extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			couponDetails : [],
			count: 0,
			hideLoadedCoupons: true,
			hideNewCoupons: false,
			activeNewCoupons: "active",
			activeLoadedCoupons: "inactive",
			logOutTrigger: false,
			logOutReload: false,
			filter_arrow: false
		};	
		this.Image_up = require('../../assets/arrow-down-sign-to-navigate.svg');	
	}
	
	buttonClick = (el) => {
		if(el) {
		el.click();
		};
	}
	
	componentWillUnmount () {
		alert(this.props.data);
		clearInterval(this.timer);
	}

	componentDidMount () {
		this.startTimer();
	}
	tick () {
		this.setState({count: (this.state.count + 1)});
	}
	startTimer () {
		clearInterval(this.timer);
		this.timer = setInterval(this.tick.bind(this), 1000);
	}
	timerReset () {
		this.setState({count: 0});
	}

	newXyz = ()  => {
		this.setState({count: 0});
	}

	handleScreenTap = () => {
			this.props.history.push(`/`);
	}


	NewCoupons = () => {
		this.setState({count: 0});
		this.state.hideNewCoupons = false;
		this.state.hideLoadedCoupons = true;
		this.state.activeNewCoupons = "active";
		this.state.activeLoadedCoupons = "inactive";
	}

	LoadedCoupons = () => {
		this.setState({count: 0});
		this.state.hideNewCoupons = true;
		this.state.hideLoadedCoupons = false;
		this.state.activeNewCoupons = "inactive";
		this.state.activeLoadedCoupons = "active";
	}

	Filter = () => {
		if(this.state.filter_arrow === false){
		this.setState({filter_arrow : true});
		this.Image_up = require('../../assets/up-arrow.svg');
		}
		else{
			this.setState({filter_arrow : false});
		this.Image_up = require('../../assets/arrow-down-sign-to-navigate.svg');
		}
		
		console.log(this.state.filter_arrow);
	}

	render() {
		let couponData = this.props.data;
		let buttonTrigger = "";
		let logOutPopUpTrigger = "";
		let userCoupons = [];
		let userCouponData = "";
		let couponsLength = "";
		let userName = "";
		if(this.state.count > Config.POPUPTIMER){
				buttonTrigger = this.buttonClick;
				if(this.state.count > Config.LOGOUTTIMER) {
					this.handleScreenTap();
				}
		}

		if(this.state.logOutTrigger) {
			logOutPopUpTrigger = this.buttonClick;
			this.setState({logOutTrigger: false});
			this.setState({count:0});
			this.setState({logOutReload: true});
			
		}

		if(this.state.logOutReload) {
			if (this.state.count > 3) {
				this.handleScreenTap()
			}
		}

		if (couponData.length != 0 && couponData[0]) {
			userCouponData = couponData[0];
			couponsLength = userCouponData.length;
			userName = userCouponData[0].userName;
			userName.toString();
		}
		const Image_coupon = require("../../assets/stopandshop.png");
		const LogOut_Success = require("../../assets/success.svg");

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
            {/* Category {i} <br /> Aisle {i} */}
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
	// const options = [
	// 	{ value: 'one', label: 'One' },
	// 	{ value: 'two', label: 'Two', arrowClassName:'myArrowClassName'}];	
	// 	const defaultOption = options[0]

	const slideArrow = [
		this.Image_up
	];
		return (
			<div>
				<div className="WelcomeUser_Logout" >
					<h2 className="userName"> Welcome {userName}! </h2>
					<button className="logoutButton" ref = {logOutPopUpTrigger} onClick={() => this.setState({logOutTrigger: true})} > Log Out </button>
				</div>
				<Header/>
				<div className="printDiv">
					<ReactToPrint
          trigger={() => <button 	className="printButton" hidden={this.state.hideLoadedCoupons}>PRINT</button>}
          content={() => this.componentRef}
        />
				</div>

				<Popup trigger={<button ref = {logOutPopUpTrigger}  className="button" ></button>} true modal>
							{close => (
								<div className="modal">
									<img className="logOutImage" src={LogOut_Success}></img>
									<h1 className="logOutMessage1"> Enjoy your savings!</h1>
									<h4 className="logOutMessage2">You have been successfully logged out. <br/> See you soon!</h4>
								</div>
							)}
						</Popup> 		

				<Popup trigger={<button ref = {buttonTrigger}  className="button" ></button>} true modal>
							{close => (
								<div className="modal">
									<h1 className="popupHeader"> Are you still there? </h1>
									<h4 className="popupMessage">Your session is about to expire</h4>
									<div className="bar">
										<div className="in"></div>
									</div> 
									<div className="actions">
										<button
											className="buttons"
											onClick={() => {close(); this.setState({logOutTrigger: true})}} > 
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
				<div className="AllCoupons">
					<ul>
						<li> <a  className={this.state.activeNewCoupons} onClick={this.NewCoupons} > New Coupons </a></li>
						<li> <a  className={this.state.activeLoadedCoupons} onClick={this.LoadedCoupons}> Loaded Coupons </a></li>
						{/* <div>
						<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
						</div> */}
						<div className="filter_sort">
							<span >Sort</span>
							<img className="image_arrow" src={slideArrow[0]}  onClick={this.Filter}/>
						</div>
						<div className="filter_sort" hidden= {!this.state.filter_arrow}>
							Jay
						</div>
						<div className="filter_sort" hidden= {!this.state.filter_arrow}>
							Feroz
						</div>
						<div className="filter_sort">
							Filter
						</div>
					</ul>
					<div className="LoadedCoupons"  hidden={this.state.hideNewCoupons}   >
						<h4 className="LoadedCouponCount"> New Coupons ({couponsLength})  {this.state.count}</h4>
						{userCoupons}        
					</div>
					<div className="LoadedCoupons"  hidden={this.state.hideLoadedCoupons} ref= {el => (this.componentRef = el)} >
						<h4 className="LoadedCouponCount"> Loaded Coupons ({couponsLength})  {this.state.count}</h4>
						{userCoupons}        
					</div>
				</div> 
			</div>
		);
	}
}
  
export default Coupons;
