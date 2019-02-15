import Config, {CouponsTypeEnum} from "../../config/config";

import {RESET} from "./DisplayCouponReducer";

export const FETCH_COUPONS = "FETCH_COUPONS";
export const SET_SORT = "SET_SORT";
export const SET_FILTERS = "SET_FILTERS";
export const SET_SEARCH = "SET_SEARCH";

export const FETCH_COUPONS_PENDING = FETCH_COUPONS + "_PENDING";
export const FETCH_COUPONS_REJECTED = FETCH_COUPONS + "_REJECTED";
export const FETCH_COUPONS_FULFILLED = FETCH_COUPONS + "_FULFILLED";




const initialState = {
	couponsType: CouponsTypeEnum.ALL,
	toBeFetched: false,
	filters: {},
	search: {},
	arr: [],

	array_filter: []
};

// to be moved to config

const SearchSortFilterReducer = (state = initialState, action) => {

	switch (action.type) {
		case RESET :
			return {
				...initialState
			};

		case SET_SORT :
			return {
				...state,
				sort: action.payload,
				toBeFetched: true
			};

		case SET_FILTERS :
			return {
				...state,
				filters: action.payload,
				toBeFetched: true
			};

		case SET_SEARCH  :
			const searchOnDeleteChar = (!!action.payload.searchString &&
				(action.payload.searchString.length == Config.MINIMUM_SEARCH_LENGTH - 1)
				&& state.search.searchString.length === Config.MINIMUM_SEARCH_LENGTH);

			const searchOnMinChars = (!!action.payload.searchString &&
				action.payload.searchString.length >= Config.MINIMUM_SEARCH_LENGTH);

			return {
				...state,
				search: action.payload,
				toBeFetched: searchOnDeleteChar || searchOnMinChars

			};

		case FETCH_COUPONS_PENDING :
			return {
				...state,
				toBeFetched: false,
				isLoading: false

			};

		case FETCH_COUPONS_REJECTED :
			return {
				...state,
				toBeFetched: false,
				isLoading: false

			};

		case FETCH_COUPONS_FULFILLED : {
			console.log(action.payload.data.response);
			return {
				...state,
				toBeFetched: false,
				isLoading: false,
				arr: action.payload.data.response

			};
		}

		default             :
			return {...state};
	}
};

export default SearchSortFilterReducer;