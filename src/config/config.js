const env = {
	environment: "dev", // options: dev, prod
	device: "mobile", // options: mobile, kiosk
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
	// neServerPort: '',
	neServerPort: "3526",
	neServerHost: "innovationd.aholdusa.com",
	// neServerHost: '169.55.109.83',
	// neServerHost: '161.247.64.6',
	// neServerHost: '10.177.134.154',
	svgContainerHeight: 170,
	storeNumber: 0,
	brand: "GL",
	https: false,
};

const slideDuration = {
	duration: 5000
};

const devSize = size => size / 8;

const constants = {
	TOP_LEFT_CORNER: "top_left",
	TOP_RIGHT_CORNER: "top_right",
	BOTTOM_LEFT_CORNER: "bottom_left",
	BOTTOM_RIGHT_CORNER: "bottom_right",
	INACTIVE_USER_IDENTIFICATION: 10,   // in seconds
	COUPONS_POPUP_TIMER: 10,						// in seconds
	COUPONS_LOGOUT_TIMER: 20,						// in seconds
	ATTRACT_LOOP_SLIDE_DURATION: 3000,  // in milli-seconds
};

const config = {
	...env,
	...constants,
	screen: {
		width: env.device === "kiosk" ? devSize(2156) : window.innerWidth,
		height: env.device === "kiosk" ? devSize(3840) : window.innerHeight,
	},
	resetTime: 60, // If this is 0 then the screen will never go back to the attract screen
	timeoutLength: 60000,
	departments: ["produce", "dairy", "meat", "fish", "bakery", "deli"],
	numberOfAisles: 35,
	searchSize: 20,
	overscanCount: 5,
	blacklist: ["ahold", "delhaize", "own", "brands"],
	blacklistedSearchChars: ["%", "\\", "/", "*", "\"", "[", "]", "{", "}", "(", ")", "'"],
	filters: [
		{
			alias: "Aisles",
			departments: [
				"grocery",
				"dsd",
				"hbc",
				"pet",
				"general",
				"natural",
				"ethnic",
				"seasonal",
				"beauty",
				"health",
				"baby",
				"household",
				"caps",
			],
			aisles: [],
		},
		{
			alias: "Dairy",
			departments: ["dairy"],
			aisles: ["dairy"],
		},
		{
			alias: "Frozen",
			departments: ["frozen"],
			aisles: ["frozen"],
		},
		{
			alias: "Meat",
			departments: ["meat"],
			aisles: ["meat"],
		},
		{
			alias: "Deli",
			departments: ["deli"],
			aisles: ["deli"],
		},
		{
			alias: "Produce",
			departments: ["produce"],
			aisles: ["produce"],
		},
		{
			alias: "Seafood",
			departments: ["seafood"],
			aisles: ["seafood"],
		},
		{
			alias: "Front end",
			departments: ["font end", "racks"],
			aisles: ["mainline", "front end"],
		},
		{
			alias: "Bakery",
			departments: ["bakery"],
			aisles: ["bakery"],
		},
	],
};

export default config;
