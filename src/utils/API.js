import axios from "axios";
import Config from "./../config/config";
import {processQueryParams} from "./utils";


const http = Config.https ? "https" : "http";
const getUserDetails = (barcodeNumber,type) => {
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/customer/v1/fetch/`+barcodeNumber;
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

 function getCouponsWithFilters (searchParams, filterParams, sortParams, loadedParams,loyaltyNumber = null)  {

	// cancel the previous request

	if (typeof this._source !== typeof undefined) {
		this._source.cancel('Operation canceled due to new request.')
	}

	// save the new request for cancellation
	this._source = axios.CancelToken.source();


	const queryParams = {
		...filterParams,
		...loadedParams
	};
	const processedQueryParams = processQueryParams(queryParams);
	const allCouponsUrl = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/user/${Config.storeNumber}/${loyaltyNumber}/`;

	const loadedCouponsUrl = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/loaded/user/${Config.storeNumber}/${loyaltyNumber}/`;
	if (loadedParams.loaded){

		return  axios.get(loadedCouponsUrl, {
		cancelToken: this._source.token,

			params : {
				...processedQueryParams
			}
		});
	}
	return  axios.get(allCouponsUrl, {

		cancelToken: this._source.token,
		params : {
			...processedQueryParams
		}
	});
};

const getCategoriesFromServer=()=>{

	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/categories`;
	return  axios.get(url);

};

const loadCoupon=(loyaltyNumber=null, couponId=null, loadType=null )=>{
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/${loyaltyNumber}/load/${loadType}/${couponId}/`;

	return  axios.put(url);
};

const API = {
	getUserDetails,
	getUserCoupons,
	getCouponsWithFilters,
	getCategoriesFromServer,
	loadCoupon
};

export default API;