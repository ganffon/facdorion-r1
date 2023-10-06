import React, { forwardRef, useEffect } from "react";
import FdrButton from "./fdrButton";
import { addRow, oneAddRow, removeRow } from "components/grid/gridFunc";
import * as S from "../fdrComponents.styled";

const FdrButtonGroup = forwardRef((props, ref) => {
  const { addRowType = "", isCreate, setIsCreate, onCreate = () => {}, onModify = () => {} } = props;
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
      {isCreate ? (
        <>
          <FdrButton id={"addRow"} onClick={onAddRow} />
          <FdrButton id={"cancelRow"} onClick={onCancelRow} />
          <FdrButton id={"save"} onClick={onCreate} />
          <FdrButton
            id={"edit"}
            fill={true}
            onClick={() => {
              setIsCreate(false);
            }}
          />
        </>
      ) : (
        <>
          <FdrButton id={"save"} onClick={onModify} />
          <FdrButton
            id={"new"}
            fill={true}
            onClick={() => {
              setIsCreate(true);
            }}
          />
        </>
      )}
    </S.FdrButtonGroup>
  );
});

export default FdrButtonGroup;
