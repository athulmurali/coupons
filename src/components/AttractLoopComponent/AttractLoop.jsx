import React, {Component} from "react";
import "./AttractLoop.css";
import ScanBarcode from "../ScanBarcode/ScanBarcode";
import Header from "../HeaderComponent/Header";
import {ROUTE_USER_IDENTIFICATION} from "../../utils/RouteConstants";
import {connect} from "react-redux";
import {reset_all_redux} from "../../redux/actions/Common";
import COUPON_IMG from "../../assets/icon-coupons.png";


class AttractLoop extends Component {
	constructor(props) {
		super(props);
		const isPortrait = window.matchMedia("(orientation: portrait)").matches;
		this.state = {isPortrait};
		window.addEventListener("orientationchange", this.orientationChange);
	}

	orientationChange = () => {
		this.setState({isPortrait: !window.matchMedia("(orientation: portrait)").matches});
	};

	handleScreenTap = () => {
		this.props.history.push(ROUTE_USER_IDENTIFICATION);
	};

	componentWillMount() {
		this.props.reset_all_redux();
	}

	render() {


		return (
			<div className="AttractLoop" onClick={this.handleScreenTap}>
				<Header/>
				<img src={COUPON_IMG} alt="coupon icon" className="couponIcon"/>
				<div id="one" className="screen">
					<div className="container">
						<span className="tapAnywhere">Tap anywhere to start</span>
					</div>
				</div>
				<ScanBarcode history={this.props.history}/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		reset_all_redux: () => reset_all_redux(dispatch)
	};

};

export default connect(()=>({}), mapDispatchToProps)(AttractLoop);
