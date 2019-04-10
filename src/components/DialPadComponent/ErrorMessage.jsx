import React from "react";

const ErrorMessage = (props) => {
	return <div className="status-block">
		<h3 className="statusMessage"> {props.error}</h3>
	</div>;
};
export default ErrorMessage;
