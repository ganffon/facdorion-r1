import styled from "styled-components";
import { palette } from "constant/color/color";

export const FdrGridWrap = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const FdrGridHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  ${($props) => $props.$headerHeight && `height: ${$props.$headerHeight};`}
`;

export const FdrGridTitle = styled("div")`
  display: flex;
  align-items: end;
  font-size: 1.1rem;
  font-weight: 900;
  padding-left: 10px;
`;

export const FdrGrid = styled("div")`
  width: 100%;
  height: calc(100% - ${($props) => $props.$minusHeight});
  position: relative;
`;

export const Tooltip = styled("div")`
  position: absolute;
  left: ${($props) => $props.$x}px;
  top: ${($props) => $props.$y}px;
  pointer-events: none;
  z-index: 9999;
  padding: 8px;
  background-color: ${palette.white};
  border: 1px solid ${palette.black[500]};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const TooltipContents = styled("pre")`
  white-space: pre-wrap;
  font-family: NotoSansKR;
  padding-right: 10px;
`;
