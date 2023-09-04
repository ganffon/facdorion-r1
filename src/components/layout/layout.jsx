import React, { useState, createContext, useCallback, useMemo, useEffect } from "react";
import AppBar from "./header/appBar";
import * as S from "./layout.styled";
import Menu from "./nav/menu";

export const LayoutContext = createContext();

const Layout = ({ children }) => {
  // const isRealMenu = JSON.parse(process.env.REACT_APP_MENU);
  const [isMenuSlide, setIsMenuSlide] = useState(false); //🔸메뉴 확장, 축소 Flag
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(""); //북마크 On/Off 클래스명 전달
  const [bookmarkList, setBookmarkList] = useState([]); //북마크 List 전달

  const [isSnackOpen, setIsSnackOpen] = useState({
    open: false,
  });

  const menuSlide = {
    state: isMenuSlide,
    set: setIsMenuSlide,
  };

  return (
    <LayoutContext.Provider
      value={{
        menuSlide,
      }}
    >
      <S.LayoutBox>
        <AppBar />
        <S.Main>
          <Menu />
          <S.Children $isMenuSlide={isMenuSlide}>{children}</S.Children>
          {/* Styled 컴포넌트 사용 시 전달받은 props를 DOM에 전달하지 않는 게 일반적 
          하지만 종종 DOM에 전달해서 에러가 발생하는데 이런 경우 props를 DOM에 
          전달하지않도록 "$" 접두사를 붙여주면 된다.*/}
        </S.Main>
      </S.LayoutBox>
    </LayoutContext.Provider>
  );
};

export default Layout;
