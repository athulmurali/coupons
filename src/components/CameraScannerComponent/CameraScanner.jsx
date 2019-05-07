import {Component} from "react";
import PropTypes from "prop-types";
import {ROUTE_DISPLAY_COUPONS} from "../../utils/RouteConstants";
import {connect} from "react-redux";
import {updateCoupons} from "../../redux/actions/DisplayCouponAction";
import {loginByBarcode} from "../../redux/actions/Login";

class CameraScanner extends Component {


	_searchUserInDatabase = async (searchBarcode) => {
		this.props.loginByBarcode(searchBarcode.slice(0, -1));

	};


	constructor(props) {
		super(props);
		this.state = {

		};
		this._searchUserInDatabase = this._searchUserInDatabase.bind(this);
		if(props.match.params.barcode){
      this._searchUserInDatabase(props.match.params.barcode)
    }
	}



	render() {
		// reroute to Display coupons if the userInfo is set
		if (!!this.props.userInfo){
			this.props.history.push({pathname: ROUTE_DISPLAY_COUPONS});

		}
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


const mapStateToProps = (props) => {
	return {
		userInfo : props.DisplayCouponsReducer.userInfo
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateCoupons: (couponDetails) => updateCoupons(dispatch, couponDetails),
		loginByBarcode : (barcodeWithoutCheckSum) => loginByBarcode(dispatch, barcodeWithoutCheckSum),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScanner);
