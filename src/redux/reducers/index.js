import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import UserIdentification from "./UserIdentification";
import SortFilterReducer from "./SortFilterReducer";


const combinedReducers = combineReducers({  AssistanceReducer,UserIdentification,SortFilterReducer});
export default  combinedReducers