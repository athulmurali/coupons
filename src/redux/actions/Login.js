import API from "../../utils/API";

import {CLEAR_LOGIN_ERROR, LOGIN_BARCODE} from "../reducers/LoginReducer";

export const loginByBarcode=(dispatch, barcodeNumber)=>{
	const getDetails = API.getUserDetails(barcodeNumber, null);
	dispatch({
		type: LOGIN_BARCODE,
		payload : getDetails
	})
};

export const clearLoginError = (dispatch) => dispatch({type: CLEAR_LOGIN_ERROR});
