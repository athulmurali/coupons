import React, { Component } from "react";
import PropTypes from "prop-types";
import UserIdentification from "../components/UserIdentificationComponent/UserIdentification";
import ScanBarcode from "../components/ScanBarcode/ScanBarcode";
import Config from "../config/config";
import CameraScanner from "../components/CameraScannerComponent/CameraScanner";


class UserIdentificationView extends Component{
	
	render(){
		Config.loggedIn = false;
		return(
			<div>
				<UserIdentification history={this.props.history}></UserIdentification>
				<ScanBarcode history= {this.props.history}/>
				<CameraScanner history={this.props.history}></CameraScanner>
			</div>
		);
	}
}
export default UserIdentificationView;
UserIdentificationView.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
};
