import React from "react";
import {connect} from "react-redux";
import SortComponent from "./SortComponent";
import FilterComponent from "./FilterComponent/filterComponent";
import './DisplayCouponComponent/DisplayCoupons.css'
const SideBar = (props) =>
	(<ul className="sideBarUl">
		<li>
			<button className={props.loaded ? "tabInactive" : "tabActive"}
					onClick={props.NewCoupons}> New Coupons
			</button>
		</li>
		<li>
			<button className={props.loaded ? "tabActive" : "tabInactive"} onClick={props.LoadedCoupons}> Loaded
				Coupons
			</button>
		</li>
		<SortComponent timerReset={props.timerReset}/>
		<FilterComponent timerReset={props.timerReset}/>
	</ul>);


const mapStateToProps = (state) => ({loaded: state.SearchSortFilterReducer.loaded.loaded});

export default connect(mapStateToProps, null)(SideBar);
