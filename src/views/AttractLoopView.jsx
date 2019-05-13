import React, {Component} from "react";
import AttractLoop from "../components/AttractLoopComponent/AttractLoop";

// import BarcodeScanner from "../components/BarcodeScanner/BarcodeScanner";

class AttractLoopView extends Component{


	render(){
		return(
			<div>
				<AttractLoop history={this.props.history} />
			</div>
		);
	}
}


export default AttractLoopView;
