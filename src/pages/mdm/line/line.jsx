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

    try {
      backDrop.set(true);
      const data = await restGet("/std/line");
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
    const edit = refGrid.current.gridInst.getModifiedRows();
    alert(`신규 : ${edit.createdRows.length} 건 / 수정 : ${edit.updatedRows.length} 건`);
  };

  return (
    <Contents>
      <S.Header>
        {/* <FdrDate id={"startDate"} label={"조회기간"} value={filter.startDate} dispatch={filterDispatch} />
        <FdrDate id={"endDate"} limit={"after"} value={filter.endDate} dispatch={filterDispatch} />
        <FdrInput id={"aInput"} label={"A Input"} value={filter.aInput} dispatch={filterDispatch} />
        <FdrInput id={"bInput"} label={"B Input"} value={filter.bInput} dispatch={filterDispatch} />
        <FdrCombo id={"aCombo"} label={"test"} list={lineList} value={filter.aCombo} dispatch={filterDispatch} /> */}
        <FdrButton name={"search"} onClick={onSearch} fill={true} />
        <FdrButton name={"addRow"} />
        <FdrButton name={"cancelRow"} type={"success"} onClick={onCancelRow} />
        <FdrButton name={"delete"} type={"success"} />
        <FdrButton
          name={"edit"}
          type={"warning"}
          onClick={() => {
            setIsEditMode(true);
          }}
        />
        <FdrButton name={"new"} type={"warning"} />
        <FdrButton name={"save"} type={"error"} />
        <FdrButton name={"mapping"} type={"error"} />
        {/* <FdrButton name={"vector"} type={"success"} />
        <FdrButton name={"ok"} type={"success"} />
        <FdrButton name={"cancel"} type={"success"} />
        <FdrButton name={"sync"} type={"warning"}  />
        <FdrButton name={"download"} type={"warning"}  />
        <FdrButton name={"detail"} type={"warning"}  />
        <FdrButton name={"clean"} type={"warning"}  />
        <FdrButton name={"reset"} type={"warning"}  /> */}
      </S.Header>
      <S.Main>
        <FdrButton name={"addRow"} onClick={onAddRow} />
        <FdrButton name={"save"} onClick={onSave} />
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
