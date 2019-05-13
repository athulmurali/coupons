import React from "react";
import {connect} from "react-redux";
import SortComponent from "./SortComponent";
import FilterComponent from "./FilterComponent/FilterComponent";
import "./DisplayCouponComponent/DisplayCoupons.css";
import {updateLoaded} from "../redux/actions/SearchSortFilter";


const SideBar = (props) =>
	(<ul className="sideBarUl">
		<li >
			<button className={props.loaded ? "tabInactive" : "tabActive"}
					onClick={()=>{props.updateLoaded({loaded: false})}}> New Coupons
			</button>
		</li>
		<li>
			<button className={props.loaded ? "tabActive" : "tabInactive"} onClick={()=>{props.updateLoaded({loaded: true})}}> Loaded
				Coupons
			</button>
		</li>
		<SortComponent timerReset={props.timerReset}/>
		<FilterComponent timerReset={props.timerReset}/>
	</ul>);


const mapStateToProps = (state) => ({loaded: state.SearchSortFilterReducer.loaded.loaded});
const mapDispatcherToProps =(dispatch)=>({
	updateLoaded: (updatedLoadedParams) => updateLoaded(dispatch, updatedLoadedParams),
});


export default connect(mapStateToProps, mapDispatcherToProps)(SideBar);
