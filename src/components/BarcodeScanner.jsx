import React from "react";



class Scanner extends React.Component {

	render(){
		const Barcode_Image = require("../assets/Barcode.png");

		return(
			<div>
				<div className="barcodeImage">
					<h3> Scan card to start </h3>
					<img src={Barcode_Image} height="100px" alt="Barcode"/>
				</div>
			</div>
		);
	}
}

export default Scanner;
