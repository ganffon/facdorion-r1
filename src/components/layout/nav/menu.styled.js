import styled from "styled-components";
import { width } from "constant/layout/layout";
import { palette } from "constant/color/color";

export const MenuBox = styled("div")``;

export const Menu = styled("nav")`
  overflow: hidden auto;
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
  z-index: 200;
  height: 100%;
  width: ${width.MENU};
  display: ${($props) => ($props.$isMenuSlide ? "none" : "static")};

  background: ${palette.navy[800]};

  padding: 10px 5px;
`;

export const MenuWrap = styled("div")`
  width: 100%;
  height: 80px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  justify-content: center;
  align-items: center;

  &:hover {
    background: ${palette.navy[700]};
    border-radius: 10px;
    cursor: pointer;
  }
  &.selected {
    background: ${palette.navy[700]};
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const Lv1Menu = styled("div")`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 900;
  width: 100%;
`;
