import React, { useState, useEffect, useContext, useRef } from "react";
import * as S from "./avatar.styled.js";
import Cookies from "js-cookie";
import doriFaceOnly from "img/avatar/doriFaceOnly.svg";
import { LayoutContext } from "../layout.jsx";
import logout from "img/avatar/logout.png";
import bookmark from "img/avatar/bookmark.png";

function Avatar() {
  const { menuSlide } = useContext(LayoutContext);
  const refAvatar = useRef(null);
  const refAvatarMenu = useRef(null);
  const [isClickAnimation, setIsClickAnimation] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const playClickAnimation = () => {
    setIsClickAnimation(true);
    setTimeout(() => {
      setIsClickAnimation(false);
    }, 300);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (!refAvatarMenu.current?.contains(e.target) && !refAvatar.current?.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  const AvatarMenu = () => {
    return (
      <S.AvatarMenu ref={refAvatarMenu}>
        <S.Menu>
          <S.MenuImg src={logout} />
          로그아웃
        </S.Menu>
        <S.Menu>
          <S.MenuImg src={bookmark} />
          즐겨찾기
        </S.Menu>
        <S.Version>Ver.202308301703</S.Version>
      </S.AvatarMenu>
    );
  };

  return (
    <S.Avatar
      onClick={() => {
        setIsMenuOpen(true);
      }}
    >
      <S.DoriFace
        src={doriFaceOnly}
        onClick={() => {
          playClickAnimation();
        }}
        className={isClickAnimation ? "click" : ""}
        ref={refAvatar}
      />
      {isMenuOpen && <AvatarMenu />}
    </S.Avatar>
  );
}

export default Avatar;
