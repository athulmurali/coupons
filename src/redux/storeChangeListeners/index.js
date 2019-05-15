import {fetchAllCouponsFromServer} from "../actions/FetchCoupons";
import {CouponsTypeEnum} from "../../config/config";

export const onChangeSearchSortFilter=(state, dispatch )=>{

	const SearchSortFilterReducer = state.SearchSortFilterReducer;

	const filterParams = SearchSortFilterReducer.filters;
	const loadedParams = SearchSortFilterReducer.loaded;
	const couponsType = SearchSortFilterReducer.couponsType;

	if (!!SearchSortFilterReducer.toBeFetched){

		const loyaltyNumber = state.DisplayCouponsReducer.loyaltyNumber;

		// if coupons type count grows greater than 2, then update the following code to a switch case
		if (couponsType === CouponsTypeEnum.NEW) {
			fetchAllCouponsFromServer(dispatch, filterParams, loyaltyNumber);
		} else {
			fetchAllCouponsFromServer(dispatch, filterParams, loadedParams, loyaltyNumber);
		}

	}

};
