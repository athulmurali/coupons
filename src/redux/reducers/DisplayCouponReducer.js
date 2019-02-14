import {UPDATE_COUPON_DETAILS} from "./UserIdentification";

export const UPDATE_DISPLAY_COUPON_STATE = "UPDATE_DISPLAY_COUPON_STATE";
export const RESET = "RESET";

const initialState = {
	searchedCouponName: "",
	searchedCouponsLength: "",

	userInfo: null,
	allCoupons: []
};


const DisplayCouponsReducer = (state = initialState, action) => {

	switch (action.type) {

		case  UPDATE_COUPON_DETAILS :
			return {
				...state, ...action.payload
			};

		case "UPDATE_DISPLAY_COUPON_STATE" :
			return {
				...state, ...action.payload
			};

		case RESET :
			return {
				...initialState
			};

		default :
			return state;

	}

};


export default DisplayCouponsReducer;