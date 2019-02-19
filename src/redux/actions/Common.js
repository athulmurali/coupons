import {RESET} from "../reducers/DisplayCouponReducer";

export const reset_all_redux=(dispatch)=>{
    return dispatch({
        type : RESET
    })
}