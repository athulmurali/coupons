import {
	LOG_OUT_SUCCESS,
	PROMPT_LOGOUT,
	REDIRECT_TO_HOME,
	SET_TIMER_OBJ,
	START_TIMER
} from "../reducers/TimerReducer";

export const startTimer=(dispatch)=>dispatch({type : START_TIMER});
export const signMeOut=(dispatch)=>dispatch({type : LOG_OUT_SUCCESS});
export const setTimerObj = (dispatch, timerId,nextStageName) => {
	dispatch({
		type: SET_TIMER_OBJ,
		payload: {
			timerObj: timerId,
			nextStageName :nextStageName
		}
	});
};
export const promptToLogOut = (dispatch) => {
	dispatch({
		type: PROMPT_LOGOUT,
	});

};
export const showLogoutSuccess = (dispatch) => {
	dispatch({
		type: LOG_OUT_SUCCESS,
		payload: {
			duration: 5000
		}
	});

};
export const redirectToHome = (dispatch) => {
	dispatch({
		type: REDIRECT_TO_HOME
	});
};
