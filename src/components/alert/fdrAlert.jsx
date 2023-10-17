import * as S from "./fdrAlert.styled";

function FdrAlert({
  width = "600px",
  height = "300px",
  position = "center" || "top",
  setIsOpen = () => {},
  alertTitle = "Test Title",
  message = "",
  subMessage = "",
  firstButtonText = "확인",
  secondButtonText = "",
  thirdButtonText = "",
  alertType = "",

  onCenterButton = () => {},
  onRightButton = () => {},
}) {
  if (alertType === "delete") {
    alertTitle = "삭제";
    message = "삭제 가능한 데이터가 포함되어 있습니다.\n진행하시겠습니까?";
    firstButtonText = "취소";
    secondButtonText = "확인";
  }

  let buttonWidth, buttonType, buttonComponent;
  if (firstButtonText !== "" && secondButtonText === "" && thirdButtonText === "") {
    buttonWidth = "100%";
    buttonType = "one";
  } else if (firstButtonText !== "" && secondButtonText !== "" && thirdButtonText === "") {
    buttonWidth = "50%";
    buttonType = "two";
  } else if (firstButtonText !== "" && secondButtonText !== "" && thirdButtonText !== "") {
    buttonWidth = "33.33%";
    buttonType = "three";
  } else {
    buttonWidth = "100%";
  }

  switch (buttonType) {
    case "one":
      buttonComponent = (
        <S.OneButton
          $width={buttonWidth}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {firstButtonText}
        </S.OneButton>
      );
      break;
    case "two":
      buttonComponent = (
        <>
          <S.LeftButton
            $width={buttonWidth}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {firstButtonText}
          </S.LeftButton>
          <S.RightButton
            $width={buttonWidth}
            onClick={() => {
              onRightButton();
              setIsOpen(false);
            }}
          >
            {secondButtonText}
          </S.RightButton>
        </>
      );
      break;
    case "three":
      buttonComponent = (
        <>
          <S.LeftButton
            $width={buttonWidth}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {firstButtonText}
          </S.LeftButton>
          <S.CenterButton
            $width={buttonWidth}
            onClick={() => {
              onCenterButton();
              setIsOpen(false);
            }}
          >
            {secondButtonText}
          </S.CenterButton>
          <S.RightButton
            $width={buttonWidth}
            onClick={() => {
              onRightButton();
              setIsOpen(false);
            }}
          >
            {thirdButtonText}
          </S.RightButton>
        </>
      );
      break;
    default:
      buttonComponent = null;
  }
  return (
    <S.Overlay>
      <S.Inner $width={width} $height={height} $position={position}>
        <S.Header>
          <S.Title>{alertTitle}</S.Title>
        </S.Header>
        <S.Main>
          <S.Message>{message}</S.Message>
          <S.SubMessage>{subMessage}</S.SubMessage>
        </S.Main>
        <S.ButtonWrap>{buttonComponent}</S.ButtonWrap>
      </S.Inner>
    </S.Overlay>
  );
}

export default FdrAlert;
