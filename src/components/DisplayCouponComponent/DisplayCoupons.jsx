import React from "react";
import Header from "../HeaderComponent/Header";
import "./DisplayCoupons.css";
import {connect} from "react-redux";
import {reset_all_redux} from "../../redux/actions/Common";
import {ROUTE_HOME_PAGE} from "../../utils/RouteConstants";
import {fetchCategories, updateLoaded} from "../../redux/actions/SearchSortFilter";
import WelcomeHeader from "../WelcomeHeader";
import LogOutPromptPopup from "../TimedComponents/LogOutPromptPopup";
import LogOutSuccessPopUp from "../TimedComponents/LogOutSuccessPopUp";
import {iAmHere, startTimer} from "../../redux/actions/Timer";
import PrintComponent from "../PrintComponent";
import LoadedCouponsSideBar from "../LoadedCouponsSideBar";
import SideBar from "../SideBar";
import AllCoupons from "../AllCoupons";

class Coupons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillUnmount() {
		// this.props.resetRedux();
	}

	componentDidMount() {
		alert("Display coupons mounted ! ")
		this.props.fetchCategories();
		// this.props.startTimer();
	}


	timerReset = () => {};


	componentWillReceiveProps(nextProps, nextContext) {
		// if (!!nextProps.isTimedOut) {
		//
		// 	nextProps.history.push(ROUTE_HOME_PAGE);
		// }
	}

	render() {
		console.log("rendering DisplayCoupons.jsx");

		return <div className="pointerEventsNone">
			<WelcomeHeader userName={this.props.userInfo.firstName} timerReset={this.timerReset}/>
			<Header/>
			{/*<PrintComponent hideLoadedCoupons={this.state.hideLoadedCoupons}*/}
							{/*componentRef={this.componentRef}></PrintComponent>*/}
			<AllCoupons>
				<SideBar  timerReset={this.timerReset}/>
				{/*<LogOutPromptPopup/>*/}
				{/*<LogOutSuccessPopUp/>*/}
				<LoadedCouponsSideBar hideNewCoupons={this.state.hideNewCoupons}
									  timerReset={this.timerReset}></LoadedCouponsSideBar>
			</AllCoupons>
		</div>

	};
}

const mapStateToProps = (state) => {
	return {
		userInfo: state.DisplayCouponsReducer.userInfo,
		allCoupons: state.SearchSortFilterReducer.arr,
		// isTimedOut: state.TimerReducer.isTimedOut
	};
};

const mapDispatchToProps = (dispatch) => ({
	resetRedux: () => reset_all_redux(dispatch),
	updateLoaded: (updatedLoadedParams) => updateLoaded(dispatch, updatedLoadedParams),
	fetchCategories: () => fetchCategories(dispatch),
	// iAmHere: () => iAmHere(dispatch),
	// startTimer: () => startTimer(dispatch)

});
export default connect(mapStateToProps, mapDispatchToProps)(Coupons);
