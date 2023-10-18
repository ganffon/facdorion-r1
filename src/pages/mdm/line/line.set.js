import "components/grid/gridStyle.css";
import { col } from "components/grid/columnSetting";
import { WIDTH } from "constant/grid";
import { req } from "components/grid/gridFunc";
import { CN } from "components/grid/columnName";

function LineSet(isEditable, ref, processList) {
  const columnsModify = [
    col({ type: "id", id: "line_id", key: ["line_cd"] }),
    col({ type: "text", id: "line_cd", name: CN.line_cd["ko"], isEditable: true, required: true }),
    col({ type: "text", id: "line_nm", name: CN.line_nm["ko"], isEditable: true, required: true }),
    col({ type: "check", id: "rework_fg", name: CN.rework_fg["ko"], ref: ref, isEditable: true }),
    col({ type: "number", id: "number", name: CN.number["ko"], isEditable: true, decimal: 2, min: 10, max: 500 }),
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
    col({ type: "text", id: "rowState", name: "rowState" }),
  ];
  const columnsPost = [
    col({ type: "id", id: "line_id", key: ["line_cd"] }),
    col({ type: "text", id: "line_cd", name: CN.line_cd["ko"], required: true }),
    col({ type: "text", id: "line_nm", name: CN.line_nm["ko"], required: true }),
    col({ type: "check", id: "rework_fg", name: CN.rework_fg["ko"], isEditable: false, ref: ref }),
    col({ type: "number", id: "number", name: CN.number["ko"], decimal: 2, min: 10, max: 500 }),
    col({
      type: "list",
      id: "proc_id",
      listID: "proc_nm",
      name: "공정",
      listArray: processList,
      ref: ref,
    }),
    col({ type: "select", id: "select", name: "셀렉트" }),
    col({ type: "text", id: "rowState", name: "rowState" }),
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
