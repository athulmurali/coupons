import {RESET} from "./DisplayCouponReducer";

export const LOGIN_BARCODE ='LOGIN_BARCODE';

export const LOGIN_BARCODE_PENDING = LOGIN_BARCODE + '_PENDING';
export const LOGIN_BARCODE_FULFILLED = LOGIN_BARCODE + '_FULFILLED';
export const LOGIN_BARCODE_REJECTED = LOGIN_BARCODE + '_REJECTED';
export const CLEAR_LOGIN_ERROR = "CLEAR_LOGIN_ERROR";

const initialState = {
	loginResult : null,
	isLoading : false,
	error: false
};

const LoginReducer = (state = initialState, action) => {

	switch (action.type) {
		case RESET :
			return {
				...initialState
			};



		case LOGIN_BARCODE_PENDING : {
			return {
				...state,
				isLoading: true
			};
		}

		case LOGIN_BARCODE_REJECTED : {
			return {
				...state,
				isLoading: false,
				error : action.payload.message
			};
		}

		case  CLEAR_LOGIN_ERROR :
			return {
				...state,
				error: false
			};


		case LOGIN_BARCODE_FULFILLED : {

			return {
				...state,
				isLoading: false,
				loginResult: action.payload.data.response
			};
		}
		default             :
			return {...state};
	}
};

export default LoginReducer;
