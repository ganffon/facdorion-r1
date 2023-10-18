import styled from "styled-components";
import { palette } from "constant/color/color";

export const FdrRadio = styled("div")`
  height: 40px;
  display: flex;
  align-items: center;

  padding: 5px;
  border: 1px solid ${palette.black[300]};
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 1px solid ${palette.black[900]};
  }
`;

export const RadioLabel = styled("div")`
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 0.8rem;
  color: ${palette.black[500]};
  background: ${palette.white};
`;

export const RadioWrap = styled("div")`
  display: flex;
  :focus {
    outline: none;
  }
`;

export const Radio = styled("input")`
  cursor: pointer;
`;

export const RadioText = styled("label")`
  cursor: pointer;
  margin-right: 5px;
`;
