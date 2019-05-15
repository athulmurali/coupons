export const FETCH_GAS_REWARDS = "FETCH_GAS_REWARDS";

export const FETCH_GAS_REWARDS_PENDING = FETCH_GAS_REWARDS + "_PENDING";
export const FETCH_GAS_REWARDS_FULFILLED = FETCH_GAS_REWARDS + "_FULFILLED";
export const FETCH_GAS_REWARDS_REJECTED = FETCH_GAS_REWARDS + "_REJECTED";

export const FETCH_NEW_AND_LOADED_COUPONS = "FETCH_NEW_AND_LOADED_COUPONS";
export const FETCH_NEW_AND_LOADED_COUPONS_PENDING = FETCH_NEW_AND_LOADED_COUPONS + "_PENDING";
export const FETCH_NEW_AND_LOADED_COUPONS_FULFILLED = FETCH_NEW_AND_LOADED_COUPONS + "_FULFILLED";
export const FETCH_NEW_AND_LOADED_COUPONS_REJECTED = FETCH_NEW_AND_LOADED_COUPONS + "_REJECTED";

export const DIGITS_AFTER_DECIMAL = 2;

const initialState = {
	allCoupons: [],
	loadedCoupons: [],
	gasRewards: 0,
	totalSavings: 0,

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
				gasRewards: parseFloat(action.payload.data.calculatedRate).toFixed(DIGITS_AFTER_DECIMAL)
			};

		case FETCH_NEW_AND_LOADED_COUPONS_PENDING:
			return {
				...state, isLoading: true
			};

		case FETCH_NEW_AND_LOADED_COUPONS_FULFILLED:
			//this event expects an array of two objects
			// object @index 0 - all coupons or new coupons
			// object @index 1 - loaded coupons

			const newCoupons = action.payload[0].data;
			const loadedCoupons = action.payload[1].data;

			const newCouponsSavings = newCoupons.reduce((accVal, coupon) => accVal + coupon.price, 0);
			const loadedCouponsSavings = loadedCoupons.reduce((accVal, coupon) => accVal + coupon.price, 0);
			return {
				...state,
				totalSavings: parseFloat(newCouponsSavings + loadedCouponsSavings).toFixed(DIGITS_AFTER_DECIMAL),
			};

		default:
			return {...state};

	}


};

export default ExpiringCouponsReducer;
