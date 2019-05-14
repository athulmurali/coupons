// export const getAllCouponsForRewards =()=>{
//
// 	Promise.all([])
// }
//

import {FETCH_GAS_REWARDS} from "../reducers/ExpiringCouponsReducer";
import API from "../../utils/API";

export const getUserGasRewards = (dispatch, loyaltyNumber) => {
	const requestPromise = API.getUserGasRewardsFromServer(loyaltyNumber);
	dispatch({
		type: FETCH_GAS_REWARDS,
		payload: requestPromise
	});
};
