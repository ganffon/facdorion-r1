import React, { useEffect, useRef, useState } from "react";
import * as S from "../fdrComponents.styled";
import searchIcon from "img/button/search.svg";
import addRowIcon from "img/button/addRow.svg";
import cancelRowIcon from "img/button/cancelRow.svg";
import deleteIcon from "img/button/delete.svg";
import editIcon from "img/button/edit.svg";
import newIcon from "img/button/new.svg";
import saveIcon from "img/button/save.svg";
import mappingIcon from "img/button/mapping.svg";
import vectorIcon from "img/button/vector.svg";
import okIcon from "img/button/ok.svg";
import cancelIcon from "img/button/cancel.svg";
import syncIcon from "img/button/sync.svg";
import downloadIcon from "img/button/download.svg";
import detailIcon from "img/button/detail.svg";
import cleanIcon from "img/button/clean.svg";
import calculateIcon from "img/button/calculate.svg";

function FdrButton(props) {
  const {
    height = "40px",
    width = "",
    id,
    disabled = false,
    value = null,
    className = "",
    type = "",
    outline = true,
  } = props;

  let btnName, img;
  switch (type) {
    case "search":
      img = searchIcon;
      btnName = "검색";
      break;
    case "addRow":
      img = addRowIcon;
      btnName = "행 추가";
      break;
    case "cancelRow":
      img = cancelRowIcon;
      btnName = "행 취소";
      break;
    case "delete":
      img = deleteIcon;
      btnName = "삭제";
      break;
    case "edit":
      img = editIcon;
      btnName = "수정";
      break;
    case "new":
      img = newIcon;
      btnName = "신규";
      break;
    case "save":
      img = saveIcon;
      btnName = "저장";
      break;
    case "mapping":
      img = mappingIcon;
      btnName = "데이터 맵핑";
      break;
    case "vector":
      img = vectorIcon;
      btnName = "그래프";
      break;
    case "ok":
      img = okIcon;
      btnName = "확인";
      break;
    case "cancel":
      img = cancelIcon;
      btnName = "취소";
      break;
    case "sync":
      img = syncIcon;
      btnName = "동기화";
      break;
    case "download":
      img = downloadIcon;
      btnName = "다운로드";
      break;
    case "detail":
      img = detailIcon;
      btnName = "상세보기";
      break;
    case "clean":
      img = cleanIcon;
      btnName = "라인 청소";
      break;
    case "calculate":
      img = calculateIcon;
      btnName = "계산";
      break;
    default:
  }

  const [isClickAnimation, setIsClickAnimation] = useState(false);
  const playClickAnimation = () => {
    setIsClickAnimation(true);
    setTimeout(() => {
      setIsClickAnimation(false);
    }, 100);
  };

  return (
    <S.FdrButton
      id={id}
      outline={outline}
      disabled={disabled}
      className={isClickAnimation ? `${className} click` : className}
      onClick={() => {
        playClickAnimation();
      }}
      width={width}
      height={height}
    >
      <S.ButtonImg src={img} outline={outline} />
      {btnName}
    </S.FdrButton>
  );
}

export default FdrButton;
