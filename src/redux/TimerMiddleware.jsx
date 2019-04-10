import {promptToLogOut, redirectToHome, setTimerObj, showLogoutSuccess} from "./actions/Timer";
import {DEL_TIMER_OBJ, LOG_OUT_SUCCESS, PROMPT_LOGOUT, START_TIMER, STOP_TIMER} from "./reducers/TimerReducer";
import {COUNTER} from "../config/config";

const TimerMiddleware = store => next => action => {

	const dispatch = store.dispatch;
	const  currentTimerObj = store.getState().TimerReducer.timerObj;
	const currentStageName = store.getState().TimerReducer.currentStageName;
	switch (action.type) {

		case STOP_TIMER:{
			action.type=DEL_TIMER_OBJ;
			break;
		}
		case START_TIMER : 	{

			if (currentStageName === COUNTER.COUNT_DOWN_REDIRECT.name)
				break;
			else{
				clearTimeout(currentTimerObj);
				const timerId = setTimeout( () => promptToLogOut(dispatch), COUNTER.COUNT_DOWN_PROMPT.duration);
				const nextStage = COUNTER.COUNT_DOWN_PROMPT.name;
				setTimerObj(dispatch,timerId,nextStage);
				break;
			}
		}
		case PROMPT_LOGOUT:
		{
			clearTimeout(currentTimerObj);
			const timerId = setTimeout( () => showLogoutSuccess(dispatch),COUNTER.COUNT_DOWN_LOGOUT.duration);
			const nextStage = COUNTER.COUNT_DOWN_LOGOUT.name;
			setTimerObj(dispatch,timerId,nextStage);
			break;
		}
		case LOG_OUT_SUCCESS :
		{
			clearTimeout(currentTimerObj);
			const timerId = setTimeout( () => redirectToHome(dispatch), COUNTER.COUNT_DOWN_REDIRECT.duration);
			const nextStage = COUNTER.COUNT_DOWN_REDIRECT.name;
			setTimerObj(dispatch,timerId,nextStage);
			break;

		}
		default:
			break;
	}
	next(action);

};






export default TimerMiddleware
