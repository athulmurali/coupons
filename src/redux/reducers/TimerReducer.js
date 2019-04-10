import {RESET} from "./DisplayCouponReducer";

export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const SET_TIMER_OBJ = "SET_TIMER_OBJ";
export const DEL_TIMER_OBJ = "DEL_TIMER_OBJ";
export const PROMPT_LOGOUT = "PROMPT_LOGOUT";
export const REDIRECT_TO_HOME = "REDIRECT_TO_HOME";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";


const initialState = {

	showLogOutPrompt: false,
	showLogOutSuccess: false,

	isTimedOut: false,
	timerObj: null,
	currentStageName: null


};


const TimerReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_TIMER_OBJ: {
			return {
				...initialState,
				timerObj: action.payload.timerObj,
				currentStageName: action.payload.nextStageName
			};
		}
		case PROMPT_LOGOUT : {
			return {
				...state,
				showLogOutPrompt: true
			};
		}
		case LOG_OUT_SUCCESS: {
			return {
				...state,
				showLogOutPrompt: false,
				showLogOutSuccess: true,
			};

		}
		case REDIRECT_TO_HOME: {
			return {
				...state,
				isTimedOut: true,
				showLogOutPrompt: false,
				showLogOutSuccess: false
			};
		}
		case RESET : {
			// since 0 is a possible value  for timerObj ,  !!state.timerObj or it is equivalents cannot be used.
			state.timerObj != null && clearTimeout(state.timerObj);
			return {
				...initialState
			};
		}
		default:{
			return {...state};
		}
	}

};

export default TimerReducer;
