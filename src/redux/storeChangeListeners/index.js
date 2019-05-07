import {fetchAllCouponsFromServer} from "../actions/FetchCoupons";
import {CouponsTypeEnum} from "../../config/config";

export const onChangeSearchSortFilter=(state, dispatch )=>{

	const SearchSortFilterReducer = state.SearchSortFilterReducer;

	const searchParams = SearchSortFilterReducer.search;
	const filterParams = SearchSortFilterReducer.filters;
	const sortParams = SearchSortFilterReducer.sort;
	const loadedParams = SearchSortFilterReducer.loaded;
	const couponsType = SearchSortFilterReducer.couponsType;

	if (!!SearchSortFilterReducer.toBeFetched){

		const loyaltyNumber = state.DisplayCouponsReducer.loyaltyNumber;

		// if coupons type count grows greater than 2, then update the following code to a switch case
		if (couponsType === CouponsTypeEnum.ALL)
		{
			fetchAllCouponsFromServer( dispatch, searchParams, filterParams , sortParams,loyaltyNumber )
		}
		else {	fetchAllCouponsFromServer( dispatch, searchParams, filterParams , sortParams,loadedParams ,loyaltyNumber )}

	}

};
