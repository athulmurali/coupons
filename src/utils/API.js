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

// const getSearchItem = (keyword, page, category, count = Config.searchSize) => {
//   let url = null;
//   if (category) {
//     url = `${http}://${Config.neServerHost}:${Config.neServerPort}/findit/api/product/search/${
//       Config.storeNumber
//     }/${page}/${count}/${keyword}/${category}`;
//   } else {
//     url = `${http}://${Config.neServerHost}:${Config.neServerPort}/findit/api/product/search/${
//       Config.storeNumber
//     }/${page}/${count}/${keyword}`;
//   }
//   return axios.get(url, {
//     timeout: Config.timeoutLength,
//   });
// };

// const getItemDetails = (upc) => {
//   const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/findit/api/product/getByUPC/${Config.storeNumber}/${upc}`;
//   return axios.get(url, { timeout: Config.timeoutLength });
// };

// const getImages = ids =>
//   axios.get(`${http}://${Config.neServerHost}:${Config.neServerPort}/findit/api/image/getByIds/${ids}`);

// const getPopularItems = (storeNumber = Config.storeNumber) => {
//   const url = `${http}://${Config.neServerHost}:${Config.neServerPort}/findit/api/product/getPopularItems/
//   ${storeNumber}`;

//   return axios.get(url, { timeout: Config.timeoutLength });
// };

// const recordTime = (storeNumber, time) =>
//   axios.post(`${http}://${Config.neServerHost}:${Config.neServerPort}/findit/api/stats/recordTime`, {
//     storeNumber,
//     time,
//   });

// const analyzeAudio = (file, confg) =>
//   axios.post(
//     `${http}://${Config.neServerHost}:${Config.neServerPort}/findit/api/product/voice/search`,
//     file,
//     confg,
//   );

const API = {
	getMap,
	getUserMobileNumber,
	// getItemDetails,
	// getImages,
	// getPopularItems,
	// recordTime,
	// analyzeAudio,
};

export default API;
