import React, { useEffect, useRef, useState } from "react";
import * as S from "../fdrComponents.styled";
import dot from "img/backDrop/dot.svg";
import backDrop from "img/backDrop/backDrop.svg";
import working from "img/backDrop/working.svg";
import wait from "img/backDrop/wait.svg";

function FdrBackDrop(props) {
  const [backDropType, setBackDropType] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (backDropType === false) {
        setBackDropType(true);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.FdrBackDrop>
      {backDropType ? (
        <>
          <S.Wait src={wait} />
          <S.LoadingWrap>
            <S.Loading src={dot} className={"dot"} />
            <S.Loading src={dot} className={"dot"} />
            <S.Loading src={dot} className={"dot"} />
            <S.Loading src={working} className={"dori"} />
          </S.LoadingWrap>
        </>
      ) : (
        <S.BackDrop src={backDrop} />
      )}
    </S.FdrBackDrop>
  );
}

export default FdrBackDrop;
