import { palette } from "constant/color/color";
import styled from "styled-components";

export const Overlay = styled("div")`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 10000;
`;
export const Inner = styled("div")`
  width: ${($props) => $props.$width};
  min-width: ${($props) => $props.$width};
  height: ${($props) => $props.$height};
  position: absolute;
  top: ${($props) => ($props.$position === "top" ? "20%" : "50%")};
  left: 50%;
  transform: translate(-50%, ${($props) => ($props.$position === "top" ? "-20%" : "-50%")});
  border-radius: 10px;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);

  background-color: ${palette.white};
  z-index: 10000;

  display: flex;
  flex-direction: column;
`;
export const Header = styled("div")`
  width: 100%;
  height: 40px;
  background: ${palette.black[100]};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
`;

export const Title = styled("div")`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 900;
`;

export const Main = styled("div")`
  height: calc(100% - 90px);
  width: 100%;
  padding: 10px 20px;
  overflow: hidden auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Message = styled("pre")`
  font-family: NotoSansKR;
  white-space: pre-wrap;
  font-size: 1.3rem;
  margin: 0px;
  text-align: center;
`;
export const SubMessage = styled("pre")`
  font-family: NotoSansKR;
  white-space: pre-wrap;
  font-size: 1rem;
  color: ${palette.black[500]};
  margin: 0px;
  text-align: center;
`;
export const ButtonWrap = styled("div")`
  height: 50px;
  width: 100%;
  display: flex;
`;

export const OneButton = styled("div")`
  height: 100%;
  width: ${($props) => $props.$width};
  background: ${palette.blue[500]};
  border-radius: 0px 0px 10px 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${palette.white};
  &:hover {
    background: ${palette.blue[700]};
  }
`;
export const LeftButton = styled("div")`
  height: 100%;
  width: ${($props) => $props.$width};
  background: ${palette.black[100]};
  border-radius: 0px 0px 0px 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${palette.black[700]};
  &:hover {
    background: ${palette.black[200]};
  }
`;
export const CenterButton = styled("div")`
  height: 100%;
  width: ${($props) => $props.$width};
  background: ${palette.blue[200]};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${palette.black[700]};
  &:hover {
    background: ${palette.blue[300]};
  }
`;
export const RightButton = styled("div")`
  height: 100%;
  width: ${($props) => $props.$width};
  background: ${palette.blue[500]};
  border-radius: 0px 0px 10px 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${palette.white};
  &:hover {
    background: ${palette.blue[700]};
  }
`;
