import React from "react";
import "./ScanBarcode.css";

class ScanBarcode extends React.Component {
	render(){
		const Barcode_Image = require("../../assets/Barcode.png");
		return(
			<div className="scanBarcode">
				<h3 style={{
					padding: 0,
					margin: 0,
					
					textAlign: "center",
				}}> Scan card to start </h3>
				<img src={Barcode_Image} className="barcodeImage" alt="Scan barcode" />
			</div>
		);
	}
}
export default ScanBarcode;


