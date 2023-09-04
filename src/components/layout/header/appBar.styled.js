import styled from "styled-components";
import { height } from "constant/layout/layout";
import { color } from "constant/color/color";

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
  background: ${color.appBar.slide.icon};
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
    background: ${color.appBar.slide.hover};
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
  color: ${color.appBar.step.main};
`;
export const StepHeader = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${color.appBar.step.header};
`;
export const StepMain = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: NotoSansKR;
  font-style: normal;
  font-weight: 900;
  color: ${color.appBar.step.main};
`;
export const Bookmark = styled("span")`
  font-size: 25px;
  margin-bottom: 3px;
  cursor: pointer;
  color: gray;
  &.onBookmark {
    color: ${color.appBar.step.bookmark};
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  }
`;

export const UserTextBackground = styled("div")`
  height: 60%;
  background: ${color.appBar.message.background.blue};
  border-radius: 5px;
  padding: 0px 10px;
  cursor: default;
  &.pink {
    background: rgb(255, 200, 200, 0.5);
  }
`;
export const UserText = styled("div")`
  font-family: NotoSansKR;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  height: 100%;
  color: ${color.appBar.message.font};
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
  animation: blink infinite 0.8s;
  @keyframes blink {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;
