import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import AttractLoopView from "../views/AttractLoopView";
import UserIdentificationView from "../views/UserIdentificationView";
import DisplayCouponsView from "../views/DisplayCouponsView";
import CameraScanner from "../components/CameraScannerComponent/CameraScanner";
import {
	ROUTE_BARCODE_SCAN,
	ROUTE_DISPLAY_COUPONS,
	ROUTE_HOME_PAGE,
	ROUTE_SCAN_IMAGE,
	ROUTE_USER_IDENTIFICATION
} from "./RouteConstants";

class Router extends Component {
	render() {

		return (
			<HashRouter>
				<Switch>
					<Route exact path={ROUTE_HOME_PAGE} component={AttractLoopView}/>
					<Route exact path={ROUTE_USER_IDENTIFICATION} component={UserIdentificationView}/>
					<Route exact path={ROUTE_DISPLAY_COUPONS} component={DisplayCouponsView}/>
					<Route exact path={ROUTE_SCAN_IMAGE} component={CameraScanner}/>
					<Route exact path={ROUTE_BARCODE_SCAN} component={CameraScanner}/>
				</Switch>
			</HashRouter>
		);
	}
}

export default Router;
