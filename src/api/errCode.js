const errCode = (code) => {
  switch (code) {
    case "E999":
      return "500이다";
    default:
      return `${code} : 정의되지 않은 에러코드`;
  }
};

export { errCode };
