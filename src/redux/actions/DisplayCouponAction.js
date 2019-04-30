import {UPDATE_COUPON_DETAILS} from "../reducers/DisplayCouponReducer";

export const updateCoupons =(dispatch, fieldAndValueObject)=>dispatch({
	type : UPDATE_COUPON_DETAILS,
	payload : fieldAndValueObject
});
