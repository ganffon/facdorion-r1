import { useContext, useState, useEffect, useRef, useReducer, useMemo } from "react";
import * as S from "./process.styled";
import FdrInput from "components/input/fdrInput";
import FdrDate from "components/date/fdrDate";
import FdrCombo from "components/combo/fdrCombo";
import getDt from "functions/getDateTime/getDateTime";
import { convertValueText, reverseValueText } from "functions/convertObj/cboList/objValueText";
import { restGet } from "api/rest";
import { useLine } from "functions/getCboList/getCboList";

export function Process(props) {
  return (
    <S.Contents>
      <S.Header></S.Header>
    </S.Contents>
  );
}
