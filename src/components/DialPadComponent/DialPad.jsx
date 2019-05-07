import React, {Component} from "react";
import "./DialPad.css";
import Config from "../../config/config";
import AssistancePopUpComponent from "../AssitancePopUpComponent/AssistancePopUpComponent";
import {connect} from "react-redux";
import {ROUTE_DISPLAY_COUPONS, ROUTE_HOME_PAGE} from "../../utils/RouteConstants";
import {CardNuumberComponent, InputText, KeyBoard, PhoneNumberImage} from "./KeyBoard";
import {MessageDisplay} from "../../utils/App";
import {loginByBarcode} from "../../redux/actions/Login";
import {RiseLoader} from "react-spinners";

const Image_card = require("../../assets/icon-card-gray.svg");
const Image_phone = require("../../assets/icon-phone-white.svg");

const IMG = {

	PHONE : {
		ACTIVE : require("../../assets/icon-phone-white.svg"),
		INACTIVE :require("../../assets/icon-phone-gray.svg")
	},
	CARD : {
		ACTIVE :require("../../assets/icon-card-white"),
		INACTIVE :require("../../assets/icon-card-gray.svg"),

	}
}


class DialPad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneNumber: "",
			disableTextArea: false,
			defaultMessage: "Enter the Phone number",
			count: 0,
			cardNumber: false,
			mouseHover: false,
			phoneButton: "act",
			cardButton: "inact",
		};
		window.addEventListener("orientationchange", this.orientationChange);
		this.couponsDetails = [];
	}


	deleteTheLastDigit = () => {
		let prev = this.state.phoneNumber.slice(0, -1);
		if (prev.length === 6) {
			prev = this.state.phoneNumber.slice(0, -1);
		} else if (prev.length === 9) {
			prev = this.state.phoneNumber.slice(0, -1);
		}
		this.setState({phoneNumber: prev});
	};

	searchForThePhoneNumberInDatabase = async () => {
		
		try {
			if (this.state.cardNumber === false) {
				this.extractNumberFromFormat = (this.state.phoneNumber.substring(1, 4) + this.state.phoneNumber.substring(6, 9) + this.state.phoneNumber.substring(10));
			} else {

				this.extractNumberFromFormat = this.state.phoneNumber.slice(0, -1);
			}
			console.log(this.extractNumberFromFormat);
			this.props.loginByBarcode(this.extractNumberFromFormat);

		} catch (error) {
			console.log(error);
			this.setErrorMessage();
		}


	};

	setErrorMessage = () => {
		this.setState({phoneNumber: "", defaultMessage: "Not a valid number Please re enter"});

	};

	checkPhoneNumber = () => {

		if (this.state.cardNumber === false) {
			this.extractNumberFromFormat = (this.state.phoneNumber.substring(1, 4) + this.state.phoneNumber.substring(6, 9) + this.state.phoneNumber.substring(10));
			console.log(this.extractNumberFromFormat);
		}
		else {
			this.extractNumberFromFormat = this.state.phoneNumber.slice(0, -1);
		}
		//	this.searchForThePhoneNumberInDatabase(this.extractNumberFromFormat);

		(this.extractNumberFromFormat.length === 10 || this.extractNumberFromFormat.length === 12) && this.state.phoneNumber ? this.searchForThePhoneNumberInDatabase() : this.setErrorMessage();

	};

	handleTheKeyClicks = e => {
		this.setState({count: 0});
		if (this.state.cardNumber === false) {
			if (this.state.phoneNumber.length < 14) {

				const clickedValue = e.target.innerText.trim();
				let disableInputArea = false;
				if (!clickedValue) {
					// alert("Passed nothing");
				} else {
					let prev = this.state.phoneNumber;
					if (prev.length === 0) {
						prev += "(";
					} else if (prev.length === 4) {
						prev += ") ";
					} else if (prev.length === 9) {
						prev += " ";
					}


					this.setState({
						phoneNumber: prev + clickedValue,
						disableTextArea: disableInputArea
					});
				}
			}
		} else {
			if (this.state.phoneNumber.length < 13) {

				const clickedValue = e.target.innerText.trim();
				let prev = this.state.phoneNumber;
				let disableInputArea = false;
				if (!clickedValue) {
					// alert("Passed nothing");
				} else {
					this.setState({
						phoneNumber: prev + clickedValue,
						disableTextArea: disableInputArea
					});
				}
			}
		}
	};

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if(!!nextProps.userInfo ){
			this.props.history.push(ROUTE_DISPLAY_COUPONS);
		}

	}

	tick() {
		this.setState({count: (this.state.count + 1)});
	}

	startTimer() {
		clearInterval(this.timer);
		this.timer = setInterval(this.tick.bind(this), 1000);
	}

	handleScreenTap = () => {
		this.props.history.push(ROUTE_HOME_PAGE);
	};
	handlePhoneClick = () => {
		this.setState({
			count: 0,
			cardNumber: false,
			defaultMessage: "Enter the Phone number",
			phoneNumber: "",
		});

	};
	handleCardClick = () => {
		this.setState({
			count: 0,
			cardNumber: true,
			cardButton: "act",
			phoneButton: "inact",
			defaultMessage: "Enter the Card number",
			phoneNumber: "",
		});
		console.log(this.state.cardNumber);
	};

	render() {



		const slideImages = [
			Image_card,
			Image_phone
		];

		this.startTimer();
		if (this.state.count > Config.INACTIVE_USER_IDENTIFICATION) {
			this.setState({count: 0});
			this.handleScreenTap();
		}


		if(this.props.isLoginLoading) {
			return <div style={{justifyContent:"center", alignItems:"center", display:"flex", height: "670px", fontSize:"21px"}}><RiseLoader size={20} color="#E0004D" /> </div>
		}

		return (

			<MessageDisplay >
				{!!this.props.error && <div> Scan error </div>}
				<div style={{display: "flex",
					justifyContent: "center", maxHeight: "80px"}}>
					<PhoneNumberImage  phoneButton = {this.state.phoneButton} handlePhoneClick = {this.handlePhoneClick} slideImages = {slideImages} >
						
						<CardNuumberComponent  isActive={this.state.     } cardButton = {this.state.cardButton} handleCardClick = {this.handleCardClick} slideImages={slideImages} />
					</PhoneNumberImage>
				</div>
				<div style={{display: "flex",
					justifyContent: "center"}}>

					<InputText phoneNumber = {this.state.phoneNumber} defaultMessage = {this.state.defaultMessage} />
				</div>
				<KeyBoard handleTheKeyClicks = {this.handleTheKeyClicks}
						  deleteTheLastDigit = {this.deleteTheLastDigit}
						  checkPhoneNumber = {this.checkPhoneNumber}/>
				<AssistancePopUpComponent/>

			</MessageDisplay>

		);
	};
}


const mapStateToProps = (state) => {
	return {
		userInfo: state.DisplayCouponsReducer.userInfo,
		allCoupons: state.SearchSortFilterReducer.arr,
		isLoginLoading : state.LoginReducer.isLoading,
		loginResult : state.LoginReducer.loginResult,
		error :state.LoginReducer.error

	};
};


const mapDispatchToProps = (dispatch) => (
	{
		loginByBarcode : (barcode) => loginByBarcode(dispatch, barcode),

	}
);

export default connect(mapStateToProps, mapDispatchToProps)(DialPad);
