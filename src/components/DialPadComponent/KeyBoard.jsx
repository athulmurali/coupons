import React from "react";
import "./DialPad.css";


const KeyBoard = (props) => {
	return (
		<div id="container">
			<ul id="keyboard">
				<li className="letter" onClick={props.handleTheKeyClicks}>1</li>
				<li className="letter" onClick={props.handleTheKeyClicks}>2</li>
				<li className="letter" onClick={props.handleTheKeyClicks}>3</li>
				<li className="letter clearl" onClick={props.handleTheKeyClicks}>4</li>
				<li className="letter" onClick={props.handleTheKeyClicks}>5</li>
				<li className="letter" onClick={props.handleTheKeyClicks}>6</li>
				<li className="letter clearl" onClick={props.handleTheKeyClicks}>7</li>
				<li className="letter " onClick={props.handleTheKeyClicks}>8</li>
				<li className="letter" onClick={props.handleTheKeyClicks}>9</li>
				<li className="letter clearl"/>
				<li className="letter" onClick={props.handleTheKeyClicks}>0</li>
				<li className="letter" onClick={props.deleteTheLastDigit}>&lt;</li>
				<li className="switch" onClick={props.checkPhoneNumber}>Sign in</li>
			</ul>
		</div>
	);
};


export default KeyBoard;
