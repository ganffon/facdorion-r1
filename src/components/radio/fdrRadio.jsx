import React, { useEffect, useRef, useState } from "react";
import * as S from "../fdrComponents.styled";
import { TextField } from "@mui/material";

function FdrRadio(props) {
  const {
    height = "40px",
    width = "160px",
    fontSize = "16px",
    labelFontSize = "",
    id,
    label = "",
    list = [],
    dispatch = () => {},
    dispatchType = "update",
    disabled = false,
    defaultCheckedIndex = 0,
    value = {},
    onSearch = () => {},
    className = "",
  } = props;

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  const valueKeys = Object.keys(value);
  const valueValues = Object.values(value);

  useEffect(() => {
    dispatch({ type: dispatchType, id: id, value: valueKeys[defaultCheckedIndex] });
  }, []);

  return (
    <S.FdrRadio>
      <S.RadioLabel>{label}</S.RadioLabel>
      {valueKeys.map((value, index) => {
        return (
          <S.RadioWrap key={`${id}${index}`}>
            <S.Radio
              type={"radio"}
              id={`${id}${index}`}
              name={id}
              value={valueKeys[index]}
              defaultChecked={valueKeys[index] === valueKeys[defaultCheckedIndex]} // 초기 선택 값
              disabled={disabled}
              onChange={(e) => dispatch({ type: dispatchType, id: id, value: e.target.value })}
            />
            <S.RadioText htmlFor={`${id}${index}`}>{valueValues[index]}</S.RadioText>
          </S.RadioWrap>
        );
      })}
    </S.FdrRadio>
  );
}

export default FdrRadio;
