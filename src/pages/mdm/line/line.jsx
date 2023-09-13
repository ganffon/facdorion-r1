import { useContext, useState, useEffect, useRef, useReducer, useMemo } from "react";
import * as S from "./line.styled";
import FdrInput from "components/input/fdrInput";
import FdrDate from "components/date/fdrDate";
import FdrCombo from "components/combo/fdrCombo";
import getDt from "functions/getDateTime/getDateTime";
import { convertValueText, reverseValueText } from "functions/convertObj/objValueText";
import { restGet } from "api/rest";
import { useLine } from "functions/getCboList/getCboList";
import Contents from "components/layout/frame/contents";
import FdrButton from "components/button/fdrButton";
import { LayoutContext } from "components/layout/layout";

export function Line(props) {
  const { backDrop, snackBar } = useContext(LayoutContext);
  const [lineList] = useLine();
  const filterReducer = (filter, action) => {
    switch (action.type) {
      case "update":
        return { ...filter, [action.id]: action.value };
      case "reset":
        return { ...{ startDate: getDt(-7).dateFull, endDate: getDt.dateFull } };
      default:
        return filter;
    }
  };
  const [filter, filterDispatch] = useReducer(filterReducer, {
    startDate: getDt(-7).dateFull,
    endDate: getDt.dateFull,
  });

  const onClick = async (e) => {
    // filterDispatch({ type: "update", id: "aInput", value: "CCC" });
    // filterDispatch({ type: "update", id: "bInput", value: "DDD" });
    const params = {
      // start_date: filter.startDate,
      // end_date: filter.endDate,
      line_nm2: filter.aInput,
      prod_nm: filter.bInput,
      model_nm: filter.aCombo?.key,
    };
    const result = await restGet("/std/line", params);
    console.log(result.flag);
    console.log(result.res);
  };
  useEffect(() => {}, []);

  const origin = [
    { line_id: "id1", line_nm: "line1" },
    { line_id: "id2", line_nm: "line2" },
    { line_id: "id3", line_nm: "line3" },
  ];
  const newList = useMemo(() => {
    return convertValueText(origin, "line_id", "line_nm");
  }, [origin]);

  const reverseList = useMemo(() => {
    return reverseValueText(newList, "line_id", "line_nm");
  }, [newList]);

  const onSearch = () => {
    snackBar.set({ ...snackBar.state, open: true, type: "error" });
    // setTimeout(() => {
    //   snackBar.set({ ...snackBar.state, open: false });
    // }, 4000);
    backDrop.set(true);
    setTimeout(() => {
      backDrop.set(false);
    }, 10000);
  };

  return (
    <Contents>
      <S.Header>
        {/* <FdrDate id={"startDate"} label={"조회기간"} value={filter.startDate} dispatch={filterDispatch} />
        <FdrDate id={"endDate"} limit={"after"} value={filter.endDate} dispatch={filterDispatch} />
        <FdrInput id={"aInput"} label={"A Input"} value={filter.aInput} dispatch={filterDispatch} />
        <FdrInput id={"bInput"} label={"B Input"} value={filter.bInput} dispatch={filterDispatch} />
        <FdrCombo id={"aCombo"} label={"test"} list={lineList} value={filter.aCombo} dispatch={filterDispatch} /> */}
        <FdrButton type={"search"} outline={false} onClick={onSearch} />
        <FdrButton type={"addRow"} />
        <FdrButton type={"cancelRow"} color={"success"} outline={false} />
        <FdrButton type={"delete"} color={"success"} />
        <FdrButton type={"edit"} color={"warning"} outline={false} />
        <FdrButton type={"new"} color={"warning"} />
        <FdrButton type={"save"} color={"error"} outline={false} />
        <FdrButton type={"mapping"} color={"error"} />
        {/* <FdrButton type={"vector"} color={"success"} />
        <FdrButton type={"ok"} color={"success"} />
        <FdrButton type={"cancel"} color={"success"} />
        <FdrButton type={"sync"} color={"warning"} outline={false} />
        <FdrButton type={"download"} color={"warning"} outline={false} />
        <FdrButton type={"detail"} color={"warning"} outline={false} />
        <FdrButton type={"clean"} color={"warning"} outline={false} />
        <FdrButton type={"reset"} color={"warning"} outline={false} /> */}
      </S.Header>
      <S.Main></S.Main>
    </Contents>
  );
}
