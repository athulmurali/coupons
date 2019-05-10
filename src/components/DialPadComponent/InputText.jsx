import React from "react";

const EnterMessage = (props) => {
	return <div className="status-block">
		<h3 className="statusMessage"> Enter the {props.inputType} number</h3>
		<h3 className="statusMessage">associated with your account</h3>
	</div>;
};


export const InputText = (props) => {
	return (
		<div style={props.containerStyle}>
			<input className="inputText" id="test-input" maxLength={12} defaultValue={props.phoneNumber}/>
			<EnterMessage inputType={props.loginType}/>
		</div>
	);
};
InputText.propTypes = {
	containerStyle: Object,
	inputType: String
};
