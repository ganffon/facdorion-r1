import styled from "styled-components";
import { palette } from "constant/color/color";

export const MenuSub = styled("div")`
  position: absolute;
  top: 80px;
  left: 120px;
  z-index: 100;
  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  height: 90%;
  width: 260px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background: ${palette.navy[700]};

  padding: 20px;
  border-radius: 20px;

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  animation: slide 0.2s linear;

  @keyframes slide {
    0% {
      transform: translateX(-400px) translateY(0);
    }
    100% {
      transform: translateX(0) translateY(0);
    }
  }
`;
export const header = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 30px;
  width: 100%;
  cursor: default;
`;
export const title = styled("div")`
  color: white;
  font-size: 20px;
  font-weight: 900;
`;

export const MenuWrap = styled("div")`
  width: 100%;
  height: calc(100% - 30px);
  overflow: hidden auto;
`;
export const MenuSubTitle = styled("div")`
  height: 30px;
  color: ${palette.skyBlue[500]};
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: default;
`;
export const MenuList = styled("div")`
  height: 30px;
  width: 90%;
  color: white;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0px 10px;

  &.lv3Menu {
    width: calc(90% - 10px);
    margin-left: 10px;
  }

  &:hover {
    background: ${palette.navy[600]};
    cursor: pointer;
    border-radius: 10px;
  }
`;
