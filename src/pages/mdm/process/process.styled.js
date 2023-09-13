import { palette } from "constant/color/color";
import styled from "styled-components";

export const Contents = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px 20px;
  background: rgb(200, 200, 200, 0.5);
`;

export const Header = styled("header")`
  width: 100%;
  height: 200px;
  background: white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px ${palette.black[500]};
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const Btn = styled("button")`
  width: 100px;
  height: 50px;
`;
