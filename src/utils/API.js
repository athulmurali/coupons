import axios from "axios";
import Config from "./../config/config";
import {processQueryParams} from "./utils";

const http = Config.https ? "https" : "http";

const getMap = (storeNo = Config.storeNumber) => {
	// eslint-disable-next-line indent
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/customer/fetchCustomer/`;
	return axios.get(url, { timeout: Config.timeoutLength });
};
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

const getCouponsWithFilters =  (searchParams, filterParams, sortParams, loadedParams,loyaltyNumber = null,storeId= "0478") => {
	const queryParams = {
		...filterParams,
		...loadedParams
	};
	const processedQueryParams = processQueryParams(queryParams);
	const allCouponsUrl = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/user/${storeId}/${loyaltyNumber}/`;

	const loadedCouponsUrl = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/loaded/user/${storeId}/${loyaltyNumber}/`;
	if (loadedParams.loaded){

		return  axios.get(loadedCouponsUrl, {

			params : {
				...processedQueryParams
			}
		});
	}
	return  axios.get(allCouponsUrl, {

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
	getMap,
	getUserDetails,
	getUserCoupons,
	getCouponsWithFilters,
	getCategoriesFromServer,
	loadCoupon
};

export default API;