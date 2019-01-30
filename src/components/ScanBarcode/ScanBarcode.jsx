import React, { Component } from "react";
import "./ScanBarcode.css";

class ScanBarcode extends Component {
	constructor(props){
		super(props);
	}
	
	render(){
		const Barcode_Image = require("../../assets/Barcode.png");
		return(
			<div className="scanBarcode">
				<h3> Scan card to start </h3>
				<img src={Barcode_Image} className="barcodeImage" alt="Scan barcode" />
			</div>
		);
	}
}
export default ScanBarcode;


