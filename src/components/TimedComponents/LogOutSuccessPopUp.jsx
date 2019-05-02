import React from "react";
import {connect} from "react-redux";
import "../DisplayCouponComponent/DisplayCoupons.css";
import Popup from "reactjs-popup";
import SuccessImg from "../../assets/success.svg";

const LogOutSuccessPopUp = (props) => (<Popup trigger={<button className="button"></button>}
											  open={props.showLogOutSuccess}
											  closeOnDocumentClick={false}
											  modal>
	{close => (
		<div className="modal">
			<img alt="Logout button" className="logOutImage" src={SuccessImg}/>
			<h1 className="logOutMessage1"> Enjoy your savings!</h1>
			<h4 className="logOutMessage2">You have been successfully logged out. <br/> See you soon!</h4>
		</div>)}
</Popup>);

const mapStateToProps = function (state) {
	return {showLogOutSuccess: state.TimerReducer.showLogOutSuccess};
};
const mapDispatchToProps = function (dispatch) {
	return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(LogOutSuccessPopUp);
