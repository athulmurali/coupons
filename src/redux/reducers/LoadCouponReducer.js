import {RESET} from "./DisplayCouponReducer";


export const LOAD_COUPON ='LOAD_COUPON';
export const LOAD_COUPON_PENDING = LOAD_COUPON + '_PENDING';
export const LOAD_COUPON_FULFILLED = LOAD_COUPON + '_FULFILLED';
export const LOAD_COUPON_REJECTED = LOAD_COUPON + '_REJECTED';

const initialState = {

	isLoading : false,
	error: null
};

// to be moved to config

const SearchSortFilterReducer = (state = initialState, action) => {

	switch (action.type) {
		case RESET :
			return {
				...initialState
			};



		case LOAD_COUPON_PENDING : {
			return {
				...state,
				isLoading: true
			};
		}

		case LOAD_COUPON_REJECTED : {
			alert("Something went wrong while loading the coupon !")
			return {
				...state,
				isLoading: false,
				error : action.payload.message
			};
		}


		case LOAD_COUPON_FULFILLED : {
			return {
				...state,
				isLoading: false,
				loadCouponResult: action.payload.data
			};
		}
		default             :
			return {...state};
	}
};

export default SearchSortFilterReducer;