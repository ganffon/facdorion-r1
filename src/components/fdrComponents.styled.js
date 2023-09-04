import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { color } from "constant/color/color";

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
  // width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0px 15px;
  background: ${color.button.background};
  border: 1px solid ${color.button.border};
  border-radius: 5px;
  color: ${color.white};
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

export const ButtonImg = styled("img")``;
