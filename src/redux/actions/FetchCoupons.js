import {FETCH_COUPONS} from "../reducers/SearchSortFilterReducer";
import {getAllCoupons} from "../../utils/services/test";
import {FETCH_LOADED_COUPONS} from "../reducers/UserIdentification";

export const fetchAllCouponsFromServer = (dispatch, searchParams, filterParams, sortParams,isLoaded) => {

	const getCouponsPromise = getAllCoupons(searchParams, filterParams, sortParams);

	dispatch(
		{
			type: FETCH_COUPONS,
			payload: getCouponsPromise
		}
	);

};