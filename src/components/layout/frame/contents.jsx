import React from "react";
import * as S from "./contents.styled";

function Contents(props) {
  const { children, hidden = false, flexColumn = true } = props;

  return (
    <S.ContentsHidden>
      <S.ContentsFlex $hidden={hidden} $flexColumn={flexColumn}>
        {children}
      </S.ContentsFlex>
    </S.ContentsHidden>
  );
}

export default Contents;
