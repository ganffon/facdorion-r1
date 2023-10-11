import "components/grid/gridStyle.css";
import { col, colId } from "components/grid/gridColumnSetting";
import { WIDTH } from "constant/grid";
import { req } from "components/grid/gridFunc";
import { CN } from "api/uri";

function LineSet(isEditable, ref, processList) {
  const columnsModify = [
    col({ type: "id", id: "line_id", key: ["line_cd"] }),
    col({ type: "text", id: "line_cd", name: CN.line_cd, isEditable: true, required: true }),
    col({ type: "text", id: "line_nm", name: CN.line_nm, isEditable: true, required: true }),
    col({ type: "check", id: "rework_fg", name: CN.rework_fg, ref: ref, isEditable: true }),
    col({ type: "number", id: "number", name: "숫자형", isEditable: true, decimal: 2 }),
    col({
      type: "list",
      id: "proc_id",
      listID: "proc_nm",
      name: "공정",
      listArray: processList,
      ref: ref,
      isEditable: true,
    }),
    col({ type: "select", id: "select", name: "셀렉트" }),
  ];
  const columnsPost = [
    // col.text("line_cd", req(CN.line_cd), true, WIDTH.M),
    // col.text("line_nm", CN.line_nm, true, WIDTH.M),
    // col.check("rework_fg", CN.rework_fg, true, ref),
    // col.number("number", "숫자형", true),
    // col.time("time", "시간형", true),
    // col.list("list_id", "list_nm", "리스트", lineList, true),
    // col.select("select", "셀렉트", true),
    // col.id("factory_id"),
    // col.id("line_id"),
  ];
  const columnsModal = [
    // col.text("line_cd", CN.line_cd, true),
    // col.text("line_nm", CN.line_nm, true),
    // col.check("rework_fg", CN.rework_fg, true),
  ];

  const columnOptions = {
    resizable: true,
    frozenBorderWidth: 3,
    frozenCount: 0, // 🔸frozenColumn은 여기 값만 수정
  };
  const header = [];
  // const header = col.multi(["rework_fg"]);
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
    columnsModify,
    columnsPost,
    columnsModal,
    columnOptions,
    header,
  };
}

export default LineSet;
