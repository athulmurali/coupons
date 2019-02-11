import {UPDATE_DISPLAY_COUPON_STATE} from "../reducers/DisplayCouponReducer";

export const displayCouponState =(dispatch, fieldAndValueObject)=>dispatch({
	type : UPDATE_DISPLAY_COUPON_STATE,
	payload : fieldAndValueObject
});