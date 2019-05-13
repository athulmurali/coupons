import React from "react";
import {signMeOut} from "../redux/actions/Timer";
import {connect} from "react-redux";

const WelcomeHeader = (props) =>{
	return(<div className="WelcomeUser_Logout" >
			<h2 className="userName"> Welcome {props.userName}! </h2>
			<button className="logoutButton" onClick={(e) => {
				e.stopPropagation();
				props.signMeOut();
			}}> Log Out
			</button>
		</div>
	);
};

const mapStateToProps=()=>({});
const mapDispatcherToProps=(dispatch)=>{
	return {
		signMeOut:()=>signMeOut(dispatch)
	}
};
export  default connect(mapStateToProps,mapDispatcherToProps)(WelcomeHeader);
