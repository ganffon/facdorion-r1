import styled from "styled-components";
import * as A from "style/animation/animation";
import { palette } from "constant/color/color";
export const Avatar = styled("div")`
  position: relative;
`;
export const DoriFace = styled("img")`
  cursor: pointer;
  &.click {
    animation: ${A.clickEffect} 0.3s linear;
  }
`;
export const AvatarMenu = styled("div")`
  position: absolute;
  top: 20px;
  left: -150px;
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  background: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const Menu = styled("div")`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 0px 10px;
  &:hover {
    background: ${palette.skyBlue[100]};
    cursor: pointer;
    border-radius: 10px;
  }
`;
export const MenuImg = styled("img")`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &.bookmarkImg {
    width: 15px;
    height: 15px;
  }
`;
export const Version = styled("div")`
  cursor: default;
`;
