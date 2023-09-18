import React, { useEffect, useRef, useState } from "react";
import * as S from "../fdrComponents.styled";
import { palette } from "constant/color/color";
import { ReactComponent as SearchIcon } from "img/button/search.svg";
import { ReactComponent as AddRowIcon } from "img/button/addRow.svg";
import { ReactComponent as CancelRowIcon } from "img/button/cancelRow.svg";
import { ReactComponent as DeleteIcon } from "img/button/delete.svg";
import { ReactComponent as EditIcon } from "img/button/edit.svg";
import { ReactComponent as NewIcon } from "img/button/new.svg";
import { ReactComponent as SaveIcon } from "img/button/save.svg";
import { ReactComponent as MappingIcon } from "img/button/mapping.svg";
import { ReactComponent as VectorIcon } from "img/button/vector.svg";
import { ReactComponent as OkIcon } from "img/button/ok.svg";
import { ReactComponent as CancelIcon } from "img/button/cancel.svg";
import { ReactComponent as SyncIcon } from "img/button/sync.svg";
import { ReactComponent as DownloadIcon } from "img/button/download.svg";
import { ReactComponent as DetailIcon } from "img/button/detail.svg";
import { ReactComponent as CleanIcon } from "img/button/clean.svg";
import { ReactComponent as CalculateIcon } from "img/button/calculate.svg";
import { ReactComponent as ResetIcon } from "img/button/reset.svg";

function FdrButton(props) {
  const {
    height = "40px",
    width = "",
    id,
    disabled = false,
    value = null,
    className = "",
    name = "",
    fill = false,
    onClick = () => {},
    btnTitle = "",
    type = "",
  } = props;

  let background, border, fontColor;
  switch (type) {
    case "success":
      if (fill) {
        background = palette.green[500];
        border = palette.green[100];
        fontColor = palette.white;
      } else {
        background = palette.white;
        border = palette.green[500];
        fontColor = palette.green[500];
      }
      break;
    case "error":
      if (fill) {
        background = palette.red[400];
        border = palette.red[100];
        fontColor = palette.white;
      } else {
        background = palette.white;
        border = palette.red[400];
        fontColor = palette.red[400];
      }
      break;
    case "warning":
      if (fill) {
        background = palette.orange[500];
        border = palette.orange[100];
        fontColor = palette.white;
      } else {
        background = palette.white;
        border = palette.orange[500];
        fontColor = palette.orange[500];
      }
      break;
    default:
      if (fill) {
        background = palette.blue[400];
        border = palette.blue[100];
        fontColor = palette.white;
      } else {
        background = palette.white;
        border = palette.blue[400];
        fontColor = palette.blue[400];
      }
  }
  let btnName, img;
  switch (name) {
    case "search":
      img = <SearchIcon fill={fontColor} />;
      btnName = "검색";
      break;
    case "addRow":
      img = <AddRowIcon fill={fontColor} />;
      btnName = "행 추가";
      break;
    case "cancelRow":
      img = <CancelRowIcon fill={fontColor} />;
      btnName = "행 취소";
      break;
    case "delete":
      img = <DeleteIcon fill={fontColor} />;
      btnName = "삭제";
      break;
    case "edit":
      img = <EditIcon fill={fontColor} />;
      btnName = "수정";
      break;
    case "new":
      img = <NewIcon fill={fontColor} />;
      btnName = "신규";
      break;
    case "save":
      img = <SaveIcon fill={fontColor} />;
      btnName = "저장";
      break;
    case "mapping":
      img = <MappingIcon fill={fontColor} />;
      btnName = "데이터 맵핑";
      break;
    case "vector":
      img = <VectorIcon fill={fontColor} />;
      btnName = "그래프";
      break;
    case "ok":
      img = <OkIcon fill={fontColor} />;
      btnName = "확인";
      break;
    case "cancel":
      img = <CancelIcon fill={fontColor} />;
      btnName = "취소";
      break;
    case "sync":
      img = <SyncIcon fill={fontColor} />;
      btnName = "동기화";
      break;
    case "download":
      img = <DownloadIcon fill={fontColor} />;
      btnName = "다운로드";
      break;
    case "detail":
      img = <DetailIcon fill={fontColor} />;
      btnName = "상세보기";
      break;
    case "clean":
      img = <CleanIcon fill={fontColor} />;
      btnName = "라인 청소";
      break;
    case "calculate":
      img = <CalculateIcon fill={fontColor} />;
      btnName = "계산";
      break;
    case "reset":
      img = <ResetIcon fill={fontColor} />;
      btnName = "초기화";
      break;
    default:
      img = null;
      btnName = "";
  }
  if (btnTitle !== "") {
    btnName = btnTitle;
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
      disabled={disabled}
      className={isClickAnimation ? `${className} click` : className}
      onClick={() => {
        playClickAnimation();
        onClick();
      }}
      width={width}
      height={height}
      $background={background}
      $border={border}
      $fontColor={fontColor}
    >
      {img}
      {btnName}
    </S.FdrButton>
  );
}

export default FdrButton;
