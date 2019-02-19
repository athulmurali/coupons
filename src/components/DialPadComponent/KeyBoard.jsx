import React, {Component} from "react";
import "./DialPad.css";

export const KeyBoard = (props ) => {
	return(
		<div id="container">
			<ul id="keyboard">
				<li className="letter" onClick={props.handleTheKeyClicks}>1</li>
				<li className="letter" onClick={props.handleTheKeyClicks}>2</li>
				<li className="letter" onClick={ props.handleTheKeyClicks}>3</li>
				<li className="letter clearl" onClick={ props.handleTheKeyClicks}>4</li>
				<li className="letter" onClick={ props.handleTheKeyClicks}>5</li>
				<li className="letter" onClick={ props.handleTheKeyClicks}>6</li>
				<li className="letter clearl" onClick={ props.handleTheKeyClicks}>7</li>
				<li className="letter " onClick={ props.handleTheKeyClicks}>8</li>
				<li className="letter" onClick={ props.handleTheKeyClicks}>9</li>
				<li className="letter clearl"></li>
				<li className="letter" onClick={ props.handleTheKeyClicks}>0</li>
				<li className="letter" onClick={ props.deleteTheLastDigit}>&lt;</li>
				<li className="switch" onClick={ props.checkPhoneNumber}>Sign in</li>
			</ul>
		</div>
	);
};

export const CardNuumberComponent = (props) => {
	return(
		<button className={props.cardButton} onClick={props.handleCardClick}>
			<img className="image-width" alt ="card number" src={props.slideImages[0]}/>
                        Card Number
		</button>
	);
};

export const phoneNumberComponent = (props) => {
	return(
		
		<button className={props.cardButton} onClick={props.handleCardClick}>
			<img className="image-width" alt ="card number" src={props.slideImages[0]}/>
                        Card Number
		</button>
	);
};

export const InputText = (props)  => {
	return(
		<div>
			<input className="inputText" id="test-input" maxLength={12} defaultValue={props.phoneNumber} placeholder="(---) --- ----"/>
			<div className="status-block">
				<h3 className="statusMessage"> {props.defaultMessage} </h3>
				<h3 className="statusMessage">associated with your account</h3>
			</div>
		</div>						
	);
};

export const PhoneNumberImage = (props) => {
	return(
		<div >
			<button className={props.phoneButton} onClick={props.handlePhoneClick}>
				<img className="image-width" alt="phone number" src={props.slideImages[1]}/>
                        Phone Number
			</button>
			{props.children}
                    
		</div>
	);
};