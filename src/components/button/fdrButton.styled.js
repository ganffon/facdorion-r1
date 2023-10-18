import styled from "styled-components";
import * as A from "style/animation/animation";

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
