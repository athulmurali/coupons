import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import UserIdentification from "./UserIdentification";
import SearchSortFilterReducer from "./SearchSortFilterReducer";


const combinedReducers = combineReducers({  AssistanceReducer,UserIdentification,SearchSortFilterReducer});
export default  combinedReducers