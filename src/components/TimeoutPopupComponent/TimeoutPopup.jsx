import React from "react";
import "./TimeoutPopup.css";
import Popup from "reactjs-popup";

class TimeoutPopup extends React.Component {
	constructor(props){
		super(props);
		this.timer = null;
		this.state = {
			popup: false
		}
	}

// 	componentDidUpdate(){
// 		clearTimeout(this.timer);
//  }

	displayPopup = () => {
		this.setState({ popup: true });
	}

	handleLogout = () => {
		// this.setState({});
		this.props.history.push(`/`);
	}
	
	handleButtonClick = (clicker) => {
		if (clicker)
			clicker.click();
	}

	imHereClick = () => {
		// console.log(this.timer);
		clearTimeout(this.timer);
		// clearTimeout(this.timer2);
		// console.log("Clear: " + this.timer);
		this.setState({
			popup: false,
		});
	}

	render() {
		
		this.timer = setTimeout(this.displayPopup.bind(this),5000);
		let popupTrigger = " ";
		if (this.state.popup === true)
			popupTrigger = this.handleButtonClick;

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