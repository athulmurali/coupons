import React from "react";
import SearchCouponByName from "./SearchComponent/SearchCoupon";
import CouponCards from "./CouponCardComponent/CouponCards";
import './DisplayCouponComponent/DisplayCoupons.css'


const LoadedCouponsSideBar = (props) => (<div className="LoadedCoupons" hidden={false}   >
			<SearchCouponByName timerReset={props.timerReset} />
			<div onClick={props.timerReset} className="flippyCardsContainer" onScroll={props.timerReset}>
				<CouponCards/>
			</div>
		</div>);





export default LoadedCouponsSideBar
