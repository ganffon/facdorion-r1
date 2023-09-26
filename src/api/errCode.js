const errCode = (code) => {
  switch (code) {
    case "E999":
      return "500이다";
    case "E001":
      return "요청 항목이 잘못되었습니다.";
    default:
      return `${code} : 정의되지 않은 에러코드`;
  }
};

export { errCode };
