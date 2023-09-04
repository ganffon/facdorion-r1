import React, { useEffect, useRef, useState } from "react";
import * as S from "../fdrComponents.styled";
import search from "img/button/search.svg";
import addRow from "img/button/addRow.svg";

function FdrButton(props) {
  const {
    height = "40px",
    width = "100px",
    id,
    disabled = false,
    value = null,
    onSearch = () => {},
    className = "",
    type = "",
  } = props;

  switch (type) {
    case "search":
      break;
    default:
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <S.FdrButton id={id} disabled={disabled} className={className} onKeyDown={onKeyDown} width={width} height={height}>
      <S.ButtonImg src={search} />
      검색
    </S.FdrButton>
  );
}

export default FdrButton;
