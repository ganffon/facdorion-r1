/**
 * fdrCombo, grid combo에서 쓰기위해 value, text 형태로 변환
 */
const convertValueText = (objArray, value, text) => {
  const result = objArray.map((item) => ({
    value: item[value],
    text: item[text],
  }));
  return result;
};
/**
 * value, text 형태를 원하는 키 값으로 변환
 */
const reverseValueText = (objArray, value, text) => {
  const result = objArray.map((item) => ({
    [value]: item.value,
    [text]: item.text,
  }));
  return result;
};
export { convertValueText, reverseValueText };
