import React, { useState, useEffect, useContext, useRef } from "react";
import menuListDev from "routers/MenuListDev.js";
import * as S from "./menu.styled.js";
import Cookies from "js-cookie";
import MenuSub from "./menuSub.jsx";
import { LayoutContext } from "../layout.jsx";
import { menuListIcon } from "./menuListIcon.jsx";

function Menu() {
  const { menuSlide } = useContext(LayoutContext);
  const refMenu = useRef([]);
  const refMenuSub = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (!refMenuSub.current?.contains(e.target) && !refMenu.current.some((menu) => menu?.contains(e.target))) {
      setMenuSubOpen(false);
      setSelectedID("");
    }
  };
  const [selectedID, setSelectedID] = useState(""); // 선택한 lv1Menu ID를 저장
  const [lv2, setLv2] = useState({ id: "", title: "", under: {} }); // 선택한 lv1Menu의 lv2Menu 리스트 저장
  const [menuSubOpen, setMenuSubOpen] = useState(false); // lv1Menu 선택 시 MenuSub Open State
  return (
    <>
      <S.Menu $isMenuSlide={menuSlide.state}>
        {menuListDev.map((lv1Menu, index) => (
          <S.MenuWrap
            key={lv1Menu.id}
            id={lv1Menu.id}
            onClick={(e) => {
              setMenuSubOpen(true);
              setLv2({ id: lv1Menu.id, name: lv1Menu.name, lv2Menu: lv1Menu.under });
              setSelectedID(lv1Menu.id);
            }}
            className={selectedID === lv1Menu.id ? "selected" : ""}
            ref={(el) => (refMenu.current[index] = el)}
          >
            {menuListIcon(lv1Menu.id)}
            <S.Lv1Menu>{lv1Menu.name}</S.Lv1Menu>
          </S.MenuWrap>
        ))}
      </S.Menu>
      {menuSubOpen && <MenuSub ref={refMenuSub} lv2={lv2} />}
    </>
  );
}

export default Menu;
