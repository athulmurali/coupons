import React, { Component } from 'react';
import API from '../../utils/API';
import './DialPad.css';
import Config from '../../config/config';

import {
	MesssgeDisplay,
	StatusMessage,
	InputText,
} from './styled';
import DialPadButtons from '../../views/DialPadButtons';
class DialPad extends Component {
	constructor(props){
		super(props);
		const isPortrait = window.matchMedia('(orientation: portrait)').matches;
		this.state = {
			phoneNumber: '',
			disableTextArea: false,
			defaultMessage: 'Enter the Phone number associated with the account',
			count: 0,
			isPortrait,
		};
		window.addEventListener('orientationchange', this.orientationChange);
		this.couponsDetails = [];
		this. inputForDialPad = React.createRef();
	}
	orientationChange = () =>{
		this.setState({
      isPortrait: !window.matchMedia('(orientation: portrait)').matches,
    });
	}
	deleteTheLastDigit = () => {
		let prev = this.state.phoneNumber.slice(0,-1)
		console.log(prev);
		if(prev.length === 6){
				prev = this.state.phoneNumber.slice(0,-1)
		}
		else if(prev.length === 10){
				prev = this.state.phoneNumber.slice(0,-1)
		}
		this.setState({ phoneNumber: prev })
};

	searchForThePhoneNumberInDatabase = async () => {
		try{	
			const extractNumberFromFormat = ( this.state.phoneNumber.substring(1,4) + this.state.phoneNumber.substring(6,9) + this.state.phoneNumber.substring(10) );
			const response = await API.getUserMobileNumber(extractNumberFromFormat);
			alert(response);
			this.couponsDetails = response.data.response;
			alert(this.couponsDetails);
			this.props.identificationfromDiaPad(true,this.state.phoneNumber,this.couponsDetails);
			
		} catch (error){
			this.setErrorMessage();
		}
		

	};
	
	setErrorMessage = () => {
		this.setState({phoneNumber: '',defaultMessage: "Not a valid mobile number Please re enter"});
		
	};

	checkPhoneNumber = () => {
		const extractNumberFromFormat = ( this.state.phoneNumber.substring(1,4) + this.state.phoneNumber.substring(6,9) + this.state.phoneNumber.substring(10) );
		this.searchForThePhoneNumberInDatabase(extractNumberFromFormat);
		alert(extractNumberFromFormat)
		extractNumberFromFormat.length === 10 && this.state.phoneNumber ? this.searchForThePhoneNumberInDatabase() : this.setErrorMessage();
		
	};

	handleTheKeyClicks = e => {
		this.setState({count: 0})
		console.log(this.state.phoneNumber.length);
		if(this.state.phoneNumber.length < 14){
		const clickedValue = e.target.innerText.trim() ;
		let disableInputArea = false;
		if( !clickedValue ){
			alert("Passed nothing");
		}
		
		else {
			let prev = this.state.phoneNumber;
			if( prev.length === 0 ){
				prev += '(' ;
			}
			else if( prev.length === 4 ){
				prev += ') ';
			}
			else if( prev.length === 9 ){
				prev += ' ' ;
			}

			
			this.setState({
				phoneNumber: prev+clickedValue,
				disableTextArea: disableInputArea
			});				
		}
	}
	
};

	componentWillUnmount () {
		clearInterval(this.timer)
	}
	tick () {
		this.setState({count: (this.state.count + 1)})
	}
	startTimer () {
		clearInterval(this.timer)
		this.timer = setInterval(this.tick.bind(this), 1000)
	}

	handleScreenTap = () => {
		this.props.history.push(`/`);
	};


	render(){
		this.startTimer();
		if(this.state.count > Config.INACTIVE_USER_IDENTIFICATION){
			this.state.count = 0;
			this.handleScreenTap();
		}
		
		return(
			<MesssgeDisplay>
					<StatusMessage> {this.state.defaultMessage} </StatusMessage>
					<InputText maxLength={Config.maxLenghtOfTextBoxInUserIdentification} defaultValue={this.state.phoneNumber} ref={this.inputForDialPad}></InputText>
					<DialPadButtons handleTheKeyClicks={this.handleTheKeyClicks} deleteTheLastDigit={this.deleteTheLastDigit} checkPhoneNumber={this.checkPhoneNumber}></DialPadButtons>
					<div className="switchNoCard">No card, no problem</div>
				</MesssgeDisplay>
		);
	};
}

export default DialPad;
