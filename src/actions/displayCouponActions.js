export const UPDATE_COUPON_STATE = "UPDATE_COUPON_STATE";


export default function displayCouponsStateUpdate(field, value) {
	return {
		type: UPDATE_COUPON_STATE,
		field,
		value,
	};
}