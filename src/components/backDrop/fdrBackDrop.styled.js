import styled from "styled-components";
import * as A from "style/animation/animation";

export const FdrBackDrop = styled("div")`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: rgb(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Wait = styled("img")`
  scale: 0.8;
`;
export const LoadingWrap = styled("div")`
  display: flex;
  gap: 20px;
  align-items: end;
`;

export const Loading = styled("img")`
  display: flex;
  align-items: end;

  &.dot {
    width: 50px;
    height: 50px;
    margin-bottom: 40px;
  }
  &.dori {
    width: 200px;
    height: 200px;
  }
  animation: ${A.loading} 1s infinite;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
`;
export const BackDrop = styled("img")`
  height: 50px;
  width: 50px;
  animation: ${A.rotate} 1s infinite linear;
`;
