import React, { useEffect, useRef } from "react";
import * as S from "./fdrDate.styled";

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
    limit = "",
  } = props;

  const refDate = useRef("");

  useEffect(() => {
    refDate.current = value;
    // 처음 셋팅 된 날짜 저장
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const onChange = (e) => {
    let selectedDate = e.target.value;
    switch (limit) {
      case "after":
        if (refDate.current < selectedDate) {
          selectedDate = refDate.current;
        }
        break;
      case "before":
        if (refDate.current > selectedDate) {
          selectedDate = refDate.current;
        }
        break;
      default:
    }
    dispatch({ type: dispatchType, id: e.target.id, value: selectedDate });
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
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default FdrDate;
