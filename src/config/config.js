const env = {
  environment: 'dev', // options: dev, prod
  device: 'mobile', // options: mobile, kiosk
  kioskType: 'ipad', // options: ipad, standup, phone
  client: {
    host: window.location.hostname,
    port: window.location.port,
  },
  server: {
    host: window.location.hostname,
    port: '3000',
  },
  currentAI: 'LUIS',
  // neServerPort: '',
  neServerPort: '3524',
  neServerHost: 'innovationd.aholdusa.com',
  // neServerHost: '169.55.109.83',
  // neServerHost: '161.247.64.6',
  // neServerHost: '10.177.134.154',
  svgContainerHeight: 170,
  storeNumber: 0,
  brand: 'GL',
  https: false,
};

const devSize = size => size / 8;

const constants = {
  TOP_LEFT_CORNER: 'top_left',
  TOP_RIGHT_CORNER: 'top_right',
  BOTTOM_LEFT_CORNER: 'bottom_left',
  BOTTOM_RIGHT_CORNER: 'bottom_right',
};

let config = {
  ...env,
  ...constants,
  screen: {
    width: env.device === 'kiosk' ? devSize(2156) : window.innerWidth,
    height: env.device === 'kiosk' ? devSize(3840) : window.innerHeight,
  },
	loginTimeout: 10000, 
	logoutTimeout: 10000,
  timeoutLength: 60000,
  departments: ['produce', 'dairy', 'meat', 'fish', 'bakery', 'deli'],
  searchSize: 20,
  loggedIn: false,
  slideDuration: 1000,

};

export default config;
