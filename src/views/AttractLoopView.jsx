import React, { Component } from "react";
import PropTypes from "prop-types";
import AttractLoop from "../components/AttractLoopComponent/AttractLoop";
import Config from "../config/config";
// import BarcodeScanner from "../components/BarcodeScanner/BarcodeScanner";


class AttractLoopView extends Component{
	constructor(props){
		super(props);
	}  

	render(){
		return(
			<div>
				<AttractLoop history={this.props.history}></AttractLoop>
			</div>
		);
	}
}

export default AttractLoopView;

AttractLoopView.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
};
