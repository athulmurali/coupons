import {I_AM_HERE, SIGN_ME_OUT, START_TIMER} from "../reducers/TimerReducer";

export const startTimer=(dispatch)=>dispatch({type : START_TIMER});
export const iAmHere=(dispatch)=>dispatch({type : I_AM_HERE});
export const signMeOut=(dispatch)=>dispatch({type : SIGN_ME_OUT});
