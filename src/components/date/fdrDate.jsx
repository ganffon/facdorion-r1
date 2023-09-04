import React, { useRef } from "react";
import * as S from "../fdrComponents.styled";

function FdrDate(props) {
  const {
    id,
    height = "40px",
    width = "160px",
    fontSize = "16px",
    labelFontSize = "",
    label = "",
    value,
    disabled = false,
    dispatch = () => {},
    dispatchType = "update",
    onSearch = () => {},
    className = "",
  } = props;

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <S.FdrDate
      id={id}
      type="date"
      format="yyyy-MM-dd"
      value={value || ""}
      disabled={disabled}
      className={className}
      InputProps={{
        sx: { height: height, fontSize: fontSize },
      }}
      InputLabelProps={{
        style: {
          fontSize: labelFontSize ? labelFontSize : fontSize,
        },
      }}
      width={width}
      label={label}
      onChange={(e) => dispatch({ type: dispatchType, id: e.target.id, value: e.target.value })}
      onKeyDown={onKeyDown}
    />
  );
}

export default FdrDate;
