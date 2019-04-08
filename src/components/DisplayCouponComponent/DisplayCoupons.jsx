import React from "react";
import Header from "../HeaderComponent/Header";
import "./DisplayCoupons.css";
import Popup from "reactjs-popup";
import Config, {SORT_ORDERS} from "../../config/config";
import {connect} from "react-redux";
import AllCoupons, {LoadedCouponsSideBar, PrintComponent, SideBar, WelcomeHeader} from "./DisplayCouponsProvider";
import {reset_all_redux} from "../../redux/actions/Common";
import {ROUTE_HOME_PAGE} from "../../utils/RouteConstants";
import {updateLoaded} from "../../redux/actions/SearchSortFilter";
import conditionalSearch from "../../utils/conditionalSearch";

class Coupons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			hideLoadedCoupons: true,
			hideNewCoupons: false,
			logOutTrigger: false,
			logOutReload: false,
		};
		this.inputRef = React.createRef();
	}

	buttonClick = (el) => {
		if (el) {
			el.click();
		}
		;
	};

	componentWillUnmount() {
		clearInterval(this.timer);
		this.props.resetRedux();
	}

	componentDidMount() {
		this.props.updateLoaded({loaded: false});
		this.startTimer();
		this.tick();
	}

	// shouldComponentUpdate() {
	// 	if (this.state.logOutTrigger || this.state.logOutReload || this.state.count === 20 || this.state.count >= 30) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	tick() {
		this.setState({count: (this.state.count + 1)});
	}

	startTimer() {
		clearInterval(this.timer);
		this.timer = setInterval(this.tick.bind(this), 1000);
	}

	timerReset = () => {
		this.setState({count: 0});
	};

	handleScreenTap = () => {
		this.props.resetRedux();
	};

	NewCoupons = () => {
		this.props.updateLoaded({loaded: false});
		this.setState({count: 0});
	};

	LoadedCoupons = () => {
		this.props.updateLoaded({loaded: true});
		this.setState({count: 0});
	};

	setRef = (ref) => {
		this.inputRef = ref;
	};

	render() {
		if (!this.props.userInfo) {
			this.props.history.push(ROUTE_HOME_PAGE);
		}

		let buttonTrigger = "";
		let logOutPopUpTrigger = "";
		let userName = "";

		if (!!this.props.userInfo) {
			userName = this.props.userInfo.FirstName;
		}


		if (this.state.count > Config.POPUPTIMER) {
			buttonTrigger = this.buttonClick;
			if (this.state.count > Config.LOGOUTTIMER) {
				this.handleScreenTap();
			}
		}

		if (this.state.logOutTrigger) {
			logOutPopUpTrigger = this.buttonClick;
			this.setState({logOutTrigger: false},
				() => {
					this.setState({count: 0},
						() => {
							this.setState({logOutReload: true});
						});
				});
		}

		if (this.state.logOutReload) {
			if (this.state.count > 3) {
				this.handleScreenTap();
			}
		}
		const LogOut_Success = require("../../assets/success.svg");
		let popUpLogout = (<Popup trigger={<button ref={logOutPopUpTrigger} className="button"></button>} true modal>
			{close => (
				<div className="modal">
					<img alt="Logout button" className="logOutImage" src={LogOut_Success}/>
					<h1 className="logOutMessage1"> Enjoy your savings!</h1>
					<h4 className="logOutMessage2">You have been successfully logged out. <br/> See you soon!</h4>
				</div>)}
		</Popup>);

		let sessionEndPopUp = (<Popup trigger={<button ref={buttonTrigger} className="button"></button>} true modal>
			{close => (
				<div className="modal">
					<h1 className="popupHeader"> Are you still there? </h1>
					<h4 className="popupMessage">Your session is about to expire</h4>
					<div className="bar">
						<div className="in"></div>
					</div>
					<div className="actions">
						<button
							className="buttons"
							onClick={() => {
								this.setState({logOutTrigger: true}, close());
							}}>
							Logout
						</button>
						<button
							className="buttons"
							onClick={() => {
								this.timerReset();
								close();
							}}>
							I'm here
						</button>
					</div>
				</div>
			)}
		</Popup>);


		return (<div>
			<WelcomeHeader userName={userName} parent={this}></WelcomeHeader>
			<Header/>
			<PrintComponent hideLoadedCoupons={this.state.hideLoadedCoupons}
							componentRef={this.componentRef}></PrintComponent>
			<AllCoupons>
				<SideBar activeNewCoupons={this.state.activeNewCoupons} timerReset={this.timerReset}
						 activeLoadedCoupons={this.state.activeLoadedCoupons} NewCoupons={this.NewCoupons}
						 LoadedCoupons={this.LoadedCoupons}/>
				{popUpLogout}
				{sessionEndPopUp}
				<LoadedCouponsSideBar hideNewCoupons={this.state.hideNewCoupons}
									  timerReset={this.timerReset}></LoadedCouponsSideBar>
			</AllCoupons>

		</div>);
	}
}

const mapStateToProps = (state) => {

	// const comparator=(order ,ascOrderVal)=>
	// 	(order === ascOrderVal ? (obj1, obj2)=>(obj1 > obj2) : (obj1, obj2)=>(obj1 < obj2));
	//
	// const sortByKey = (arr, key, ascOrderVal, order)=>
	// 	(arr.sort((obj1,obj2)=>
	// 		(comparator(order,ascOrderVal)(obj1[key].toString().toLowerCase(),obj2[key].toString().toLowerCase()) ? 1 : -1 )));
	//
	// let toBeSearched = state.SearchSortFilterReducer.toBeSearched;
	// let searchText =state.SearchSortFilterReducer.search.searchString;
	// let sortOption = state.SearchSortFilterReducer.sort;
	//
	// let allCoupons=  state.DisplayCouponsReducer.allCoupons;
	//
	// allCoupons = sortByKey(allCoupons, sortOption.sortBy,SORT_ORDERS.ASC, sortOption.sortOrder);
	// allCoupons = !!toBeSearched ? conditionalSearch(allCoupons, "name",  searchText) : allCoupons;

	return {
		userInfo: state.DisplayCouponsReducer.userInfo,
		allCoupons : [...state.DisplayCouponsReducer.allCoupons]
	};
};

const mapDispatchToProps = (dispatch) => ({
	resetRedux: () => reset_all_redux(dispatch),
	updateLoaded: (updatedLoadedParams) => updateLoaded(dispatch, updatedLoadedParams)

});
export default connect(mapStateToProps, mapDispatchToProps)(Coupons);
