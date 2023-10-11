import { useContext, useState, useEffect, useRef, useReducer, useMemo } from "react";
import * as S from "./line.styled";
import FdrInput from "components/input/fdrInput";
import FdrDate from "components/date/fdrDate";
import FdrCombo from "components/combo/fdrCombo";
import getDt from "functions/getDateTime/getDateTime";
import { convertValueText, reverseValueText } from "functions/convertObj/cboList/objValueText";
import { rest } from "api/rest";
import { useLine, useProcess } from "functions/getCboList/getCboList";
import Contents from "components/layout/frame/contents";
import FdrButton from "components/button/fdrButton";
import { LayoutContext } from "components/layout/layout";
import FdrGrid from "components/grid/fdrGrid";
import LineSet from "./line.set";
import FdrRadio from "components/radio/fdrRadio";
import FdrCheckBox from "components/checkBox/fdrCheckBox";
import { SCM_MDM, URI_MDM } from "api/uri";
import { gridCreate, gridModify } from "functions/convertObj/grid/transferParams";
import FdrButtonGroup from "components/button/fdrButtonGroup";
import condition from "functions/gridColumnCondition/condition";
import FdrModal from "components/modal/fdrModal";

export function Line(props) {
  const { backDrop, snackBar } = useContext(LayoutContext);
  const [gridData, setGridData] = useState(null);
  const refGrid = useRef(null);
  const refGridModal = useRef(null);
  const [lineList] = useLine();
  const [processList] = useProcess();
  const [isEditable, setIsEditable] = useState(false);
  const { header, columnsModify, columnsPost, columnOptions } = LineSet(isEditable, refGrid, processList);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    // const result = await rest.get("/std/line", params);
  };

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
      const data = await rest.get(URI_MDM.LINE.GET.INCLUDE_REWORK, params);
      setGridData(data.res);
    } catch (err) {
      alert(err);
    } finally {
      backDrop.set(false);
    }
  };

  const onModify = () => {
    // gridModify(
    //   backDrop,
    //   snackBar,
    //   refGrid,
    //   SCM_MDM.LINE.PUT,
    //   URI_MDM.LINE.PUT.LINE,
    //   SCM_MDM.LINE.DELETE,
    //   URI_MDM.LINE.DELETE.LINE,
    //   onSearch
    // );
    const grid = refGrid?.current?.gridInst;
    console.log(grid);
    // console.log(grid.validate());
  };
  const onCreate = () => {
    gridCreate(backDrop, snackBar, refGrid, SCM_MDM.LINE.POST, URI_MDM.LINE.POST.LINE, setIsEditable);
  };

  const onDblClick = (e) => {
    if (condition(e, ["select"])) {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    onSearch();
  }, [isEditable]);

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
        {/* <FdrButton id={"addRow"} /> */}

        {/* <FdrButton id={"save"} onClick={onSave} />
        <FdrButton id={"delete"} type={"success"} onClick={onDelete} /> */}
        {/* <FdrButton
          id={"edit"}
          type={"warning"}
          onClick={() => {
            setIsReport(true);
          }}
        /> */}
        {/* <FdrButton id={"new"} type={"warning"} />
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
        <FdrGrid
          columnOptions={columnOptions}
          columns={columnsModify}
          rowHeaders={"2"}
          header={header}
          data={gridData}
          draggable={false}
          ref={refGrid}
          isReport={false}
          onDblClick={onDblClick}
          onClick={onClick}
          title={"투입물품"}
        >
          <FdrButtonGroup
            isEditable={isEditable}
            setIsEditable={setIsEditable}
            ref={refGrid}
            onCreate={onCreate}
            onModify={onModify}
            onSearch={onSearch}
          />
        </FdrGrid>
      </S.Main>
      {isModalOpen && (
        <FdrModal position={"top"} setIsOpen={setIsModalOpen} title={"Modal Test"}>
          <FdrGrid
            columnOptions={columnOptions}
            columns={columnsPost}
            rowHeaders={"1"}
            header={header}
            data={gridData}
            draggable={false}
            ref={refGridModal}
            isReport={true}
            onDblClick={onDblClick}
            onClick={onClick}
          />
        </FdrModal>
      )}
    </Contents>
  );
}
