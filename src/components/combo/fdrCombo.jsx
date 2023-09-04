import React, { useEffect, useRef, useState } from "react";
import * as S from "../fdrComponents.styled";
import { TextField } from "@mui/material";

function FdrCombo(props) {
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
    disableClearable = false,
    disabled = false,
    value = null,
    onSearch = () => {},
    className = "",
  } = props;

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <S.FdrCombo
      disablePortal
      disableClearable={disableClearable}
      id={id}
      size="small"
      disabled={disabled}
      className={className}
      key={(list) => list?.value}
      options={list || null} // 사용자에게 표시되는 목록
      getOptionLabel={(list) => list?.text || ""} // 옵션 객체를 문자열 레이블로 변환하는 방법을 정의
      value={value || null} // 현재 선택된 옵션
      onChange={(e, selected) => {
        dispatch({
          type: dispatchType,
          id: id,
          value: selected ? { value: selected?.value, text: selected?.text } : null,
        });
      }}
      isOptionEqualToValue={(list, selected) => (selected ? list.value === selected.value : null)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          size="small"
          InputProps={{
            ...params.InputProps,
            sx: {
              height: height,
              fontSize: fontSize,
              "& .MuiAutocomplete-endAdornment": {
                top: "50%",
                transform: "translateY(-50%)",
              },
            },
          }}
          InputLabelProps={{
            ...params.InputLabelProps,
            style: {
              fontSize: labelFontSize ? labelFontSize : fontSize,
              height: height,
            },
          }}
        />
      )}
      onKeyDown={onKeyDown}
      width={width}
    />
  );
}

export default FdrCombo;
