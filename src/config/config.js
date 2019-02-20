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


export const FILTER_CATEGORIES = [
	{
		displayName: "Baby & ChildCare",
		sequenceNumber: 0,
		name: "Baby & ChildCare"
	}, {
		displayName: "Bakery",
		sequenceNumber: 1,
		name: "Bakery"
	},
	{
		displayName: "Beverages ",
		sequenceNumber: 2,
		name: "Beverages"
	}, {
		displayName: "Breakfast ",
		sequenceNumber: 3,
		name: "Breakfast"
	}, {
		displayName: "Condiments & Sauces",
		sequenceNumber: 4,
		name: "Condiments & Sauces"
	},
	{
		displayName: "Dairy",
		sequenceNumber: 5,
		name: "Dairy"
	}, {
		displayName: "Ethnic Products",
		sequenceNumber: 6,
		name: "Ethnic Products"
	},
	{
		displayName: "Frozen Food",
		sequenceNumber: 7,
		name: "Frozen Food"
	},
	{
		displayName: "Health & Wellness",
		sequenceNumber: 8,
		name: "Health & Wellness"
	},
	{
		displayName: "Household",
		sequenceNumber: 9,
		name: "Household"
	},


	{
		displayName: "Meat & Seafood",
		sequenceNumber: 10,
		name: "Meat & Seafood"
	},
	{
		displayName: "Personal Care",
		sequenceNumber: 11,
		name: "Personal Care"
	}, {
		displayName: "Pet Care",
		sequenceNumber: 12,
		name: "Pet Care"
	},
	{
		displayName: "Snacks",
		sequenceNumber: 13,
		name: "Snacks"
	},
	{
		displayName: "Soups & Canned Goods",
		sequenceNumber: 14,
		name: "Soups & Canned Goods"
	}
];
const SORT_ORDERS = Object.freeze({
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
