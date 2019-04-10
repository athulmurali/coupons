import Popup from "reactjs-popup";
import React from "react";
import {connect} from "react-redux";
import {signMeOut, startTimer} from "../../redux/actions/Timer";
import "../DisplayCouponComponent/DisplayCoupons.css";
import {reset_all_redux} from "../../redux/actions/Common";


const LogMeOutButton = () => (<button className="button" onClick={signMeOut}>Log Me out </button>);


	/**
	 * LogOutPromptPopup : Uses a open source library reactjs-popup
	 *
	 * This is using a controlled component  structure
	 * @link: https://react-popup.elazizi.com/controlled-popup/
	 */

	class LogOutPromptPopup extends React.Component {

		render() {
			return <Popup trigger={LogMeOutButton}
						  open={this.props.isOpen}
						  modal
						  closeOnDocumentClick={false}
			>
				{close => (
					<div className="modal">
						<h1 className="popupHeader"> Are you still there? </h1>
						<h4 className="popupMessage">Your session is about to expire</h4>
						<div className="bar">
							<div className="in"></div>
						</div>
						<div className="actions">
							<button
								className="buttons"
								onClick={this.props.signMeOut}>
								Logout
							</button>
							<button
								className="buttons"
								onClick={this.props.startTimer}>
								I'm here
							</button>
						</div>
					</div>
				)}
			</Popup>;
		}

	}


const mapStateToProps = (state) => ({
	isOpen: state.TimerReducer.showLogOutPrompt
});
const mapDispatcherToProps = (dispatch) => ({
	startTimer: () => startTimer(dispatch),
	signMeOut: () => signMeOut(dispatch),
	resetRedux:()=>reset_all_redux(dispatch)

});

export default connect(mapStateToProps, mapDispatcherToProps)(LogOutPromptPopup);
