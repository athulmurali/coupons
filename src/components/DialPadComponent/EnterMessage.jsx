import React from "react";

const EnterMessage = (props) => {
	return <div className="status-block">
		<h3 className="statusMessage"> Enter the {props.loginType} number</h3>
		<h3 className="statusMessage">associated with your account</h3>
	</div>;
};
export default EnterMessage;
