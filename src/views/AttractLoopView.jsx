import React, { Component } from "react";
import PropTypes from "prop-types";
import AttractLoop from "../components/AttractLoopComponent/AttractLoop";
// import BarcodeScanner from "../components/BarcodeScanner/BarcodeScanner";
import { connect } from "react-redux";
import displayCouponsStateUpdate from "../actions/displayCouponActions";

class AttractLoopView extends Component{
	// constructor(props){
	// 	super(props);
	// }  

	render(){
		console.log("props Loop   " + " " + this.props.rotating);
		return(
			<div onClick={() => this.props.rotateAction(false)}>
				<AttractLoop history={this.props.history}></AttractLoop>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});
const mapDispatchToProps = dispatch => ({
	rotateAction: (value) => { 
		console.log("Value" + value);
		dispatch(displayCouponsStateUpdate("rotating",value))}
});

export default connect(mapStateToProps, mapDispatchToProps)(AttractLoopView);

// AttractLoopView.propTypes = {
// 	history: PropTypes.shape({
// 		push: PropTypes.func,
// 	}).isRequired,
// };
