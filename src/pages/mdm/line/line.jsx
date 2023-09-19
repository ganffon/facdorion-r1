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
import FdrGrid from "components/grid/fdrGrid";
import LineSet from "./line.set";
import { oneAddRow, addRow, removeRow } from "components/grid/gridFunc";
import FdrRadio from "components/radio/fdrRadio";
import FdrCheckBox from "components/checkBox/fdrCheckBox";

export function Line(props) {
  const { backDrop, snackBar } = useContext(LayoutContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [gridData, setGridData] = useState(null);
  const refGrid = useRef(null);
  const [lineList] = useLine();
  const { rowHeaders, rowHeadersModal, header, columns, columnsModal, columnOptions, inputSet } = LineSet(
    isEditMode,
    refGrid
  );
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

  const onSearch = async () => {
    // snackBar.set({ ...snackBar.state, open: true, type: "warning", message: "Lot No와 제품명을 입력해야 합니다." });
    // // snackBar.set({ ...snackBar.state, open: true, type: "success", message: "조회 성공이다!!!!" });
    // setTimeout(() => {
    //   snackBar.set({ ...snackBar.state, open: false });
    // }, 4000);

    // backDrop.set(true);
    // setTimeout(() => {
    //   backDrop.set(false);
    // }, 8000);

    const params = {
      line_nm2: filter.aInput,
      prod_nm: filter.bInput,
      model_nm: filter.aCombo?.value,
      subtotal: filter.radioTest,
      check: filter.checkTest,
    };

    try {
      backDrop.set(true);
      const data = await restGet("/std/line", params);
      setGridData(data.res);
    } catch (err) {
      alert(err);
    } finally {
      backDrop.set(false);
    }
  };

  const onAddRow = () => {
    addRow(refGrid);
    // oneAddRow(refGrid);
  };
  const onCancelRow = () => {
    removeRow(refGrid);
  };
  const onSave = () => {
    // const edit = refGrid?.current?.gridInst?.getModifiedRows();
    // alert(`신규 : ${edit.createdRows.length} 건 / 수정 : ${edit.updatedRows.length} 건`);
  };

  return (
    <Contents>
      <S.Header>
        <FdrDate id={"startDate"} label={"조회기간"} value={filter.startDate} dispatch={filterDispatch} />
        <FdrDate id={"endDate"} limit={"after"} value={filter.endDate} dispatch={filterDispatch} />
        <FdrInput id={"aInput"} label={"A Input"} value={filter.aInput} dispatch={filterDispatch} />
        <FdrInput id={"bInput"} label={"B Input"} value={filter.bInput} dispatch={filterDispatch} />
        <FdrCombo id={"aCombo"} label={"test"} list={lineList} value={filter.aCombo} dispatch={filterDispatch} />
        <FdrRadio
          id={"radioTest"}
          label={"소계"}
          value={{ prod: "품목", model: "제품군" }}
          dispatch={filterDispatch}
          defaultCheckedIndex={1}
        />
        <FdrCheckBox
          id={"checkTest"}
          label={"소계"}
          value={{ 품목: "품목", 제품군: "제품군" }}
          dispatch={filterDispatch}
        />
        <FdrButton id={"search"} onClick={onSearch} fill={true} />
        {/* <FdrButton id={"addRow"} />
        <FdrButton id={"cancelRow"} type={"success"} onClick={onCancelRow} />
        <FdrButton id={"delete"} type={"success"} />
        <FdrButton
          id={"edit"}
          type={"warning"}
          onClick={() => {
            setIsEditMode(true);
          }}
        />
        <FdrButton id={"new"} type={"warning"} />
        <FdrButton id={"save"} type={"error"} />
        <FdrButton id={"mapping"} type={"error"} /> */}
        {/* <FdrButton id={"vector"} type={"success"} />
        <FdrButton id={"ok"} type={"success"} />
        <FdrButton id={"cancel"} type={"success"} />
        <FdrButton id={"sync"} type={"warning"}  />
        <FdrButton id={"download"} type={"warning"}  />
        <FdrButton id={"detail"} type={"warning"}  />
        <FdrButton id={"clean"} type={"warning"}  />
        <FdrButton id={"reset"} type={"warning"}  /> */}
      </S.Header>
      <S.Main>
        <FdrButton id={"addRow"} onClick={onAddRow} />
        <FdrButton id={"save"} onClick={onSave} />
        <FdrGrid
          columnOptions={columnOptions}
          columns={columns}
          rowHeaders={"2"}
          header={header}
          data={gridData}
          draggable={false}
          ref={refGrid}
          isReport={true}
        />
      </S.Main>
    </Contents>
  );
}
