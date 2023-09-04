import { color } from "constant/color/color";
import styled from "styled-components";

export const ContentsHidden = styled("div")`
  width: 100%;
  height: 100%;
  background: ${color.contents.background};
  padding: 15px 30px 15px 15px;
  font-family: NotoSansKR;
  overflow: hidden auto;

  & .redText {
    color: red;
  }

  & .selectedBack {
    // background-color: #fdf0f6;
    background-color: ${color.contents.selected};
  }
`;

export const ContentsFlex = styled("div")`
  width: 100%;
  ${($props) => ($props.$hidden ? "" : "height: 100%;")}
  display: flex;
  ${($props) => $props.$flexColumn && "flex-direction: column;"}
  gap: 10px;
`;
