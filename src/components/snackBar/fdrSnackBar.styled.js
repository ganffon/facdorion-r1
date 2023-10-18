import styled from "styled-components";
import { palette } from "constant/color/color";
import * as A from "style/animation/animation";

export const FdrSnackBar = styled("div")`
  position: absolute;
  z-index: 9999;
  height: 50px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 20px;

  border-radius: 5px;

  color: ${palette.white};
  font-size: 16px;
  font-weight: 500;

  box-shadow: 1px 1px 5px ${palette.black[500]};

  &.error {
    animation: ${A.slideDownToUp} 0.5s linear;
    bottom: 20px;
    right: 20px;
    background: ${palette.red[500]};
  }
  &.success {
    animation: ${A.slideDownToUp} 0.5s linear;
    bottom: 20px;
    right: 20px;
    background: ${palette.green[500]};
  }
  &.warning {
    animation: ${A.slideUpToDown} 0.5s linear;
    top: 20px;
    right: 50%;
    transform: translateX(50%);
    background: ${palette.orange[500]};
  }
  &.information {
    animation: ${A.slideUpToDown} 0.5s linear;
    top: 20px;
    right: 50%;
    transform: translateX(50%);
    background: ${palette.navy[500]};
  }
`;
export const snackBarIcon = styled("img")``;
