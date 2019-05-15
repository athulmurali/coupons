import React from "react";
import {signMeOut} from "../redux/actions/Timer";
import {connect} from "react-redux";

//stopping propagation to defer sending events to the parents.
// In this case, the parent listens to click events and resets timer which is not to be done for
// logout button click
const handleClickLogOut = (e, logOutHandler) => {
	e.stopPropagation();
	logOutHandler();
};
const WelcomeHeader = (props) => {
	return (<div className="WelcomeUser_Logout">
			<h2 className="userName" > Welcome {props.userName}! </h2>
			<button className="logoutButton"
					onClick={e => handleClickLogOut(e, props.signMeOut)}> Log Out
			</button>
		</div>
	);
};

const mapStateToProps = () => ({});
const mapDispatcherToProps = (dispatch) => {
	return {
		signMeOut: () => signMeOut(dispatch)
	};
};
export default connect(mapStateToProps, mapDispatcherToProps)(WelcomeHeader);
