import API from "../../utils/API";

import {LOGIN_BARCODE} from "../reducers/LoginReducer";

export const loginSuccess=(dispatch,barcodeNumber)=>{
	const getDetails = API.getUserDetails(barcodeNumber, null)
	dispatch({
		type: LOGIN_BARCODE,
		payload : getDetails
	})
}