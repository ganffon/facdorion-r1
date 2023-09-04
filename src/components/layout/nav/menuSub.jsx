import React, { useState, useEffect, useContext, useRef, forwardRef } from "react";
import * as S from "./menuSub.styled.js";
import { menuListIcon } from "./menuListIcon.jsx";
import { useNavigate } from "react-router-dom";

const MenuSub = forwardRef((props, ref) => {
  const { lv2 } = props;
  const { id, name, lv2Menu } = lv2;
  const navigate = useNavigate();
  const moveToRouter = (path) => {
    navigate(path);
  };

  return (
    <S.MenuSub ref={ref}>
      <S.header>
        {menuListIcon(id)}
        <S.title>{name}</S.title>
      </S.header>
      <S.MenuWrap>
        {lv2Menu.map((lv2Menu) => {
          if (lv2Menu.under === null) {
            return (
              <S.MenuList
                key={lv2Menu.id}
                onClick={() => {
                  moveToRouter(lv2Menu.path);
                }}
              >
                {lv2Menu.name}
              </S.MenuList>
            );
          } else {
            const lv3Menu = lv2Menu.under;
            return (
              <React.Fragment key={lv2Menu.id}>
                <S.MenuSubTitle key={lv2Menu.id}>{lv2Menu.name}</S.MenuSubTitle>
                {lv3Menu.map((lv3Menu) => (
                  <S.MenuList
                    key={lv3Menu.id}
                    onClick={() => {
                      moveToRouter(lv3Menu.path);
                    }}
                    className={"lv3Menu"}
                  >{`${lv3Menu.name}`}</S.MenuList>
                ))}
              </React.Fragment>
            );
          }
        })}
      </S.MenuWrap>
    </S.MenuSub>
  );
});

export default MenuSub;
