import {UPDATE_COUPON_DETAILS, FLIP_CARD} from "../reducers/DisplayCouponReducer";

export const updateCoupons =(dispatch, fieldAndValueObject)=>dispatch({
	type : UPDATE_COUPON_DETAILS,
	payload : fieldAndValueObject
});


export const flipCard =(dispatch, cardIndex)=>dispatch({
	type : FLIP_CARD,
	payload : {cardIndex}
});
