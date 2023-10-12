import * as S from "./validateAlert.styled";
import { CN } from "components/grid/columnName";

function ValidateAlert({
  validateErrorInfo = [],
  width = "700px",
  height = "500px",
  position = "center" || "top",
  setIsOpen = () => {},
  modalTitle = "데이터 유효성 검사",
}) {
  const error = validateErrorInfo.map((data, index) => {
    const title = `${data.rowKey}행 [${CN[data.columnName]["ko"]}]`;
    const msg = data.msg.map((errInfo, index) => `${index + 1}. ${errInfo}`).join("\n");

    return (
      <S.ErrorCard key={index}>
        <S.ErrorCardTitle>{title}</S.ErrorCardTitle>
        <S.ErrorCardInfo>{msg}</S.ErrorCardInfo>
      </S.ErrorCard>
    );
  });

  return (
    <S.Overlay>
      <S.Inner $width={width} $height={height} $position={position}>
        <S.Header>
          <S.Title>{modalTitle}</S.Title>
        </S.Header>
        <S.Main>{error}</S.Main>
        <S.Button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          확인
        </S.Button>
      </S.Inner>
    </S.Overlay>
  );
}

export default ValidateAlert;
