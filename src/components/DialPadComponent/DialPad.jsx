import React, {Component} from "react";
import {connect} from "react-redux";
import "./DialPad.css";
import Config, {
	ERROR_MSG_BARCODE_INVALID,
	ERROR_MSG_INVALID_INPUT,
	ERROR_MSG_VALIDATION,
	RESTART_TIMER_EVENTS
} from "../../config/config";
import AssistancePopUpComponent from "../AssitancePopUpComponent/AssistancePopUpComponent";
import {ROUTE_DISPLAY_COUPONS, ROUTE_HOME_PAGE} from "../../utils/RouteConstants";
import {MessageDisplay} from "../../utils/App";
import {clearLoginError, loginByBarcode} from "../../redux/actions/Login";
import LoaderComponent from "../LoaderComponent";
import LoginTypeSelector from "../LoginTypeSelector";
import InputText from "./InputText";
import KeyBoard from "./KeyBoard";

const styles = {
	inputTextContainer: {display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"},
	loginTypeContainer: {display: "flex", justifyContent: "center", maxHeight: "80px"}
};


// Quick info
// ''  == false == null =>true
// false == null => true
// Since the propType is string and marked as required, use ''

const initialState = {
	phoneNumber: "",
	disableTextArea: false,
	loginType: "Phone",
	count: 0,
	cardNumber: false,
	mouseHover: false,
	error: ""
};

class DialPad extends Component {
	constructor(props) {
		super(props);
		this.state = {...initialState};
		window.addEventListener("orientationchange", this.orientationChange);
	}

	setErrorMessage = () => this.setState({phoneNumber: "", error: ERROR_MSG_VALIDATION});

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
			this.props.loginByBarcode(this.extractNumberFromFormat);

		} catch (error) {
			this.setErrorMessage();
		}


	};

	startTimer = () => {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => this.props.history.push(ROUTE_HOME_PAGE), Config.INACTIVE_USER_IDENTIFICATION);
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
		!!this.props.error && this.props.clearLoginError();

		this.setState({
			cardNumber: false,
			loginType: "Phone",
			phoneNumber: "",
			error: ""
		});
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

					!!this.props.error && this.props.clearLoginError();
					this.setState({
						phoneNumber: prev + clickedValue,
						disableTextArea: disableInputArea,
						error: ""
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
					!!this.props.error && this.props.clearLoginError();
					this.setState({
						phoneNumber: prev + clickedValue,
						disableTextArea: disableInputArea,
						error: ""
					});
				}
			}
		}
	};

	handleCardClick = () => {
		!!this.props.error && this.props.clearLoginError();
		this.setState({cardNumber: true, phoneNumber: "", loginType: "Card", error: ""});

	};

	componentWillUnmount() {
		clearInterval(this.timer);
		RESTART_TIMER_EVENTS.map(event => window.removeEventListener(event, this.startTimer));

	}


	componentDidMount() {
		RESTART_TIMER_EVENTS.map(event => window.addEventListener(event, this.startTimer));
		this.startTimer();
		//When scan barcode scan fails the following will be executed
		if (!!this.props.error)
			this.setState({error: ERROR_MSG_BARCODE_INVALID});
	}

	componentWillReceiveProps(nextProps) {
		if (!!nextProps.userInfo)
			this.props.history.push(ROUTE_DISPLAY_COUPONS);
		if (!!nextProps.error)
			this.setState({error: ERROR_MSG_INVALID_INPUT});
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
				<InputText phoneNumber={this.state.phoneNumber}
						   loginType={this.state.loginType}
						   error={this.state.error}
						   containerStyle={styles.inputTextContainer}/>
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
