import * as S from "./validateAlert.styled";
import { CN } from "components/grid/columnName";
import { LayoutContext } from "components/layout/layout";
import { useContext } from "react";

function ValidateAlert({
  width = "700px",
  height = "500px",
  position = "center" || "top",
  alertTitle = "데이터 유효성 검사",
}) {
  const { gridValidation } = useContext(LayoutContext);
  const { state, set } = gridValidation;
  const error = state.validateError.map((data, index) => {
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
          <S.Title>{alertTitle}</S.Title>
        </S.Header>
        <S.Main>{error}</S.Main>
        <S.Button
          onClick={() => {
            set(false);
          }}
        >
          확인
        </S.Button>
      </S.Inner>
    </S.Overlay>
  );
}

export default ValidateAlert;
