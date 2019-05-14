import axios from "axios";
import Config from "./../config/config";
import {processQueryParams} from "./utils";


const http = Config.https ? "https" : "http";
const getUserDetailsByBarcode = (barcodeWithoutCheckSum) => {
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/customer/v1/fetch/` + barcodeWithoutCheckSum;
	return axios.get(url);
};

// The default loyalty number must be removed once the authentication issue in the backend is fixed
// This is just a temporary fix

function getCouponsWithFilters(filterParams, loadedParams, loyaltyNumber) {
	// cancel the previous request
	if (typeof this._source !== typeof undefined) {
		this._source.cancel("Operation canceled due to new request.");
	}

	// save the new request for cancellation
	this._source = axios.CancelToken.source();

	const queryParams = {
		...filterParams,
	};
	const processedQueryParams = processQueryParams(queryParams);

	const config = {
		cancelToken: this._source.token,
		params: {
			...processedQueryParams
		}
	};
	const allCouponsUrl = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/user/${Config.storeNumber}/${loyaltyNumber}/`;

	const loadedCouponsUrl = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/loaded/user/${Config.storeNumber}/${loyaltyNumber}/`;
	if (loadedParams.loaded) {

		return axios.get(loadedCouponsUrl, {...config});
	}
	return axios.get(allCouponsUrl, {...config});
}

const getCategoriesFromServer = () => {

	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/categories`;
	return axios.get(url);

};

const loadCoupon = (loyaltyNumber = null, couponId = null, loadType = null) => {
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/coupons/${loyaltyNumber}/load/${loadType}/${couponId}/`;

	return axios.put(url);
};

const getUserGasRewardsFromServer = (loyaltyNumber = null) => {
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/rewards/gas/${Config.storeNumber}/${loyaltyNumber}`;
	return axios.get(url);
};

const API = {
	getUserDetails: getUserDetailsByBarcode,
	getCouponsWithFilters,
	getCategoriesFromServer,
	loadCoupon,
	getUserGasRewardsFromServer,
};

export default API;
