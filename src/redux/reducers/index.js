import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import SearchSortFilterReducer from "./SearchSortFilterReducer";
import DisplayCouponsReducer from "./DisplayCouponReducer";
import TimerReducer from "./TimerReducer";
import LoginReducer from "./LoginReducer";
import LoadCouponReducer from "./LoadCouponReducer";
import ExpiringCouponsReducer from "./ExpiringCouponsReducer";


const combinedReducers = combineReducers({
	AssistanceReducer,
	SearchSortFilterReducer,
	DisplayCouponsReducer,
	LoginReducer,
	TimerReducer,
	LoadCouponReducer,
	ExpiringCouponsReducer
});
export default  combinedReducers
