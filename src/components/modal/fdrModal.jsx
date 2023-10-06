import React from "react";
import * as S from "./fdrModal.styled";
import Exit from "img/ui/exit.svg";

function FdrModal({
  children,
  width = "1000px",
  height = "500px",
  position = "center" || "top",
  setIsOpen = () => {},
  title = "",
}) {
  return (
    <S.Overlay>
      <S.Inner $width={width} $height={height} $position={position}>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Exit src={Exit} onClick={() => setIsOpen(false)} />
        </S.Header>
        <S.Main>{children}</S.Main>
      </S.Inner>
    </S.Overlay>
  );
}

export default FdrModal;
