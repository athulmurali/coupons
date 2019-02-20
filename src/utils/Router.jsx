import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import AttractLoopView from "../views/AttractLoopView";
import UserIdentificationView from "../views/UserIdentificationView";
import DisplayCouponsView from "../views/DisplayCouponsView";
import CameraScanner from "../components/CameraScannerComponent/CameraScanner";
import {ROUTE_DISPLAY_COUPONS, ROUTE_SCAN_IMAGE, ROUTE_USER_IDENTIFICATION, ROUTE_HOME_PAGE} from "./RouteConstants";

class Router extends Component {
	constructor(props) {
		super(props);
		this.flag = false;
		this.reset = true;

	}

	componentWillMount() {
		sessionStorage.setItem("Phone-Number", "");
		sessionStorage.setItem("token",false);
	}

  

	render() {

		return (
			<HashRouter >
				<Switch>
					<Route exact path={ROUTE_HOME_PAGE}  component={AttractLoopView} />
					<Route exact path={ROUTE_USER_IDENTIFICATION} component={UserIdentificationView} />
					<Route exact path={ROUTE_DISPLAY_COUPONS} component={DisplayCouponsView} />
					<Route exact path={ROUTE_SCAN_IMAGE}  component ={CameraScanner} />
				</Switch>

			</HashRouter>
		);
	}
}

export default Router;