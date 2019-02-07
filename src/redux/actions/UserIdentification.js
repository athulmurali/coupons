import {UPDATE_COUPON_DETAILS} from "../reducers/UserIdentification";

export const updateCoupons =(dispatch, fieldAndValueObject)=>dispatch({
    type : UPDATE_COUPON_DETAILS,
    payload : fieldAndValueObject
})

