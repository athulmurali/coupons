import PropTypes from "prop-types";
import {ROUTE_DISPLAY_COUPONS, ROUTE_USER_IDENTIFICATION} from "../../utils/RouteConstants";
import {connect} from "react-redux";
import {updateCoupons} from "../../redux/actions/DisplayCouponAction";
import {loginByBarcode} from "../../redux/actions/Login";
import * as React from "react";

class CameraScanner extends React.Component {







	constructor(props) {
		super(props);
	}

	async componentWillReceiveProps(nextProps, nextContext) {

		if (!!nextProps.userInfo)
			nextProps.history.push({pathname: ROUTE_DISPLAY_COUPONS});
		else if (!!nextProps.scanError)
			nextProps.history.push({pathname: ROUTE_USER_IDENTIFICATION});

		else if (nextProps.match.params.barcode)
			await this.props.loginByBarcode(nextProps.match.params.barcode.slice(0, -1));

	}


	render() {

		return null

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
		scanError: state.LoginReducer.error
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateCoupons: (couponDetails) => updateCoupons(dispatch, couponDetails),
		loginByBarcode : (barcodeWithoutCheckSum) => loginByBarcode(dispatch, barcodeWithoutCheckSum),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScanner);
