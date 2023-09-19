import styled from "styled-components";
import { height } from "constant/layout/layout";
import { palette } from "constant/color/color";
import * as A from "style/animation/animation";

export const AppBar = styled("header")`
  height: ${height.APP_BAR};
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 0px 10px 1px rgba(0, 0, 0, 0.2);
`;

export const LeftSide = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 30px;
`;

export const RightSide = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
`;

export const Logo = styled("img")`
  cursor: pointer;
`;

export const MenuSlide = styled("div")`
  width: 100%;
  height: 2px;
  background: ${palette.black[600]};
`;
export const MenuSlideIcon = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  gap: 5px;
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;

  &:hover ${MenuSlide} {
    background: ${palette.skyBlue[500]};
  }
`;

export const StepWrap = styled("div")`
  display: flex;
  flex-direction: column;
  cursor: default;
`;
export const StepSingle = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: NotoSansKR;
  font-style: normal;
  font-weight: 900;
  color: ${palette.navy[900]};
`;
export const StepHeader = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${palette.black[500]};
`;
export const StepMain = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: NotoSansKR;
  font-style: normal;
  font-weight: 900;
  color: ${palette.navy[900]};
`;
export const Bookmark = styled("span")`
  font-size: 25px;
  margin-bottom: 3px;
  cursor: pointer;
  color: gray;
  &.onBookmark {
    color: ${palette.yellow[500]};
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  }
`;

export const UserTextBackground = styled("div")`
  height: 60%;
  background: ${palette.skyBlue[100]};
  border-radius: 5px;
  padding: 0px 10px;
  cursor: default;
  &.pink {
    background: ${palette.red[100]};
  }
`;
export const UserText = styled("div")`
  font-family: NotoSansKR;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  height: 100%;
  color: ${palette.black[800]};
  display: flex;
  align-items: center;
`;
export const BuildAlert = styled("div")`
  height: 10px;
  font-family: NotoSansKR;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  color: red;
  animation: ${A.blink} infinite 0.8s;
`;
