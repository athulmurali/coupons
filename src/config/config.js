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
	neServerPort: "3526",
	neServerHost: "innovationd.aholdusa.com",
	svgContainerHeight: 170,
	storeNumber: 0,
	brand: "GL",
	https: false,
};

const devSize = size => size / 8;

const constants = {
	TOP_LEFT_CORNER: "top_left",
	TOP_RIGHT_CORNER: "top_right",
	BOTTOM_LEFT_CORNER: "bottom_left",
	BOTTOM_RIGHT_CORNER: "bottom_right",
	INACTIVE_USER_IDENTIFICATION: 15,   // in seconds
	POPUPTIMER: 1000,						// in seconds
	LOGOUTTIMER: 2000,						// in seconds
	ATTRACT_LOOP_SLIDE_DURATION: 3000,  // in milli-seconds
};

let config = {
	...env,
	...constants,
	screen: {
		width: env.device === "kiosk" ? devSize(2156) : window.innerWidth,
		height: env.device === "kiosk" ? devSize(3840) : window.innerHeight,
	},
	departments: ["produce", "dairy", "meat", "fish", "bakery", "deli"],
	searchSize: 20,
	loggedIn: false,
	
};

export default config;
