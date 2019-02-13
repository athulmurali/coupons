import {FETCH_COUPONS} from "../reducers/SearchSortFilterReducer";
import {getAllCoupons, getLoadedCoupons} from "../../utils/services/test";
import {FETCH_LOADED_COUPONS} from "../reducers/UserIdentification";

export const fetchAllCouponsFromServer = (dispatch, searchParams, filterParams, sortParams) => {

	const getCouponsPromise = getAllCoupons(searchParams, filterParams, sortParams);

	dispatch(
		{
			type: FETCH_COUPONS,
			payload: getCouponsPromise
		}
	);

};

export const fetchLoadedCouponsFromServer = (dispatch, searchParams, filterParams, sortParams) => {

	const getLoadedCouponsPromise = getLoadedCoupons(searchParams, filterParams, sortParams);

	dispatch(
		{
			type: FETCH_LOADED_COUPONS,
			payload: getLoadedCouponsPromise
		}
	);

};