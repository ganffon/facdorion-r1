import restAPI from "./api";
import { errCode } from "./errCode";
/**
 * @param {obj} params
 * @returns {string}
 * params = { key1: value1, key2: value2 } 전달하면 ?key1=value1&key2=value2 로 반환
 */
const getParams = (params) => {
  let query = [];
  for (let key in params) {
    if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== undefined && params[key] !== "") {
      query.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
    }
  }
  return query.length ? "?" + query.join("&") : "";
};

const restGet = async (uri, params) => {
  try {
    const result = await restAPI.get(uri + getParams(params));
    return { flag: true, res: result?.data?.data?.rows };
  } catch (err) {
    return { flag: false, res: errCode(err?.response?.data?.result_code) };
  }
};

export { getParams, restGet };
