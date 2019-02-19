import {FETCH_COUPONS} from "../reducers/SearchSortFilterReducer";
import API from "../../utils/API";

export const fetchAllCouponsFromServer = (dispatch, searchParams, filterParams, sortParams,isLoaded) => {

	const getCouponsPromise = API.getCouponsWithFilters(searchParams, filterParams, sortParams);

	dispatch(
		{
			type: FETCH_COUPONS,
			payload: getCouponsPromise
		}
	);

};