import React, { Component } from 'react';
import API from '../../utils/API';
import './DialPad.css';

class DialPad extends Component {
	constructor(props){
		super(props);
		this.state = {
			phoneNumber: '',
			disableTextArea: false,
			defaultMessage: 'Enter the Phone number associated with the account',
		};
		this.couponsDetails = [];
		 
	}

	deleteTheLastDigit = () => {
		let prev = this.state.phoneNumber.slice(0,-1)
		if(prev.length === 5){
				prev += ' '
		}
		else if(prev.length === 8){
				prev += ' '
		}
		this.setState({ phoneNumber: prev })
};

	searchForThePhoneNumberInDatabase = async () => {
		try{	
			const extractNumberFromFormat = ( this.state.phoneNumber.substring(1,4) + this.state.phoneNumber.substring(6,9) + this.state.phoneNumber.substring(10) );
			const response = await API.getUserMobileNumber(extractNumberFromFormat);
			
			this.couponsDetails = response.data.response;
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
		extractNumberFromFormat.length === 10 && this.state.phoneNumber ? this.searchForThePhoneNumberInDatabase() : this.setErrorMessage();
		
	};

	handleTheKeyClicks = e => {
		if(this.state.phoneNumber.length < 14){
		const clickedValue = e.target.innerText.trim() ;
		let disableInputArea = false;
		if( !clickedValue ){
			alert("Passed nothing");
		}
		else{
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

	render(){

		return(
			<div className="messsgeDisplay">
					<h3 className="statusMessage"> {this.state.defaultMessage} </h3>
					<input className= "inputText" id="test-input" defaultValue={ this.state.phoneNumber}></input>
					<div id="container">
						<ul id="keyboard"  >   
							<li className="letter" onClick={this.handleTheKeyClicks}>1</li>  
							<li className="letter" onClick={this.handleTheKeyClicks}>2</li>  
							<li className="letter" onClick={this.handleTheKeyClicks}>3</li>  
							<li className="letter clearl" onClick={this.handleTheKeyClicks}>4</li>  
							<li className="letter" onClick={this.handleTheKeyClicks}>5</li>  
							<li className="letter" onClick={this.handleTheKeyClicks}>6</li> 
							<li className="letter clearl" onClick={this.handleTheKeyClicks}>7</li>  
							<li className="letter " onClick={this.handleTheKeyClicks}>8</li>  
							<li className="letter" onClick={this.handleTheKeyClicks}>9</li> 
							<li className="letter clearl"></li>
							<li className="letter" onClick={this.handleTheKeyClicks}>0</li>
							<li className="letter" onClick= {this.deleteTheLastDigit}>&lt;</li>    
							<li className="switch" onClick={this.checkPhoneNumber}>Submit</li> 
						</ul>
					</div>
					<div className="switchNoCard">No card, no problem</div>
			</div>
		);
	};
}

export default DialPad;
