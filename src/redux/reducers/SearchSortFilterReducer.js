import Config, {CouponsTypeEnum, FILTER_CATEGORIES} from "../../config/config";

import {RESET} from "./DisplayCouponReducer";

export const FETCH_COUPONS = "FETCH_COUPONS";
export const SET_SORT = "SET_SORT";
export const SET_FILTERS = "SET_FILTERS";
export const SET_SEARCH = "SET_SEARCH";
export const SET_LOADED = "SET_LOADED";
export const FETCH_COUPONS_PENDING = FETCH_COUPONS + "_PENDING";
export const FETCH_COUPONS_REJECTED = FETCH_COUPONS + "_REJECTED";
export const FETCH_COUPONS_FULFILLED = FETCH_COUPONS + "_FULFILLED";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES"

export const FETCH_CATEGORIES_PENDING = FETCH_CATEGORIES +"_PENDING"
export const FETCH_CATEGORIES_REJECTED = FETCH_CATEGORIES + "_REJECTED";
export const FETCH_CATEGORIES_FULFILLED = FETCH_CATEGORIES + "_FULFILLED";
export const LOADED_DEFAULT = false;

const initialState = {
	couponsType: CouponsTypeEnum.ALL,
	toBeFetched: false,
	filters: {},
	search: {},
	arr: [],
	loaded: {loaded: LOADED_DEFAULT},
	array_filter: [],
	categoriesAvailable :FILTER_CATEGORIES
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

			case SET_LOADED :
			return {
				...state,
				loaded: action.payload,
				couponsType : CouponsTypeEnum.LOADED,
				toBeFetched: true
			};			



		case SET_SEARCH  :
			const searchOnDeleteChar = (!!action.payload.searchString &&
				(action.payload.searchString.length == Config.MINIMUM_SEARCH_LENGTH - 1)
				&& state.search.searchString.length === Config.MINIMUM_SEARCH_LENGTH);

			const searchOnMinChars = (!!action.payload.searchString &&
				action.payload.searchString.length >= Config.MINIMUM_SEARCH_LENGTH);

			if(!!searchOnDeleteChar){
				action.payload.searchString = ""

			}



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
			return {
				...state,
				toBeFetched: false,
				isLoading: false,
				arr: action.payload.data.response

			};
		}


		case FETCH_CATEGORIES_FULFILLED :{
			return {
				...state,
				isLoading: false,

				//to be checked before the following is used for fetching categories
				categoriesAvailable: action.payload.data.response
			};
		}

		default             :
			return {...state};
	}
};

export default SearchSortFilterReducer;