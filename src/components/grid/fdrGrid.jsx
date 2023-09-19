import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from "react";
import * as S from "../fdrComponents.styled";
import Grid from "@toast-ui/react-grid";
import gridTheme from "./gridTheme.js";
import "tui-grid/dist/tui-grid.css";
import { LayoutContext } from "components/layout/layout";

const FdrGrid = forwardRef((props, ref) => {
  const { menuSlide } = useContext(LayoutContext);
  const {
    columnOptions = [],
    columns = [],
    rowHeaders = "2",
    header = [],
    data = [],
    draggable = false,
    onClick = () => {},
    onDblClick = () => {},
    onEditingFinish = () => {},
    isReport = false,
  } = props;

  useEffect(() => {
    gridTheme();
  }, []);

  const handleFocus = () => {
    if (!isReport) {
      if (ref) {
        const Grid = ref?.current?.getInstance();
        const coords = Grid.getFocusedCell();
        if (coords) {
          Grid.startEditing(coords.rowKey, coords.columnName);
        }
      }
    }
  };

  const beforeSelectedRow = useRef("");
  const selectedRow = (e) => {
    if (ref) {
      const Grid = ref?.current?.gridInst;
      if (String(beforeSelectedRow.current)) {
        Grid?.getColumns().map((col) => Grid?.removeCellClassName(beforeSelectedRow.current, col.name, "selectedBack"));
      }
      if (isReport) {
        Grid?.getColumns().map((col) => Grid?.addCellClassName(e?.rowKey, col.name, "selectedBack"));
        beforeSelectedRow.current = e?.rowKey;
      }
    }
  };

  useEffect(() => {
    if (ref) {
      ref.current.gridInst.refreshLayout();
    }
  }, [menuSlide.state]);

  return (
    <S.FdrGrid>
      <Grid
        scrollX={true}
        scrollY={true}
        rowHeaders={rowHeaders === "2" ? ["checkbox", "rowNum"] : ["rowNum"]} // index 컬럼 생성 "rowNum", "checkbox", "radio"
        rowHeight={"auto"} // index 컬럼 자동 높이 조절
        bodyHeight={"fitToParent"}
        heightResizable={false}
        columnOptions={columnOptions}
        columns={columns}
        data={data}
        header={header}
        draggable={draggable}
        ref={ref || null}
        onClick={(e) => {
          onClick(e);
          handleFocus();
          selectedRow(e);
        }}
        onDblclick={onDblClick}
        onEditingFinish={(e) => {
          onEditingFinish(e);
        }}
      />
    </S.FdrGrid>
  );
});

export default FdrGrid;
