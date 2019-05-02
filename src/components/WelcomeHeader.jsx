import React from "react";

const WelcomeHeader = (props) =>{
	return(<div className="WelcomeUser_Logout" >
			<h2 className="userName"> Welcome {props.userName}! </h2>
			<button className="logoutButton" onClick={props.timerReset} > Log Out </button>
		</div>
	);
};

export  default  WelcomeHeader;
