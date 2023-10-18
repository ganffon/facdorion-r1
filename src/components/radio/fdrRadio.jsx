import React, { useEffect } from "react";
import * as S from "./fdrRadio.styled";

function FdrRadio(props) {
  const {
    id,
    label = "",
    dispatch = () => {},
    dispatchType = "update",
    disabled = false,
    defaultCheckedIndex = 0,
    value = {},
    onSearch = () => {},
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
          <S.RadioWrap key={`${id}${index}`} onKeyDown={onKeyDown}>
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
