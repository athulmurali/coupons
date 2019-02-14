import axios from "axios";
import Config from "./../config/config";

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


const API = {
	getMap,
	getUserDetails,
	getUserCoupons,
};

export default API;
