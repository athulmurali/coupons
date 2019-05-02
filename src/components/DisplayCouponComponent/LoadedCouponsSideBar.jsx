import React from "react";
import SearchCouponByName from "../SearchComponent/SearchCoupon";
import CouponCards from "../CouponCardComponent/CouponCards";


const LoadedCouponsSideBar = (props) => (<div className="LoadedCoupons" hidden={false}   >
			<SearchCouponByName timerReset={props.timerReset} />
			<div onClick={props.timerReset} className="flippyCardsContainer" onScroll={props.timerReset}>
				<CouponCards  setRef={props}/>
			</div>
		</div>);





export default LoadedCouponsSideBar
