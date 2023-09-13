import React from "react";
import { useNavigate } from "react-router-dom";
// ⬇️ import MUI
import Button from "@mui/material/Button";
// ⬇️ reference of page
import doriNotFound from "img/notFound/doriNotFound.svg";
import Text404 from "img/notFound/404.svg";
import * as S from "./notFound.styled";
import FdrButton from "components/button/fdrButton";

export const NotFound = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    const state = localStorage.getItem("loginState");
    if (state === "false") {
      navigate("/login");
    } else {
      navigate("/mes");
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Text404 src={Text404} />
        <S.NotFoundImg src={doriNotFound} />
        <S.Contents>
          <S.Title>Page Not Found</S.Title>
          <S.Description>
            페이지를 찾을 수 없습니다.
            <br />
            존재하지 않거나, 사용할 수 없는 페이지입니다.
            <br />
            입력한 주소가 정확한지 다시 확인해주세요.
          </S.Description>
        </S.Contents>
      </S.Wrapper>
      {/* <Button
        id="notFoundBtn"
        variant="outlined"
        onClick={onClickHome}
        sx={{
          height: "40px",
          width: "100px",
          marginTop: "50px",
        }}
      >
        돌아가기
      </Button> */}
      <FdrButton outline={false} type={"reset"} btnTitle={"돌아가기"} onClick={onClickHome} />
    </S.Container>
  );
};
