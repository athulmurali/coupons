import {FETCH_COUPONS} from "../reducers/SortFilterReducer";
import {getCoupons} from "../../utils/services/test";

export const fetchCouponsFromServer=(dispatch)=>{
    dispatch (

        {
            type:FETCH_COUPONS,
            payload : getCoupons
        }
    )

}