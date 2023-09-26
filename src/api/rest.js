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
      // 배열인지 확인
      if (Array.isArray(params[key])) {
        for (let value of params[key]) {
          query.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        }
      } else {
        query.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
      }
    }
  }
  return query.length ? "?" + query.join("&") : "";
};

const restGet = async (uri, params = "") => {
  try {
    const result = await restAPI.get(uri + getParams(params));
    return { flag: true, res: result?.data?.data?.rows };
  } catch (err) {
    return { flag: false, res: errCode(err?.response?.data?.result_code) };
  }
};

const restPost = async (uri, data = []) => {
  if (data.length > 0) {
    try {
      const result = await restAPI.post(uri, data);
      return { flag: result?.data?.result, res: result?.data?.data?.rows };
    } catch (err) {
      console.log(err);
      return { flag: err?.response?.data?.result, res: errCode(err?.response?.data?.result_code) };
    }
  }
};
const restPut = async (uri, data = []) => {
  if (data.length > 0) {
    try {
      const result = await restAPI.put(uri, data);
      return { flag: result?.data?.result, res: result?.data?.data?.rows };
    } catch (err) {
      console.log(err);
      return { flag: err?.response?.data?.result, res: errCode(err?.response?.data?.result_code) };
    }
  }
};

const restDelete = async (uri, data = []) => {
  if (data.length > 0) {
    try {
      const result = await restAPI.delete(uri, { data });
      return { flag: result?.data?.result, res: result?.data?.data?.rows };
    } catch (err) {
      console.log(err);
      return { flag: err?.response?.data?.result, res: errCode(err?.response?.data?.result_code) };
    }
  }
};

export const rest = {
  get: restGet,
  post: restPost,
  put: restPut,
  delete: restDelete,
  // patch: restPatch,
};
