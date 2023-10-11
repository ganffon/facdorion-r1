import React, { forwardRef, useEffect } from "react";
import FdrButton from "./fdrButton";
import { addRow, oneAddRow, removeRow } from "components/grid/gridFunc";
import * as S from "../fdrComponents.styled";

const FdrButtonGroup = forwardRef((props, ref) => {
  const { addRowType = "", isEditable, setIsEditable, onCreate = () => {}, onModify = () => {} } = props;
  const onAddRow = () => {
    if (addRowType === "") {
      addRow(ref);
    } else if (addRowType === "one") {
      oneAddRow(ref);
    }
  };
  const onCancelRow = () => {
    removeRow(ref);
  };

  return (
    <S.FdrButtonGroup>
      {isEditable ? (
        <>
          <FdrButton id={"addRow"} onClick={onAddRow} />
          <FdrButton id={"cancelRow"} onClick={onCancelRow} />
          <FdrButton id={"save"} onClick={onCreate} />
          <FdrButton
            id={"edit"}
            fill={true}
            onClick={() => {
              setIsEditable(false);
            }}
          />
        </>
      ) : (
        <>
          <FdrButton id={"addRow"} onClick={onAddRow} />
          <FdrButton id={"save"} onClick={onModify} />
          <FdrButton
            id={"new"}
            fill={true}
            onClick={() => {
              setIsEditable(true);
            }}
          />
        </>
      )}
    </S.FdrButtonGroup>
  );
});

export default FdrButtonGroup;
