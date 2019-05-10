// toDo :  Move all native css styling  to a new css class in DialPad.css
// toDo :  Move all react styling to  something like this -
// const styles = {containerStyle:{fontSize :"12"},buttonStyle :{color:"red"}    }

// toDo :  USE this constant IMG inside the components.
// toDo :  Remove array based state manipulation and replace it with conditional rendering based on isActive flags to switch between phone number and card number component
// toDo  : Remove event listeners on unmount
// toDo : replace slideImages with conditional rendering.
//  Avoid doing any state manipulation or storage inside rendering
// TODO : test1


import React, {Component} from "react";
import "./DialPad.css";
import Config, {RESTART_TIMER_EVENTS} from "../../config/config";
import AssistancePopUpComponent from "../AssitancePopUpComponent/AssistancePopUpComponent";
import {connect} from "react-redux";
import {ROUTE_DISPLAY_COUPONS, ROUTE_HOME_PAGE} from "../../utils/RouteConstants";
import {InputText, KeyBoard} from "./KeyBoard";
import {MessageDisplay} from "../../utils/App";
import {clearLoginError, loginByBarcode} from "../../redux/actions/Login";
import LoaderComponent from "../LoaderComponent";
import LoginTypeSelector from "../LoginTypeSelector";

const styles = {
	inputTextContainer: {display: "flex", justifyContent: "center"},
	loginTypeContainer: {display: "flex", justifyContent: "center", maxHeight: "80px"}
};



class DialPad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneNumber: "",
			disableTextArea: false,
			loginType: "Phone",
			count: 0,
			cardNumber: false,
			mouseHover: false,
		};
		window.addEventListener("orientationchange", this.orientationChange);
	}

	setErrorMessage = () => this.setState({phoneNumber: "", loginType: "Not a valid number Please re enter"});

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
			this.setErrorMessage();
		}


	};

	startTimer = () => {
		console.log("clearing timer : ", this.timer);
		clearTimeout(this.timer);
		this.timer = setTimeout(() => this.props.history.push(ROUTE_HOME_PAGE), Config.INACTIVE_USER_IDENTIFICATION);
		console.log("Timer started : ", this.timer);
	};

	checkPhoneNumber = () => {

		if (this.state.cardNumber === false) {
			this.extractNumberFromFormat = (this.state.phoneNumber.substring(1, 4) + this.state.phoneNumber.substring(6, 9) + this.state.phoneNumber.substring(10));
			console.log(this.extractNumberFromFormat);
		} else {
			this.extractNumberFromFormat = this.state.phoneNumber.slice(0, -1);
		}
		//	this.searchForThePhoneNumberInDatabase(this.extractNumberFromFormat);

		(this.extractNumberFromFormat.length === 10 || this.extractNumberFromFormat.length === 12) && this.state.phoneNumber ? this.searchForThePhoneNumberInDatabase() : this.setErrorMessage();

	};

	handlePhoneClick = () => {
		this.setState({
			cardNumber: false,
			loginType: "Phone",
			phoneNumber: "",
		});

		console.log("phone clicked!");
		this.props.clearLoginError();

	};

	handleTheKeyClicks = e => {
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

	handleCardClick = () => {
		this.setState({cardNumber: true, phoneNumber: "", loginType: "Card"});
		this.props.clearLoginError();

	};

	componentWillUnmount() {
		clearInterval(this.timer);
		RESTART_TIMER_EVENTS.map(event => window.removeEventListener(event, this.startTimer));

	}


	componentDidMount() {
		RESTART_TIMER_EVENTS.map(event => window.addEventListener(event, this.startTimer));
		this.startTimer();
		//When scan barcode fails the following will be executed
		if (!!this.props.error)
			this.setState({loginType: "Error! Invalid Barcode Scanned ! "});
	}

	componentWillReceiveProps(nextProps) {
		if (!!nextProps.userInfo)
			this.props.history.push(ROUTE_DISPLAY_COUPONS);
	}

	render() {
		if (this.props.isLoginLoading)
			return <LoaderComponent/>;

		return (
			<MessageDisplay>
				<div style={styles.loginTypeContainer}>
					<LoginTypeSelector
						handleCardClick={this.handleCardClick}
						handlePhoneClick={this.handlePhoneClick}
					/>
				</div>
				<div style={styles.inputTextContainer}>
					<InputText phoneNumber={this.state.phoneNumber}
							   loginType={this.state.loginType}
							   error={this.props.error}/>
				</div>
				<KeyBoard handleTheKeyClicks={this.handleTheKeyClicks}
						  deleteTheLastDigit={this.deleteTheLastDigit}
						  checkPhoneNumber={this.checkPhoneNumber}/>
				<AssistancePopUpComponent/>
			</MessageDisplay>

		);
	};
}


const mapStateToProps = (state) => {
	return {
		userInfo: state.DisplayCouponsReducer.userInfo,
		allCoupons: state.SearchSortFilterReducer.arr,
		isLoginLoading: state.LoginReducer.isLoading,
		loginResult: state.LoginReducer.loginResult,
		error: state.LoginReducer.error

	};
};


const mapDispatchToProps = (dispatch) => (
	{
		loginByBarcode: (barcode) => loginByBarcode(dispatch, barcode),
		clearLoginError: () => clearLoginError(dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(DialPad);
