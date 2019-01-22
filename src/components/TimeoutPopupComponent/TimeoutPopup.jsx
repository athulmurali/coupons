import React from "react";
import "./TimeoutPopup.css";
import Popup from "reactjs-popup";
import Config from "../../config/config";

class TimeoutPopup extends React.Component {
	constructor(props){
		super(props);
		this.popupTimer = null;
		this.state = {
			popup: false
		}
		this.startPopupTimer();
	}

	componentWillUnmount(){
		clearTimeout(this.popupTimer)
	}

	displayPopup = () => {
		this.setState({ popup: true });
	}

	handleLogout = () => {
		this.stopTimeouts();
		this.props.history.push(`/`);
	}
	
	handlePopupTrigger = (clicker) => {
		if (clicker)
			clicker.click();
	}

	imHereClick = () => {
		this.stopTimeouts();
		this.startPopupTimer();
		this.setState({
			popup: false,
		});
	}

	startPopupTimer = () => {
		this.popupTimer = setTimeout(this.displayPopup,Config.COUPONS_POPUP_TIMER);
	}

	startLogoutTimer = () => {
		this.logoutTimer = setTimeout(this.handleLogout,Config.COUPONS_LOGOUT_TIMER);
	}

	stopTimeouts = () => {
		clearTimeout(this.popupTimer);
		clearTimeout(this.logoutTimer);
	}

	render() {
		let popupTrigger = " ";
		if (this.state.popup === true) {
			popupTrigger = this.handlePopupTrigger;
			this.startLogoutTimer();
		}

		return (
			<Popup trigger={<button ref={popupTrigger} className="popupButton"></button>} true modal>
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
									onClick={this.handleLogout}>
                    Logout
								</button>
								<button
									className="buttons"
									onClick={() => {this.imHereClick(); close();}}>
                    I'm here
								</button>
								</div>
							</div>
					)}
				</Popup> 
		)
	}
}
  
export default TimeoutPopup;