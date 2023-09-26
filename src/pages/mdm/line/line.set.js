import CN from "json/ColumnName.json";
import "components/grid/gridStyle.css";
import * as C from "constant/Grid.js";
import { col } from "components/grid/gridColumnSetting";

function LineSet(isCreate, ref) {
  const columns = [
    col.text("line_cd", CN.line_cd, isCreate, C.U, C.WIDTH_MIDDLE),
    col.text("line_nm", CN.line_nm, true, C.U, C.WIDTH_MIDDLE),
    // col.number("line_num", "line_num", isCreate),
    // col.date("line_date", "line_date", isCreate),
    // col.time("line_time", "line_time", isCreate),
    // col.button("button", "버튼", "On", onButton),
    col.check("rework_fg", CN.rework_fg, true, ref),
    col.text("create_at", CN.create_at, C.U, C.U, C.WIDTH_LONG, "center"),
    col.text("create_user_nm", CN.create_user_nm, C.U, C.U, C.U, "center"),
    col.text("update_at", CN.update_at, C.U, C.U, C.WIDTH_LONG, "center"),
    col.text("update_user_nm", CN.update_user_nm, C.U, C.U, C.U, "center"),
    col.id("factory_id"),
    col.id("line_id"),
  ];
  const columnsModal = [
    col.text("line_cd", CN.line_cd, true),
    col.text("line_nm", CN.line_nm, true),
    col.check("rework_fg", CN.rework_fg, true),
  ];

  const columnOptions = {
    resizable: true,
    frozenBorderWidth: 3,
    frozenCount: 0, // 🔸frozenColumn은 여기 값만 수정
  };
  const header = col.multi(["rework_fg"]);
  // const header = {
  //🔸headerMerge
  // height: 100,
  // complexColumns: [
  //   {
  //     header: "test",
  //     name: "test_test",
  //     childNames: ["line_cd", "line_nm"],
  //     renderer: CustomGrid.multiLine,
  //   },
  // ],
  //🔸multiLine
  // columns: [
  //   {
  //     name: "line_cd",
  //     renderer: CustomGrid.multiLine,
  //   },
  // ],
  // };
  // const header = {
  //   height: "60",
  //   complexColumns: [
  //     {
  //       header: "ID + Name",
  //       name: "parent1",
  //       childNames: ["id", "name"],
  //     },
  //   ],
  // };

  return {
    columns,
    columnsModal,
    columnOptions,
    header,
  };
}

export default LineSet;
