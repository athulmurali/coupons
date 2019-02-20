import {FETCH_COUPONS} from "../reducers/SearchSortFilterReducer";
import API from "../../utils/API";

export const fetchAllCouponsFromServer = (dispatch, searchParams, filterParams, sortParams,loadedParams) => {

	const getCouponsPromise = API.getCouponsWithFilters(searchParams, filterParams, sortParams,loadedParams);

	dispatch(
		{
			type: FETCH_COUPONS,
			payload: getCouponsPromise
		}
	);

};