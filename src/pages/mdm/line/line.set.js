import "components/grid/gridStyle.css";
import { col } from "components/grid/gridColumnSetting";
import { WIDTH } from "constant/grid";
import { req } from "components/grid/gridFunc";
import { CN } from "api/uri";

function LineSet(isCreate, ref, lineList) {
  const columns = [
    col.text("line_cd", req(CN.line_cd), isCreate, WIDTH.M),
    col.text("line_nm", CN.line_nm, true, WIDTH.M),
    col.check("rework_fg", CN.rework_fg, true, ref),
    col.number("number", "숫자형", true),
    col.time("time", "시간형", true),
    col.list("list_id", "list_nm", "리스트", lineList, true),
    col.select("select", "셀렉트", true),
    col.textC("create_at", CN.create_at),
    col.textC("create_user_nm", CN.create_user_nm),
    col.textC("update_at", CN.update_at),
    col.textC("update_user_nm", CN.update_user_nm),
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
  // const header = [];
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
