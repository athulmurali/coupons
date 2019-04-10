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
	neServerHost: "innovationq.aholdusa.com",
	svgContainerHeight: 170,
	storeNumber: 554,
	brand: "SS",
	https: false,
};

const devSize = size => size / 8;

const maxLenghtOfTextBoxInUserIdentification = 12;

const constants = {
	TOP_LEFT_CORNER: "top_left",
	TOP_RIGHT_CORNER: "top_right",
	BOTTOM_LEFT_CORNER: "bottom_left",
	BOTTOM_RIGHT_CORNER: "bottom_right",
	INACTIVE_USER_IDENTIFICATION: 15000,   // in ms
	LOGOUT_TIMER: 30000,						// in seconds
	ATTRACT_LOOP_SLIDE_DURATION: 3000,  // in milli-seconds
	MINIMUM_SEARCH_LENGTH: 3 //characters count for triggering the api
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



export const SORT_ORDERS = Object.freeze({
	ASC: "asc",
	DESC: "desc"
});

export const SORT_CATEGORIES = [
	{
		displayName: "Redeem By Date",
		sortBy: "expirationDate",
		sortOrder: SORT_ORDERS.ASC
	},
	{
		displayName: "Value(Low to High)",
		sortBy: "price",
		sortOrder: SORT_ORDERS.ASC
	},
	{
		displayName: "Value(High to Low)",
		sortBy: "price",
		sortOrder: SORT_ORDERS.DESC
	},
	{
		displayName: "Brand",
		sortBy: "name",
		sortOrder: SORT_ORDERS.ASC
	},

];


export const CouponsTypeEnum = Object.freeze({LOADED: "LOADED", ALL: "ALL"});
export const DEFAULT_SORT = SORT_CATEGORIES[0];
export const LOADED_DEFAULT = false;
export const SEARCH_FIELD_NAMES = ["name","description"];
export const RESTART_TIMER_EVENTS = [ "click","keydown","touchstart","touchend","scroll"];
// In milliSeconds
export const COUNTER = {
	COUNT_DOWN_PROMPT: {
		name: "COUNT_DOWN_PROMPT",
		duration: 30000
	},
	COUNT_DOWN_LOGOUT: {
		name: "COUNT_DOWN_LOGOUT",
		duration: 20000
		// Make sure to update css class .bar in DisplayCoupons.css whenever you update the above,
		// the progress bar takes time in seconds and
		// should be set to the above duration but in seconds for animation
	},
	COUNT_DOWN_REDIRECT: {
		name: "COUNT_DOWN_REDIRECT",
		duration: 3000
	}
};
export const ERROR_MSG_VALIDATION = "Not a valid number! Please re enter";
export const ERROR_MSG_BARCODE_INVALID = "Error! Invalid Barcode Scanned !";
export const ERROR_MSG_INVALID_INPUT = "Error! Invalid phone number or barcode!";
