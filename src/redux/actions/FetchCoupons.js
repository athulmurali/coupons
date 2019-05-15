import {FETCH_COUPONS} from "../reducers/SearchSortFilterReducer";
import API from "../../utils/API";

export const fetchAllCouponsFromServer = (dispatch, filterParams, loadedParams, loyaltyNumber) => {

	const getCouponsPromise = API.getCouponsWithFilters(filterParams, loadedParams, loyaltyNumber);

	dispatch(
		{
			type: FETCH_COUPONS,
			payload: getCouponsPromise
		}
	);

};
