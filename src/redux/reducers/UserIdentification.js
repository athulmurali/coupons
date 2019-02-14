import {FETCH_COUPONS_FULFILLED} from "./SearchSortFilterReducer";

export const FETCH_LOADED_COUPONS = "FETCH_LOADED_COUPONS";
export const FETCH_LOADED_COUPONS_PENDING = "FETCH_LOADED_COUPONS_PENDING";
export const FETCH_LOADED_COUPONS_REJECTED = "FETCH_LOADED_COUPONS_REJECTED";
export const FETCH_LOADED_COUPONS_FULFILLED = "FETCH_LOADED_COUPONS_FULFILLED";


export const UPDATE_COUPON_DETAILS = "UPDATE_COUPON_DETAILS";
export const RESET = "RESET";


const initialState = {
	couponDetails: [],

	// LoadedCoupons is an array of objects strictly. An iterable of coupons
	// Each object is  a coupon and
	loadedCoupons: [],

	allCoupons :[]
};


const UserIdentification = (state = initialState, action) => {


	switch (action.type) {

		case  UPDATE_COUPON_DETAILS :
			return {
				...state, ...action.payload
			};

		case RESET :
			return {

				...initialState
			};


		case FETCH_LOADED_COUPONS_PENDING :
			return {
				...state,
				toBeFetched: false,
				isLoading: false

			};

		case FETCH_LOADED_COUPONS_REJECTED :
			return {
				...state,
				toBeFetched: false,
				isLoading: false

			};

		case FETCH_COUPONS_FULFILLED : {
			console.log(action.payload.data.response)
			return {
				...state,
				toBeFetched: false,
				isLoading: false,
				arr: action.payload.data.response

			}

		}



		default :
			return state;


	}
};

export default UserIdentification;