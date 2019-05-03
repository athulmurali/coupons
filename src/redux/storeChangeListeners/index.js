import {fetchAllCouponsFromServer} from "../actions/FetchCoupons";
import {CouponsTypeEnum} from "../../config/config";
import {COUNT_DOWN, COUNT_DOWN_INTERVAL, SET_INTERVAL_OBJ, TIMER_STATUS} from "../reducers/TimerReducer";

export const onChangeSearchSortFilter=(state, dispatch )=>{

	const SearchSortFilterReducer = state.SearchSortFilterReducer;
	const searchParams = SearchSortFilterReducer.search;
	const filterParams = SearchSortFilterReducer.filters;
	const sortParams = SearchSortFilterReducer.sort;
	const loadedParams = SearchSortFilterReducer.loaded;

	const couponsType = SearchSortFilterReducer.couponsType;
	const loyaltyNumber = state.DisplayCouponsReducer.loyaltyNumber;

	if (!!SearchSortFilterReducer.toBeFetched){

		// if coupons type count grows greater than 2, then update the following code to a switch case
		if (couponsType === CouponsTypeEnum.ALL)
		{
			fetchAllCouponsFromServer( dispatch, searchParams, filterParams , sortParams,loyaltyNumber )
		}
		else {	fetchAllCouponsFromServer( dispatch, searchParams, filterParams , sortParams,loadedParams ,loyaltyNumber )}

	}

};

export const timerCountDown=(state, dispatch)=>{


	if (state.TimerReducer.status === TIMER_STATUS.START )
	{
		const intervalObj= setInterval(()=>
				dispatch({type : COUNT_DOWN, payload:{decrementBy : COUNT_DOWN_INTERVAL}}),
			COUNT_DOWN_INTERVAL);

		dispatch({type:SET_INTERVAL_OBJ, payload: {intervalObj}})


	}


};

// Notes
// Removed 	console.log(SearchSortFilterReducer.toBeFetched)
// Added semicolons

