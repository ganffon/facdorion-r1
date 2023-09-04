import styled from "styled-components";
import { height, width } from "constant/layout/layout";

export const LayoutBox = styled("main")`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Main = styled("section")`
  display: flex;
  height: calc(100vh - ${height.APP_BAR});
  width: 100%;
`;

export const Children = styled("section")`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${($props) => ($props?.$isMenuSlide ? "100%" : `calc(100% - ${width.MENU})`)};
`;
