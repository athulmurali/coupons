export const START_TIMER = "START_TIMER";

export const TOGGLE_LOG_OUT_SUCCESS = "TOGGLE_LOG_OUT_SUCCESS";
export const PROMPT_LOG_OUT = "PROMPT_LOG_OUT";
export const LOG_OUT = "LOG_OUT";
export const I_AM_HERE = "I_AM_HERE";

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

const TIMER_DURATION = {

	// Wait time for the pop up to show up
	LOGGED_OUT_POP_UP: 20000,

	//  time Duration for the log out success screen to stay
	LOG_OUT_PROMPT: 200000
};


export const COUNT_DOWN_DURATION ={
	COUNT_DOWN_PROMPT : {
		name : 'COUNT_DOWN_PROMPT',
		duration : 10000
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
	stage : COUNT_DOWN_DURATION.COUNT_DOWN_PROMPT.name,
	countDown: COUNT_DOWN_DURATION.COUNT_DOWN_PROMPT.duration,
	showLogOutPrompt: false,
	showLogOutSuccess: false,

	intervalObj : null


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
				stage : COUNT_DOWN_DURATION.COUNT_DOWN_REDIRECT.name,
				countDown : COUNT_DOWN_DURATION.COUNT_DOWN_REDIRECT.duration,
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
					case COUNT_DOWN_DURATION.COUNT_DOWN_PROMPT.name:
						return {
							...state,
							intervalObj : null,
							status : TIMER_STATUS.START,
							stage: COUNT_DOWN_DURATION.COUNT_DOWN_LOGOUT.name,
							countDown : COUNT_DOWN_DURATION.COUNT_DOWN_LOGOUT.duration,
							showLogOutPrompt: false,
							showLogOutSuccess:true,
						}

					case COUNT_DOWN_DURATION.COUNT_DOWN_LOGOUT.name :

						return {
							...state,
							intervalObj : null,
							status : TIMER_STATUS.START,
							stage: COUNT_DOWN_DURATION.COUNT_DOWN_REDIRECT.name,
							countDown : COUNT_DOWN_DURATION.COUNT_DOWN_REDIRECT.duration
						};

					case COUNT_DOWN_DURATION.COUNT_DOWN_REDIRECT.name :
						alert("Redirecting to main screen ")
						return {
							...state,
							intervalObj : null,
							status : TIMER_STATUS.STOP,
							countDown : COUNT_DOWN_DURATION.COUNT_DOWN_REDIRECT.duration
						};

					default :
						alert("Something broke bro ! ")
						return {...initialState,}

					}

			}




		}



		// All the following events resets to the initial state
		case I_AM_HERE :
		case CLOSE_LOG_OUT_PROMPT:
		default:
			return {...initialState,status :START_TIMER};
	}

};

export default TimerReducer;