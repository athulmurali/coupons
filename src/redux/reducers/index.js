import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import SearchSortFilterReducer from "./SearchSortFilterReducer";
import DisplayCouponsReducer from "./DisplayCouponReducer";
import LoginReducer from './LoginReducer';


const combinedReducers = combineReducers({  AssistanceReducer,SearchSortFilterReducer,DisplayCouponsReducer,LoginReducer});
export default  combinedReducers