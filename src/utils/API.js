import axios from "axios";
import Config from "./../config/config";

const http = Config.https ? "https" : "http";

const getMap = (storeNo = Config.storeNumber) => {
	// eslint-disable-next-line indent
  const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/customer/fetchCustomer/`;
	return axios.get(url, { timeout: Config.timeoutLength });
};
const getUserMobileNumber = (mobileNumber) => {
	const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/couponServer/customer/fetchCustomer/`+mobileNumber;
	
	return axios.get(url);
};

const API = {
	getMap,
	getUserMobileNumber,
};

export default API;
