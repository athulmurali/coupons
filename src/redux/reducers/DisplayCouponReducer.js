export const UPDATE_DISPLAY_COUPON_STATE  = "UPDATE_DISPLAY_COUPON_STATE";
export const RESET = "RESET";

const initialState = {
	searchedCouponName : "",
	searchedCouponsLength: ""
};



const DisplayCouponStateUpdate = (state = initialState, action)=>{

	switch (action.type) {
		
	case "UPDATE_DISPLAY_COUPON_STATE" :  return {
		...state,...action.payload
	};

	case RESET : return {
		...initialState
	};

	default : return state;

	}

};


export default  DisplayCouponStateUpdate;