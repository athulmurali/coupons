import axios from "axios";
import Config from "./../config/config";
import {processQueryParams} from "./utils";

const http = Config.https ? "https" : "http";

const getMap = (storeNo = Config.storeNumber) => {
	// eslint-disable-next-line indent
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/customer/fetchCustomer/`;
	return axios.get(url, { timeout: Config.timeoutLength });
};
const getUserDetails = (barcodeNumber) => {
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/customer/fetch/`+barcodeNumber;

	return axios.get(url);
};
const getUserCoupons = (barcodeNumber) => {
	//change in the api , hence barcode parameter will not be used
	//to be changed to new a function in the  later build
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/fetchCouponsByFilter`;

	return axios.get(url);
};

// The default loyalty number must be removed once the authentication issue in the backend is fixed
// This is just a temporary fix

const getCouponsWithFilters =  (searchParams, filterParams, sortParams, loadedParams,loyaltyNumber = 2212634049593,storeId= '0478') => {
	const queryParams = {
		...filterParams,
		...loadedParams
	};
	const processedQueryParams = processQueryParams(queryParams)
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/user/${storeId}/${loyaltyNumber}/`;

	return  axios.get(url, {

		params : {
			...processedQueryParams
		}
	})
}

const getCategoriesFromServer=()=>{

	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/categories`;

	return  axios.get(url)

};

const API = {
	getMap,
	getUserDetails,
	getUserCoupons,
	getCouponsWithFilters,
	getCategoriesFromServer
};

export default API;