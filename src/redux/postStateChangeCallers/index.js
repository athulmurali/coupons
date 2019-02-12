import {fetchCouponsFromServer} from "../actions/FetchCoupons";

export const onChangeSearchSortFilter=(state, dispatch )=>{

	const SortFilterReducer = state.SortFilterReducer

	const searchParams = SortFilterReducer.search
	const filterParams = SortFilterReducer.filters
	const sortParams = SortFilterReducer.sort


	console.log(SortFilterReducer.toBeFetched)

	if (!!SortFilterReducer.toBeFetched){
		fetchCouponsFromServer( dispatch, searchParams, filterParams , sortParams )
	}

}