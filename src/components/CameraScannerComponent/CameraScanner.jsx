import PropTypes from "prop-types";
import {ROUTE_DISPLAY_COUPONS, ROUTE_USER_IDENTIFICATION} from "../../utils/RouteConstants";
import {connect} from "react-redux";
import {loginByBarcode} from "../../redux/actions/Login";
import * as React from "react";
import {RiseLoader} from "react-spinners";

class CameraScanner extends React.Component {

	componentDidMount() {
		if (this.props.match.params.barcode)
			this.props.loginByBarcode(this.props.match.params.barcode.slice(0, -1));
	}

	async componentWillReceiveProps(nextProps, nextContext) {
		if (!!nextProps.userInfo)
			nextProps.history.push({pathname: ROUTE_DISPLAY_COUPONS});
		else if (!!nextProps.scanError)
			nextProps.history.push({pathname: ROUTE_USER_IDENTIFICATION});
	}


	render() {
		return <div style={{justifyContent:"center", alignItems:"center", display:"flex", height: "670px", fontSize:"21px"}}>
			<RiseLoader size={20} color="#E0004D" />
		</div>
	}

}


CameraScanner.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
	match: PropTypes.shape({
    params: PropTypes.shape({
      barcode: PropTypes.string,
    }),
  }),
};

CameraScanner.defaultProps = {
  match: {
    params: {
      barcode: null
    }
  }
};


const mapStateToProps = (state) => {
	return {
		userInfo : state.DisplayCouponsReducer.userInfo,
		scanError: state.LoginReducer.error,
		isLoginLoading:  state.LoginReducer.isLoginLoading
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		loginByBarcode : (barcodeWithoutCheckSum) => loginByBarcode(dispatch, barcodeWithoutCheckSum),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScanner);
