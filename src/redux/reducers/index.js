import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import SearchSortFilterReducer from "./SearchSortFilterReducer";
import DisplayCouponsReducer from "./DisplayCouponReducer";
import TimerReducer from "./TimerReducer";
import LoginReducer from "./LoginReducer";
import LoadCouponReducer from "./LoadCouponReducer";


const combinedReducers = combineReducers({
	AssistanceReducer,
	SearchSortFilterReducer,
	DisplayCouponsReducer,
	LoginReducer,
	TimerReducer,
	LoadCouponReducer
});
export default  combinedReducers
