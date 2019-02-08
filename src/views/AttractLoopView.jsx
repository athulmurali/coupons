import React, {Component} from "react";
import AttractLoop from "../components/AttractLoopComponent/AttractLoop";

// import BarcodeScanner from "../components/BarcodeScanner/BarcodeScanner";
import { connect } from "react-redux";
import displayCouponsStateUpdate from "../actions/displayCouponActions";

class AttractLoopView extends Component{
	// constructor(props){
	// 	super(props);
	// }  

	render(){
		return(
			<div>
				<AttractLoop history={this.props.history} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});
// const mapDispatchToProps = dispatch => ({
	
// });

export default connect(mapStateToProps, null)(AttractLoopView);
