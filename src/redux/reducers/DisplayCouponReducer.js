import {FETCH_COUPONS_FULFILLED} from "./SearchSortFilterReducer";

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
	loyaltyNumber: null,
	sortArrow: false
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



	case FETCH_COUPONS_FULFILLED : {
		return {
			...state,
			toBeFetched: false,
			isLoading: false,
			allCoupons: action.payload.data

		};
	}
	default :
		return state;

	}

};


export default DisplayCouponsReducer;