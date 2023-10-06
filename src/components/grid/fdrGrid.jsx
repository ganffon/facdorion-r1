import React, { forwardRef, useContext, useEffect, useMemo, useRef, useState } from "react";
import * as S from "../fdrComponents.styled";
import Grid from "@toast-ui/react-grid";
import gridTheme from "./gridTheme.js";
import "tui-grid/dist/tui-grid.css";
import { LayoutContext } from "components/layout/layout";
import "tui-date-picker/dist/tui-date-picker.css";
import { onlyNum, onlyTime } from "functions/regularExpression/regularExpression";
import { tooltipStore } from "components/tooltip/Tooltip";

const FdrGrid = forwardRef((props, ref) => {
  const { menuSlide } = useContext(LayoutContext);
  const {
    children,
    minusHeight = "0px",
    columnOptions = [],
    columns = [],
    rowHeaders = "2",
    header = [],
    data = [],
    draggable = false,
    onClick = () => {},
    onDblClick = () => {},
    onEditingFinish = () => {},
    isReport = {},
    title = "",
  } = props;

  useEffect(() => {
    gridTheme();
  }, []);

  const handleFocus = () => {
    if (!isReport) {
      if (ref) {
        const grid = ref?.current?.gridInst;
        const coords = grid?.getFocusedCell();
        if (coords) {
          grid?.startEditing(coords.rowKey, coords.columnName);
        }
      }
    }
  };

  const beforeSelectedRow = useRef("");
  const selectedRow = (e) => {
    if (ref) {
      const grid = ref?.current?.gridInst;
      if (String(beforeSelectedRow.current)) {
        grid?.getColumns().map((col) => grid?.removeCellClassName(beforeSelectedRow.current, col.name, "selectedBack"));
      }
      if (isReport) {
        grid?.getColumns().map((col) => grid?.addCellClassName(e?.rowKey, col.name, "selectedBack"));
        beforeSelectedRow.current = e?.rowKey;
      }
    }
  };

  const checkAll = (e) => {
    const grid = ref?.current?.gridInst;
    if (e.columnName === "_checked" && e.rowKey === undefined) {
      const checked = grid.getCheckedRowKeys().length !== grid.getRowCount();
      if (checked) {
        grid.checkAll(checked);
      } else {
        grid.uncheckAll(checked);
      }
    }
  };

  const onRegularExpression = (e) => {
    const grid = ref?.current?.getInstance();
    const column = grid.getColumn(e.columnName);

    switch (column.className) {
      case "gridNumber":
        grid.setValue(e?.rowKey, e?.columnName, onlyNum(e?.value));
        break;
      case "gridTime":
        grid.setValue(e?.rowKey, e?.columnName, onlyTime(e?.value));
        break;
      default:
    }
  };

  const [tooltip, setTooltip] = useState({ x: 0, y: 0, open: false, contents: "" });

  const checkTooltip = (columnName) => {
    const tooltipKey = Object.keys(tooltipStore).find((key) => key === columnName);
    if (tooltipStore[tooltipKey]) {
      const tooltipContent = tooltipStore[tooltipKey].tooltip;
      return tooltipContent;
    } else {
      return false;
    }
  };
  useEffect(() => {
    const Grid = ref.current?.gridInst;

    let tooltipTimeout;
    const handleMouseOver = (e) => {
      const { targetType, nativeEvent, columnName } = e;
      const halfWidth = window.innerWidth / 2;
      if (targetType === "columnHeader") {
        tooltipTimeout = setTimeout(() => {
          const tooltipText = checkTooltip(columnName);
          if (tooltipText) {
            const xAdj = nativeEvent.layerX > halfWidth ? -300 : 80;
            setTooltip({
              ...tooltip,
              x: nativeEvent.layerX + xAdj,
              y: nativeEvent.layerY,
              contents: tooltipText,
              open: true,
            });
          }
        }, 1000);
      }
    };
    const handleMouseOut = (e) => {
      clearTimeout(tooltipTimeout);
      setTooltip({ ...tooltip, contents: "", open: false });
    };

    if (Grid) {
      Grid.eventBus.on("mouseover", handleMouseOver);
      Grid.eventBus.on("mouseout", handleMouseOut);
    }
  }, []);

  useEffect(() => {
    if (ref) {
      ref.current.gridInst.refreshLayout();
    }
  }, [menuSlide.state]);

  const FdrGrid = useMemo(() => {
    let height;
    if (title && children) {
      height = "50px";
    } else if (title && !children) {
      height = "25px";
    } else if (!title && !children) {
      height = "0px";
    } else {
      height = "50px";
    }
    return (
      <S.FdrGridWrap>
        <S.FdrGridHeader $headerHeight={height}>
          {title && <S.FdrGridTitle>{title}</S.FdrGridTitle>}
          {children && children}
        </S.FdrGridHeader>

        <S.FdrGrid $minusHeight={height}>
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
              checkAll(e);
            }}
            onDblclick={onDblClick}
            onEditingFinish={(e) => {
              onRegularExpression(e);
              onEditingFinish(e);
            }}
          />
          {tooltip.open && (
            <S.Tooltip $x={tooltip.x} $y={30}>
              <S.TooltipContents>{tooltip.contents}</S.TooltipContents>
            </S.Tooltip>
          )}
        </S.FdrGrid>
      </S.FdrGridWrap>
    );
  }, [data, columns, columnOptions, tooltip.open]);

  return FdrGrid;
});

export default FdrGrid;
