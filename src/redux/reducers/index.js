import {combineReducers} from "redux";
import AssistanceReducer from "./AssistanceReducer";
import UserIdentification from "./UserIdentification";


const combinedReducers = combineReducers({  AssistanceReducer,UserIdentification});
export default  combinedReducers