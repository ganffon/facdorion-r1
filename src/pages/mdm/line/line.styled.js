import styled from "styled-components";
import { palette } from "constant/color/color";

const headerHeight = "70px";

export const Header = styled("header")`
  width: 100%;
  height: ${headerHeight};
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${palette.black[500]};
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 5px;
`;
export const Main = styled("main")`
  width: 100%;
  height: calc(100% - ${headerHeight});
  background: ${palette.white};
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${palette.black[500]};
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const Btn = styled("button")`
  width: 100px;
  height: 50px;
`;
