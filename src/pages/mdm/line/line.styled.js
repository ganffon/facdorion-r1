import styled from "styled-components";
import { color } from "constant/color/color";

const headerHeight = "70px";

export const Header = styled("header")`
  width: 100%;
  height: ${headerHeight};
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #444;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;
export const Main = styled("main")`
  width: 100%;
  height: calc(100% - ${headerHeight});
  background: ${color.white};
  border-radius: 10px;
  box-shadow: 1px 1px 5px #444;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const Color = styled("div")`
  width: 200px;
  height: 200px;
`;

export const Btn = styled("button")`
  width: 100px;
  height: 50px;
`;
