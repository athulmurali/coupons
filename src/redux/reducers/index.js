import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import UserIdentification from "./UserIdentification";
import DisplayCouponStateUpdate from "./DisplayCouponReducer";

const combinedReducers = combineReducers({  AssistanceReducer,UserIdentification, DisplayCouponStateUpdate});
export default  combinedReducers;