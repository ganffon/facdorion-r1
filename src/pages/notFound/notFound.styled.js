import { palette } from "constant/color/color";
import styled from "styled-components";
import * as A from "style/animation/animation";

export const Container = styled.div`
  height: 100vh;
  width: 100wh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: ${palette.skyBlue[100]};
  animation: ${A.fadeIn} 1s ease-in;
`;
export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 130px;
  position: relative;
`;
export const Contents = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: NotoSansKR;
  color: rgb(0, 0, 0, 0.7);
`;
export const NotFoundImg = styled("img")`
  position: absolute;
  top: 120px;
  right: 150px;
  height: 300px;
  rotate: -5deg;
`;
export const Text404 = styled("img")`
  width: 700px;
`;

export const Title = styled("div")`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  color: ${palette.red[200]};
`;

export const Description = styled("div")`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${palette.black[800]};
`;
