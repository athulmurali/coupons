import API from "../../utils/API";
import {LOAD_COUPON} from "../reducers/LoadCouponReducer";

export const loadCoupon=(dispatch,loyaltyNumber, couponId, couponSource)=>{
	dispatch({
		type: LOAD_COUPON,
		payload : API.loadCoupon(loyaltyNumber,couponId,couponSource)
	})
}