import { UPDATE_COUPON_STATE } from "../actions/displayCouponActions";

export default function displayCouponsState(state={rotating: true}, action) {
	switch (action.type) {
	case (UPDATE_COUPON_STATE):
		const couponState = Object.assign({}, state);
		couponState[action.field] = action.value;
		return couponState;
	default:
		return state;
	}
}

