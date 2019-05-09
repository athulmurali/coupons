import React from "react";
import "./DialPad.css";
import Proptypes from "prop-types";

const EnterMessage = (props) => {
	return <div className="status-block">
		<h3 className="statusMessage"> Enter the {props.loginType} number</h3>
		<h3 className="statusMessage">associated with your account</h3>
	</div>;
};

const ErrorMessage = (props) => {
	return <div className="status-block">
		<h3 className="statusMessage"> {props.errorMessage}</h3>
	</div>;
};


export const KeyBoard = (props) => {
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
				<li className="letter clearl"/>
				<li className="letter" onClick={ props.handleTheKeyClicks}>0</li>
				<li className="letter" onClick={ props.deleteTheLastDigit}>&lt;</li>
				<li className="switch" onClick={ props.checkPhoneNumber}>Sign in</li>
			</ul>
		</div>
	);
};


export const InputText = (props)  => {
	console.log(props);
	return(
		<div style={props.containerStyle}>
			<div>
				<input className="inputText" id="test-input" maxLength={12} defaultValue={props.phoneNumber}/>
			</div>

			{!props.error ? <EnterMessage loginType={props.loginType}/> :
				<ErrorMessage errorMessage={"Invalid Barcode Scan!"}/>}

		</div>
	);
};
InputText.propTypes = {
	containerStyle: Proptypes.object,
	loginType: Proptypes.string,
	error: Proptypes.bool
};


