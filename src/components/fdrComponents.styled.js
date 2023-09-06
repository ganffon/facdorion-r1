import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { color } from "constant/color/color";
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
  background: ${(props) => (props.outline ? color.button.outline.background : color.button.fill.background)};
  border: 1px solid ${(props) => (props.outline ? color.button.outline.border : color.button.fill.border)};
  border-radius: 5px;
  color: ${(props) => (props.outline ? color.button.outline.font : color.button.fill.font)};
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
  ${(props) =>
    props.outline
      ? "filter: invert(57%) sepia(75%) saturate(1135%) hue-rotate(184deg) brightness(84%) contrast(87%);"
      : "filter: brightness(0) invert(1);"}
`;
