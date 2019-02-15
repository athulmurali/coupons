import React, {Component} from "react";
import ReactToPrint from "react-to-print";
import SortComponent from "../SortComponent";
import FilterComponent from "../FilterComponent/filterComponent";
import SearchCouponByName from "../SearchComponent/SearchCoupon";
import CouponCards from "../CouponCardComponent/CouponCards";
const context = React.createContext();
const {Provider,Consumer} = context;

export const LoadedCouponsSideBar = (props) => (
	<Consumer>{
		() => <div className="LoadedCoupons"  hidden={props.hideNewCoupons}   >
		<SearchCouponByName />
		<div onClick={props.timerReset}>
				<CouponCards  />
		</div>
	</div>
	}
	
	</Consumer>
)

export const SideBar = (props) => (
	<Consumer>
		{
			() => 
				<ul>
                        <li> <a  className={props.activeNewCoupons} onClick={props.NewCoupons} > New Coupons </a></li>
                        <FilterComponent/>
                        <SortComponent/>
                    </ul>
			
		}
	</Consumer>	
)

export default class AllCoupons extends Component{
	state={

	};
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
				trigger={() => <button 	className="printButton" hidden={props.hideLoadedCoupons}>PRINT</button>}
				content={() => props.parent.componentRef}
			/>
		</div>
	);
};


