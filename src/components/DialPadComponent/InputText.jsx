import React from "react";
import Proptypes from "prop-types";
import EnterMessage from "./EnterMessage";
import ErrorMessage from "./ErrorMessage";

const MAX_CHAR_LEN = 12;


const InputText = (props) => {
	return (
		<div style={props.containerStyle}>
			<input className="inputText" id="inputText" readOnly value={props.phoneNumber}
				   maxLength={MAX_CHAR_LEN}/>
			{!props.error ? <EnterMessage loginType={props.loginType}/> : <ErrorMessage error={props.error}/>}

		</div>
	);
};
InputText.propTypes = {
	phoneNumber: Proptypes.string.isRequired,
	containerStyle: Proptypes.object.isRequired,
	loginType: Proptypes.string.isRequired,
	error: Proptypes.string.isRequired
};

export default InputText;
