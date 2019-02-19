import React, {Component} from "react";
import ReactToPrint from "react-to-print";
import SortComponent from "../SortComponent";
import FilterComponent from "../FilterComponent/filterComponent";
import SearchCouponByName from "../SearchComponent/SearchCoupon";
import CouponCards from "../CouponCardComponent/CouponCards";
import Popup from "reactjs-popup";
const context = React.createContext();
const {Provider,Consumer} = context;

export const PopupTrigger = (props) => {
	return(
	
		(<Popup trigger={<button ref = {props.logOutPopUpTrigger}  className="button" ></button>} true modal>
			{close => (
				<div className="modal">
					<img className="logOutImage" src={props.LogOut_Success}></img>
					<h1 className="logOutMessage1"> Enjoy your savings!</h1>
					<h4 className="logOutMessage2">You have been successfully logged out. <br/> See you soon!</h4>
				</div>)}
		</Popup> )

	);

};
export const LoadedCouponsSideBar = (props) => (
	<Consumer>{
		() => <div className="LoadedCoupons" hidden={props.hideNewCoupons}   >
			<SearchCouponByName timerReset={props.timerReset} />
			<div onClick={props.timerReset}>
				<CouponCards  setRef={props}/>
			</div>
		</div>
	}
	</Consumer>
);

export const SideBar = (props) => (
	<Consumer>
		{
			() => 
				<ul>
					<li> <a  className={props.activeNewCoupons} onClick={props.NewCoupons} > New Coupons </a></li>
					<li> <a  className={props.activeLoadedCoupons} onClick={props.LoadedCoupons}> Loaded Coupons </a></li>
					<FilterComponent timerReset={props.timerReset}/>
					<SortComponent timerReset={props.timerReset}/>
				</ul>
			
		}
	</Consumer>	
);


export const WelcomeHeader = (props) =>{
	return(<div className="WelcomeUser_Logout" >
		<h2 className="userName"> Welcome {props.userName}! </h2>
		<button className="logoutButton" ref = {props.logOutPopUpTrigger} onClick={() => props.parent.setState({logOutTrigger: true})} > Log Out </button>
	</div>
	);
};

export const PrintComponent = (props) =>{
	return(
		<div className="printDiv">
			<ReactToPrint
			
				trigger={() => <button 	className="printButton" hidden={true}>PRINT</button>}
				content={() => props.componentRef}
			/>
		</div>
	);
};

export default class AllCoupons extends Component{
	// state={

	// };
	render(){
		return(
			<Provider>
				<div className="AllCoupons">
					{this.props.children}
				</div>
			</Provider>
		);
	}
}
