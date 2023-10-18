import React, { forwardRef } from "react";
import FdrButton from "./fdrButton";
import { addRow, oneAddRow, removeRow } from "components/grid/gridFunc";
import * as S from "./fdrButtonGroup.styled";

const FdrButtonGroup = forwardRef((props, ref) => {
  const { addRowType = "", onSave = () => {} } = props;
  const onAddRow = () => {
    if (addRowType === "") {
      addRow(ref);
    } else if (addRowType === "onlyOne") {
      oneAddRow(ref);
    }
  };
  const onCancelRow = () => {
    removeRow(ref);
  };

  return (
    <S.FdrButtonGroup>
      <FdrButton id={"addRow"} onClick={onAddRow} />
      <FdrButton id={"cancelRow"} onClick={onCancelRow} />
      <FdrButton id={"save"} onClick={onSave} />
    </S.FdrButtonGroup>
  );
});

export default FdrButtonGroup;
