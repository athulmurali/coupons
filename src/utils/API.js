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
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/customer/fetchBarcode/`+barcodeNumber;
	
	return axios.get(url);
};


const API = {
	getMap,
	getUserDetails,
	getUserCoupons,
};

export default API;
