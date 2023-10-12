export const validateMsg = (errorCode, value) => {
  switch (errorCode) {
    case "REQUIRED":
      return "필수 입력 필드가 비어 있습니다.";
    case "TYPE_NUMBER":
      return "숫자가 아닌 값이 입력 되었습니다.";
    case "TYPE_STRING":
      return "문자열이 아닌 값이 입력 되었습니다.";
    case "MIN":
      return `최소값 ${value} 보다 작은 값이 입력 되었습니다.`;
    case "MAX":
      return `최대값 ${value} 보다 큰 값이 입력 되었습니다.`;
    case "REGEXP":
      return "정규식 유효성 검사에서 실패 하였습니다.";
    case "VALIDATOR_FN":
      return "사용자 정의 유효성 검사 함수에서 실패 하였습니다.";
    case "DECIMAL":
      if (value > 0) {
        return `소수점 ${value}자리까지 입력 가능합니다.`;
      } else {
        return `정수만 입력 가능합니다.`;
      }

    case "UNIQUE": //검색조건으로 검색하고 나서는 중복 체크를 할 수 없음=>backEnd에서 처리하기로 함
      return "고유 값인데 중복 된 값이 존재 함";
    default:
  }
};

export const gridValidate = (ref) => {
  const grid = ref?.current?.gridInst;
  grid.finishEditing();
  const result = grid.validate();
  if (result.length > 0) {
    let value;
    const err = result.flatMap((errorRows) => {
      const rowKey = errorRows.rowKey + 1;
      return errorRows.errors.flatMap((errorCols) => {
        const columnName = errorCols?.columnName;
        return errorCols.errorInfo.map((errorInfo) => {
          let code = errorInfo?.code;
          if (code === "MIN") {
            value = errorInfo?.min;
          } else if (code === "MAX") {
            value = errorInfo?.max;
          } else if (code === "VALIDATOR_FN") {
            code = errorInfo?.customErrorCode;
            value = errorInfo?.decimal;
          }
          const msg = validateMsg(code, value);
          return { rowKey: rowKey, columnName: columnName, msg: msg };
        });
      });
    });
    const validateError = [];

    err.forEach((data) => {
      const existingError = validateError.find((e) => e.rowKey === data.rowKey && e.columnName === data.columnName);
      if (existingError) {
        existingError.msg.push(data.msg);
      } else {
        validateError.push({
          rowKey: data.rowKey,
          columnName: data.columnName,
          msg: [data.msg],
        });
      }
    });

    return validateError;
  }
};
