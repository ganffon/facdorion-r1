const convertValueText = (objArray, value, text) => {
  const result = objArray.map((item) => ({
    value: item[value],
    text: item[text],
  }));
  return result;
};

const reverseValueText = (objArray, value, text) => {
  const result = objArray.map((item) => ({
    [value]: item.value,
    [text]: item.text,
  }));
  return result;
};
export { convertValueText, reverseValueText };
