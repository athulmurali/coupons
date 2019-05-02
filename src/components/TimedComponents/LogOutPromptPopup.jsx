import Popup from "reactjs-popup";
import React from "react";
import {connect} from "react-redux";
import {iAmHere, signMeOut} from "../../redux/actions/Timer";
import "../DisplayCouponComponent/DisplayCoupons.css";


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
								onClick={this.props.iAmHere}>
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
	iAmHere: () => iAmHere(dispatch),
	signMeOut: () => signMeOut(dispatch),

});

export default connect(mapStateToProps, mapDispatcherToProps)(LogOutPromptPopup);
