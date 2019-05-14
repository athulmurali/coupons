// Todo : Too many apis to manage if gas rewards is a an api and total savings is another
// Todo : The position of more savings and savings dashboard is to be changed after discussion
//  CheckConfirm for possible backend api

import React from "react";
import Header from "../HeaderComponent/Header";
import "./DisplayCoupons.css";
import {ROUTE_HOME_PAGE} from "../../utils/RouteConstants";
import {fetchCategories, updateLoaded} from "../../redux/actions/SearchSortFilter";
import WelcomeHeader from "../WelcomeHeader";
import LogOutPromptPopup from "../PopUps/LogOutPromptPopup";
import LogOutSuccessPopUp from "../PopUps/LogOutSuccessPopUp";
import {startTimer} from "../../redux/actions/Timer";
import SideBar from "../SideBar";
import {RESTART_TIMER_EVENTS} from "../../config/config";
import CouponCardsWithSearch from "../CouponCardComponent/CouponCardsWithSearch";

import ExpiringCoupons from "../ExpiringCouponsComponent/ExpiringCoupons";
import connect from "react-redux/es/connect/connect";

class Coupons extends React.Component {

	componentDidMount() {
		console.log("Mounted!");
		const {props} = this;
		RESTART_TIMER_EVENTS.map(event => window.addEventListener(event, this.props.startTimer));
		props.startTimer();

		if (!props.userInfo) {
			props.history.push(ROUTE_HOME_PAGE);
		} else if (!props.isTimedOut) {
			props.fetchCategories();
			props.updateLoaded({loaded: false});
		}

	}

	componentWillReceiveProps(nextProps, nextContext) {

		const {props} = this;

		if (!nextProps.userInfo || !!nextProps.isTimedOut) {
			props.history.push(ROUTE_HOME_PAGE);
		}
	}

	componentWillUnmount() {
		console.log("Unmounted!");
		RESTART_TIMER_EVENTS.map(event => window.removeEventListener(event, this.startTimer));
	}

	render() {
		const {props} = this;
		console.log("rendering DisplayCoupons.jsx");
		return props.userInfo && <div className="pointerEventsNone">
			<WelcomeHeader userName={props.userInfo.firstName}/>
			<Header/>
			<ExpiringCoupons gasRewards={"$0.02"} totalSavings={"$366.12"} userName={props.userInfo.firstName}/>
			{/*<PrintComponent hideLoadedCoupons={this.state.hideLoadedCoupons}*/}
			{/*componentRef={this.componentRef}></PrintComponent>*/}

			<div className="displayCouponsContainer">
				<SideBar/>
				<CouponCardsWithSearch/>
				<LogOutSuccessPopUp/>
				<LogOutPromptPopup/>
			</div>
		</div>
	}
}
const mapStateToProps = (state) => {
	return {
		userInfo: state.DisplayCouponsReducer.userInfo,
		isTimedOut: state.TimerReducer.isTimedOut
	};
};

const mapDispatchToProps = (dispatch) => ({
	updateLoaded: (updatedLoadedParams) => updateLoaded(dispatch, updatedLoadedParams),
	fetchCategories: () => fetchCategories(dispatch),
	startTimer: () => startTimer(dispatch)

});
export default connect(mapStateToProps, mapDispatchToProps)(Coupons);
