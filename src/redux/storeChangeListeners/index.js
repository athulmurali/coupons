import {fetchAllCouponsFromServer} from "../actions/FetchCoupons";
import {CouponsTypeEnum} from "../reducers/SearchSortFilterReducer";

export const onChangeSearchSortFilter=(state, dispatch )=>{

	const SearchSortFilterReducer = state.SearchSortFilterReducer

	const searchParams = SearchSortFilterReducer.search
	const filterParams = SearchSortFilterReducer.filters
	const sortParams = SearchSortFilterReducer.sort

	const couponsType = SearchSortFilterReducer.couponsType

	console.log(SearchSortFilterReducer.toBeFetched)

	if (!!SearchSortFilterReducer.toBeFetched){

		// if coupons type count grows greater than 2, then update the following code to a switch case
		if (couponsType === CouponsTypeEnum.ALL)
		{
			fetchAllCouponsFromServer( dispatch, searchParams, filterParams , sortParams )
		}
		else {	fetchAllCouponsFromServer( dispatch, searchParams, filterParams , sortParams, true )}

	}

}