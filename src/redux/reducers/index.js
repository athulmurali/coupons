import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import SearchSortFilterReducer from "./SearchSortFilterReducer";
import DisplayCouponsReducer from "./DisplayCouponReducer";


const combinedReducers = combineReducers({  AssistanceReducer,SearchSortFilterReducer,DisplayCouponsReducer});
export default  combinedReducers