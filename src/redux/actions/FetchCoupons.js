import {FETCH_COUPONS} from "../reducers/SortFilterReducer";
import {getCoupons} from "../../utils/services/test";

export const fetchCouponsFromServer=(dispatch,searchParams,filterParams,sortParams)=>{

    const getCouponsPromise = getCoupons(searchParams,filterParams,sortParams)


    dispatch (
        {
            type:FETCH_COUPONS,
            payload : getCouponsPromise
        }
    )

}