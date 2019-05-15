// export const getAllCouponsForRewards =()=>{
//
// 	Promise.all([])
// }
//

import {FETCH_GAS_REWARDS, FETCH_NEW_AND_LOADED_COUPONS} from "../reducers/ExpiringCouponsReducer";
import API from "../../utils/API";

export const getUserGasRewards = (dispatch, loyaltyNumber) => {
	const requestPromise = API.getUserGasRewardsFromServer(loyaltyNumber);
	dispatch({
		type: FETCH_GAS_REWARDS,
		payload: requestPromise
	});
};

export const getTotalSavingFromServer = (dispatch, loyaltyNumber) => {


	const loadedParamsForNewCoupons = {loaded: false};

	const loadedParamsForLoadedCoupons = {loaded: true};

	const getNewCouponsPromise = API.getCouponsFromServer(loadedParamsForNewCoupons, loyaltyNumber);
	const getLoadedCouponsPromise = API.getCouponsFromServer(loadedParamsForLoadedCoupons, loyaltyNumber);


	const getNewAndLoadedCouponsPromise = Promise.all([getNewCouponsPromise, getLoadedCouponsPromise]);
	dispatch({
		type: FETCH_NEW_AND_LOADED_COUPONS,
		payload: getNewAndLoadedCouponsPromise
	});
};
