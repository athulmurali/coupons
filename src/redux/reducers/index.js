import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import SearchSortFilterReducer from "./SearchSortFilterReducer";
import DisplayCouponsReducer from "./DisplayCouponReducer";
import TimerReducer from "./TimerReducer";


const combinedReducers = combineReducers({  AssistanceReducer,SearchSortFilterReducer,DisplayCouponsReducer,TimerReducer});
export default  combinedReducers