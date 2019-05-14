export const FETCH_GAS_REWARDS = "FETCH_GAS_REWARDS";

export const FETCH_GAS_REWARDS_PENDING = FETCH_GAS_REWARDS + "_PENDING";
export const FETCH_GAS_REWARDS_FULFILLED = FETCH_GAS_REWARDS + "_FULFILLED";
export const FETCH_GAS_REWARDS_REJECTED = FETCH_GAS_REWARDS + "_REJECTED";

const initialState = {
	allCoupons: [],
	loadedCoupons: [],
	gasRewards: null,

};


/**
 *  gasRewards : Sample Response
 *  {
		"gasPoints": [
				{
				"id": "0",
				"type": "COPIENT",
				"balance": 7,
				"balanceToExpire": 7,
				"expirationDate": "2019-05-23",
				"rewardType": "POINTS"
				}
				],
				"calculatedRate": 0
	}

 */

const ExpiringCouponsReducer = (state = initialState, action) => {
	switch (action.type) {


		case FETCH_GAS_REWARDS_PENDING :
			return {
				...state, isLoading: true
			};

		case FETCH_GAS_REWARDS_REJECTED :
			return {
				...state, error: action.payload
			};

		//although the fieldName calculatedRate sounds like a percentage, it is value in dollars as a number
		// the field from the api response
		case FETCH_GAS_REWARDS_FULFILLED :
			return {
				...state,
				gasRewards: action.payload.data.calculatedRate
			};

		default:
			return {...state};

	}


};

export default ExpiringCouponsReducer;
