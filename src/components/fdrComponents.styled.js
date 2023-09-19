import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { palette } from "constant/color/color";
import * as A from "style/animation/animation";

export const FdrInput = styled(TextField)`
  width: ${(props) => props.width};
`;

export const FdrDate = styled(TextField)`
  width: ${(props) => props.width};
`;

export const FdrCombo = styled(Autocomplete)`
  width: ${(props) => props.width};
`;

export const FdrButton = styled("button")`
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  height: ${(props) => props.height};
  padding: 0px 15px;
  background: ${($props) => $props.$background};
  border: 1px solid ${($props) => $props.$border};
  border-radius: 5px;
  color: ${($props) => $props.$fontColor};
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  cursor: pointer;

  &.click {
    animation: ${A.clickEffect} 0.3s linear;
  }
`;

export const ButtonImg = styled("img")`
  fill: ${($props) => $props.$fontColor};
`;

export const FdrBackDrop = styled("div")`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background: rgb(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Wait = styled("img")`
  scale: 0.8;
`;
export const LoadingWrap = styled("div")`
  display: flex;
  gap: 20px;
  align-items: end;
`;

export const Loading = styled("img")`
  display: flex;
  align-items: end;

  &.dot {
    width: 50px;
    height: 50px;
    margin-bottom: 40px;
  }
  &.dori {
    width: 200px;
    height: 200px;
  }
  animation: ${A.loading} 1s infinite;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
`;
export const BackDrop = styled("img")`
  height: 50px;
  width: 50px;
  animation: ${A.rotate} 1s infinite linear;
`;

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

export const FdrGrid = styled("div")`
  width: 100%;
  height: 100%;
  padding: 15px;

  & .selectedBack {
    background-color: ${palette.skyBlue[100]};
  }

  & .redText {
    color: ${palette.red[500]};
  }
`;

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
`;
export const Radio = styled("input")`
  cursor: pointer;
`;
export const RadioText = styled("label")`
  cursor: pointer;
  margin-right: 5px;
`;

export const FdrCheckBox = styled("div")`
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
export const CheckBoxWrap = styled("div")`
  display: flex;
`;
export const CheckBox = styled("input")`
  cursor: pointer;
`;
export const CheckBoxLabel = styled("div")`
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 0.8rem;
  color: ${palette.black[500]};
  background: ${palette.white};
`;
export const CheckBoxText = styled("label")`
  cursor: pointer;
  margin-right: 5px;
`;
