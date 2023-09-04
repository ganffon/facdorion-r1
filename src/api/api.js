import axios from "axios";
import cookie from "js-cookie";

const hostName = window.location.hostname;
const ipFlag = hostName.split(".")[0];
let baseURI;
// console.log(`ipFlag : ${ipFlag}`);
// switch (ipFlag) {
//   case "192":
//     baseURI = process.env.REACT_APP_BASE_URL_PANEL;
//     break;
//   case "51":
//     baseURI = process.env.REACT_APP_BASE_URL;
//     break;
//   case "61":
//     baseURI = process.env.REACT_APP_BASE_URL;
//     break;
//   case "localhost":
//     baseURI = process.env.REACT_APP_BASE_URL;
//     break;
//   default:
//     baseURI = process.env.REACT_APP_BASE_URL_DOMAIN;
// }
baseURI = process.env.REACT_APP_BACK_END_URI;
const restAPI = axios.create({
  baseURL: baseURI,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  withCredentials: true,
});

restAPI.interceptors.request.use((config) => {
  // config.headers.factory = cookie.get("factoryID");
  // config.headers.user = cookie.get("userUID");
  config.headers.factory = "669AD03F-0A27-EE11-9D71-088FC39FE11D";
  config.headers.user = "4B9AD03F-0A27-EE11-9D71-088FC39FE11D";
  return config;
});

export default restAPI;
