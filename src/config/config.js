import {SORT_ODERS} from "../redux/constants";

const env = {
	environment: "dev", // options: dev, prod
	device: "kisok", // options: mobile, kiosk
	kioskType: "ipad", // options: ipad, standup, phone
	client: {
		host: window.location.hostname,
		port: window.location.port,
	},
	server: {
		host: window.location.hostname,
		port: "3000",
	},
	currentAI: "LUIS",
	neServerPort: "3526",
	neServerHost: "innovationd.aholdusa.com",
	svgContainerHeight: 170,
	storeNumber: 0,
	brand: "GL",
	https: false,
};

const devSize = size => size / 8;

const maxLenghtOfTextBoxInUserIdentification = 12;

const constants = {
	TOP_LEFT_CORNER: "top_left",
	TOP_RIGHT_CORNER: "top_right",
	BOTTOM_LEFT_CORNER: "bottom_left",
	BOTTOM_RIGHT_CORNER: "bottom_right",
	INACTIVE_USER_IDENTIFICATION: 15,   // in seconds
	POPUPTIMER: 20,						// in seconds
	LOGOUTTIMER: 30,						// in seconds
	ATTRACT_LOOP_SLIDE_DURATION: 3000,  // in milli-seconds


	MINIMUM_SEARCH_LENGTH  : 3 //characters count for triggering the api
};



let config = {
	...env,
	...constants,
	maxLenghtOfTextBoxInUserIdentification,
	screen: {
		width: env.device === "kiosk" ? devSize(2156) : window.innerWidth,
		height: env.device === "kiosk" ? devSize(3840) : window.innerHeight,
	},
	departments: ["produce", "dairy", "meat", "fish", "bakery", "deli"],
	searchSize: 20,
	loggedIn: false,
	blacklist: ["ahold", "delhaize", "own", "brands"],
	blacklistedSearchChars: ["%", "\\", "/", "*", "\"", "[", "]", "{", "}", "(", ")", "'"],
};

export default config;


export const FILTER_CATEGORIES = ["Bakery,Beverages","Breakfast","Condiments & Sauces","Dairy","Ethnic Products",
"Frozen Food","Soups & Canned Goods" ,
"Snacks","Pet Care","Personal Care","Meat & Seafood","Household","Health & Wellness"]

export const SORT_CATEGORIES = [
	{
		displayName : 'Redeem By Date',
		sortBy      : 'expirationDate',
		sortOrder   : SORT_ODERS.ASC
	},
	{
		displayName : 'Value(Low to High)',
		sortBy      : 'price',
		sortOrder   : SORT_ODERS.ASC
	},
	{
		displayName : 'Value(High to Low)',
		sortBy      : 'price',
		sortOrder   : SORT_ODERS.DESC
	},
	{
		displayName : 'Brand',
		sortBy      : 'name',
		sortOrder   : SORT_ODERS.ASC
	},

];


export const CouponsTypeEnum = Object.freeze({LOADED: "LOADED", ALL: "ALL"});
