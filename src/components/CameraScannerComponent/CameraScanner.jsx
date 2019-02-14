import React, {Component} from "react";
import Result from "./Result";
import Scanner from "./Scanner";
import API from "../../utils/API";
import PropTypes from "prop-types";
import {ROUTE_DISPLAY_COUPONS} from "../../utils/RouteConstants";
import {connect} from "react-redux";
import {updateCoupons} from "../../redux/actions/UserIdentification";

class CameraScanner extends Component{
	constructor(props) {
		super(props);
		this.state = {
			scanning: false,
			couponDetails: [],
			results: [
			],	
		};
		this._onDetected= this._onDetected.bind(this);
		this._searchUserInDatabase = this._searchUserInDatabase.bind(this);
	}
	componentWillUnmount = () => {
		this.setState(
			{
				scanning:false,
				couponDetails: [],
				results:[],
			}
		);
	}
	_renderScanButtonAndResults() {
		if (this.state.scanning) { return null; }
		return (
			<div  style={{
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
	componentDidMount = () =>{
		this.setState({scanning:true});
	}

	_renderResults() {
		const result = this.state.results[this.state.results.length - 1];
		if (!result) { return null; }
		return (
			<div style={{
			}}>
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
		// {/* <ul className="results">
		//   {this.state.results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
		// </ul> */}
	}

	_renderVideoStream() {
		return <Scanner onDetected={this._onDetected.bind(this)} />;
	}

	render() {
		return  this._renderVideoStream();
	}

	_scan() {
		this.setState({scanning: !this.state.scanning});
	}
	_searchUserInDatabase = async  (searchBarcode) => {
		try{	
			
			let responeData = [];
			const userDetails = await API.getUserDetails(searchBarcode.slice(0,-1));
			// alert(userDetails)
			// console.log("userdetails")
			// console.log(userDetails.data.response.Customer[0]);
			responeData.push(userDetails.data.response.Customer[0]);
			const response = await API.getUserCoupons(searchBarcode.slice(0,-1));

			responeData.push(response.data.response)
			console.log(responeData)

			sessionStorage.setItem('token',true);

			this.props.updateCoupons({couponDetails : responeData})

			this.props.history.push({pathname : ROUTE_DISPLAY_COUPONS});
		} catch (error){
			this.setState(
				{
					couponDetails: null,
				}
			)
			console.log(error);
		}
	}
	_onDetected(result) {
		
		if(result.codeResult.code && this.state.scanning){
			try
			{
				this.setState({scanning:false});
				this._searchUserInDatabase(result.codeResult.code);
				// alert(result.codeResult.code)
				
				
			}
			catch(error){
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


const mapStateToProps=()=>{
	return {}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		updateCoupons:( couponDetails)=>updateCoupons(dispatch,couponDetails )

	}
}

export default  connect(mapStateToProps	,mapDispatchToProps) (CameraScanner)