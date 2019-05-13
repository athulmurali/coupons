import {LOGIN_BARCODE_FULFILLED} from "./LoginReducer";

export const UPDATE_DISPLAY_COUPON_STATE = "UPDATE_DISPLAY_COUPON_STATE";
export const UPDATE_COUPON_DETAILS = "UPDATE_COUPON_DETAILS";

export const RESET = "RESET";

const initialState = {
	searchedCouponName: "",
	LoadedCouponsTrigger: false,
	userInfo: null,
	allCoupons: [],
	searchedCouponsLength: 0,
	loadedCouponIds: [],
	activeNewCoupons: "active",
	activeLoadedCoupons: "inactive",
	loyaltyNumber: null
};


const DisplayCouponsReducer = (state = initialState, action) => {

	switch (action.type) {

	case  UPDATE_COUPON_DETAILS :
		return {
			...state, ...action.payload
		};

	case UPDATE_DISPLAY_COUPON_STATE :
		return {
			...state, ...action.payload
		};

	case RESET :
		return {
			...initialState
		};

	
		case LOGIN_BARCODE_FULFILLED :
			const userInfo =  action.payload.data.response;
			return {
				...state,
				isLoading: false,
				userInfo: userInfo,
				loyaltyNumber:userInfo.loyaltyCardNumber
			};
		
	default :
		return state;

	}

};


export default DisplayCouponsReducer;
