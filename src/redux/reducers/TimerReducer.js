import {RESET} from "./DisplayCouponReducer";

export const START_TIMER = "START_TIMER";

export const TOGGLE_LOG_OUT_SUCCESS = "TOGGLE_LOG_OUT_SUCCESS";
export const PROMPT_LOG_OUT = "PROMPT_LOG_OUT";
export const I_AM_HERE = "I_AM_HERE";
export const SIGN_ME_OUT = "SIGN_ME_OUT";

export const CLOSE_LOG_OUT_PROMPT = "CLOSE_LOG_OUT_PROMPT";
export const CLOSE_LOGGED_OUT_POP_UP = "CLOSE_LOGGED_OUT_POP_UP";

export const SET_INTERVAL_OBJ = "SET_INTERVAL_OBJ"
export const COUNT_DOWN = "COUNT_DOWN";
// In milliSeconds

export const COUNT_DOWN_INTERVAL = 1000;

export const TIMER_STATUS = {
	COUNT_DOWN: "COUNT_DOWN",
	START: "START",
	STOP : "STOP"
};

export const COUNTER ={
	COUNT_DOWN_PROMPT : {
		name : 'COUNT_DOWN_PROMPT',
		duration : 5000
	},
	COUNT_DOWN_LOGOUT: {
		name : 'COUNT_DOWN_LOGOUT',
		duration : 10000
	},
	COUNT_DOWN_REDIRECT :{
		name : 'COUNT_DOWN_REDIRECT',
		duration :  3000
	}
}

const initialState = {

	status : TIMER_STATUS.STOP,
	stage : COUNTER.COUNT_DOWN_PROMPT.name,
	countDown: COUNTER.COUNT_DOWN_PROMPT.duration,
	showLogOutPrompt: false,
	showLogOutSuccess: false,

	intervalObj : null,
	isTimedOut : false


};

const TimerReducer = (state = initialState, action) => {
	switch (action.type) {


		case START_TIMER : return {
			...initialState,
			status : TIMER_STATUS.START
		}

		case SET_INTERVAL_OBJ :return {
			...state,
			intervalObj : action.payload.intervalObj,
			status: TIMER_STATUS.COUNT_DOWN
		}


		case PROMPT_LOG_OUT :
			return {state,
				showLogOutPrompt: false,
				showLogOutSuccess:true,
				stage : COUNTER.COUNT_DOWN_REDIRECT.name,
				countDown : COUNTER.COUNT_DOWN_REDIRECT.duration,
				status : TIMER_STATUS.START

			};

		case TOGGLE_LOG_OUT_SUCCESS :
			return {...state, showLogOutSuccess: !state.showLogOutSuccess};



		case COUNT_DOWN : {

			const decrementBy = action.payload.decrementBy;
			console.log({countDown : state.countDown >0 ? state.countDown - decrementBy : state.countDown})
			if (state.countDown > 0)
			{
				return {
					...state,
					countDown : state.countDown - decrementBy,
					status :  TIMER_STATUS.STOP

				}
			}

			else{
				clearInterval(state.intervalObj);

				switch (state.stage) {
					case COUNTER.COUNT_DOWN_PROMPT.name:
						return {
							...state,
							intervalObj : null,
							status : TIMER_STATUS.START,
							stage: COUNTER.COUNT_DOWN_LOGOUT.name,
							countDown : COUNTER.COUNT_DOWN_LOGOUT.duration,
							showLogOutPrompt: true,
							showLogOutSuccess:false,
						}

					case COUNTER.COUNT_DOWN_LOGOUT.name :

						return {
							...state,
							intervalObj : null,
							status : TIMER_STATUS.START,
							stage: COUNTER.COUNT_DOWN_REDIRECT.name,
							countDown : COUNTER.COUNT_DOWN_REDIRECT.duration,
							showLogOutPrompt: false,
							showLogOutSuccess:true
						};

					case COUNTER.COUNT_DOWN_REDIRECT.name :
						return {
							...state,
							intervalObj : null,
							status : TIMER_STATUS.STOP,
							countDown : COUNTER.COUNT_DOWN_REDIRECT.duration,
							showLogOutPrompt: false,
							showLogOutSuccess:false,
							isTimedOut : true
						};

					default :
						alert("Something broke bro ! ")
						return {...initialState}

					}

			}




		}

		case SIGN_ME_OUT : {
			return {
				...state,
				countDown : 0,
				stage : COUNTER.COUNT_DOWN_LOGOUT.name
			}
		}

		case RESET :return {
			...initialState
		}


		// All the following events resets to the initial state
		case I_AM_HERE :
		case CLOSE_LOG_OUT_PROMPT:
		default:
			clearInterval(state.intervalObj);
			return {...initialState,status :TIMER_STATUS.START};
	}

};

export default TimerReducer;
