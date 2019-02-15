import React, {Component} from "react";
import Result from "./Result";
import Scanner from "./Scanner";
import API from "../../utils/API";
import PropTypes from "prop-types";
import {ROUTE_DISPLAY_COUPONS} from "../../utils/RouteConstants";
import {connect} from "react-redux";
import {updateCoupons} from "../../redux/actions/DisplayCouponAction";

class CameraScanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scanning: false,
			results: [],
		};
		this._onDetected = this._onDetected.bind(this);
		this._searchUserInDatabase = this._searchUserInDatabase.bind(this);
	}

	componentWillUnmount = () => {
		this.setState(
			{
				scanning: false,
				couponDetails: [],
				results: [],
			}
		);
	};

	_renderScanButtonAndResults() {
		if (this.state.scanning) {
			return null;
		}
		return (
			<div style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center"
			}}>
				{this._renderResults()}
				{this._renderScanButton()}
			</div>
		);
	}

	_renderScanButton() {
		const text = this.state.scanning ? "STOP" : "SCAN";
		const styles = {
			width: "200px",
			height: "70px",
			padding: "0",
			border: "solid darkGreen 6px",
			borderRadius: "10px",
			backgroundColor: "green",
			fontSize: "50px",
			color: "white",
			position: "fixed",
			bottom: "20px"
		};
		return (
			<button
				onClick={this._scan.bind(this)}
				style={styles}
			>{text}
			</button>
		);
	}

	componentDidMount = () => {
		this.setState({scanning: true});
	};

	_renderResults() {
		const result = this.state.results[this.state.results.length - 1];
		if (!result) {
			return null;
		}
		return (
			<div style={{}}>
				<h1
					style={{
						opacity: "0.5",
						margin: "0px",
						textAlign: "center",
						fontSize: "32px",
						borderBottom: "2px solid #aaa",
						paddingBottom: "8px"
					}}
				>BARCODE
				</h1>
				<Result result={result}/>
			</div>
		);
	}

	_renderVideoStream() {
		return <Scanner onDetected={this._onDetected.bind(this)}/>;
	}

	render() {
		return this._renderVideoStream();
	}

	_scan() {
		this.setState({scanning: !this.state.scanning});
	}

	_searchUserInDatabase = async (searchBarcode) => {
		try {

			// the following alert to be deleted before merging
			alert("searching user In database  ")
			const userDetailsResponse = await API.getUserDetails(searchBarcode.slice(0, -1));
			const couponsResponse = await API.getUserCoupons(searchBarcode.slice(0, -1));

			const userInfo = userDetailsResponse.data.response.Customer[0];
			const allCoupons = couponsResponse.data.response;

			sessionStorage.setItem("token", true);

			this.props.updateCoupons(
				{
					allCoupons: allCoupons,
					userInfo: userInfo
				});

			this.props.history.push({pathname: ROUTE_DISPLAY_COUPONS});
		} catch (error) {
			console.log(error);
		}
	};

	_onDetected(result) {

		if (result.codeResult.code && this.state.scanning) {
			try {
				this.setState({scanning: false});

				if(!this.props.userInfo){
					this._searchUserInDatabase(result.codeResult.code)
				}


			} catch (error) {
				console.log(error);
			}
		}
	}
}


CameraScanner.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
};


const mapStateToProps = (props) => {
	return {
		userInfo : props.DisplayCouponsReducer.userInfo
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateCoupons: (couponDetails) => updateCoupons(dispatch, couponDetails)

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScanner);