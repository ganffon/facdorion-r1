import React, { useEffect, useState } from "react";
import * as S from "./fdrCheckBox.styled";

function FdrCheckBox(props) {
  const {
    id,
    label = "",
    dispatch = () => {},
    dispatchType = "update",
    disabled = false,
    defaultCheckedIndex = [],
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

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setCheckedItems((prev) => [...prev, value]);
    } else {
      setCheckedItems((prev) => prev.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    dispatch({ type: dispatchType, id: id, value: checkedItems });
  }, [checkedItems, dispatch, dispatchType, id]);

  return (
    <S.FdrCheckBox>
      <S.CheckBoxLabel>{label}</S.CheckBoxLabel>
      {valueKeys.map((value, index) => {
        return (
          <S.CheckBoxWrap key={`${id}${index}`}>
            <S.CheckBox
              type={"checkbox"}
              id={`${id}${index}`}
              name={id}
              value={valueKeys[index]}
              defaultChecked={defaultCheckedIndex.includes(index)} // 초기 선택 값
              disabled={disabled}
              onChange={handleCheckboxChange}
              onKeyDown={onKeyDown}
            />
            <S.CheckBoxText htmlFor={`${id}${index}`}>{valueValues[index]}</S.CheckBoxText>
          </S.CheckBoxWrap>
        );
      })}
    </S.FdrCheckBox>
  );
}

export default FdrCheckBox;
