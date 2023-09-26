import * as C from "constant/Grid";
import { gridCheckBox, gridButton, multiLine, gridNumComma, gridPassword, SVGFlagRenderer } from "./gridFunc";
import * as RE from "../../functions/regularExpression/regularExpression";
import condition from "../../functions/gridColumnCondition/condition";

const hidden = process.env.REACT_APP_COLUMN_HIDDEN === "true" ? true : false;

const id = (name = "", header = "") => {
  return {
    name: name,
    header: header,
    minWidth: C.WIDTH_SHORT,
    editor: false,
    align: "left",
    hidden: hidden,
    sortable: false,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};
const text = (
  name = "",
  header = "",
  isCreate = false,
  hidden = false,
  minWidth = C.WIDTH_SHORT,
  align = "left",
  sortable = false,
  filter = false,
  whiteSpace = false,
  rowSpan = false
) => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    editor: isCreate ? "text" : false,
    align: align,
    hidden: hidden,
    sortable: sortable,
    filter: filter ? "select" : false,
    whiteSpace: whiteSpace,
    rowSpan: rowSpan,
  };
};

const rText = (
  name = "",
  header = "",
  isCreate = false,
  hidden = false,
  minWidth = C.WIDTH_SHORT,
  align = "left",
  sortable = false,
  filter = false,
  whiteSpace = false,
  rowSpan = false
) => {
  return {
    name: name,
    header: "* " + header,
    minWidth: minWidth,
    editor: isCreate ? "text" : false,
    align: align,
    hidden: hidden,
    sortable: sortable,
    filter: filter ? "select" : false,
    whiteSpace: whiteSpace,
    rowSpan: rowSpan,
  };
};

const list = (
  id = "",
  name = "",
  header = "",
  listArray = [],
  isCreate = false,
  minWidth = C.WIDTH_SHORT,
  hidden = false,
  align = "left",
  sortable = false,
  filter = false,
  whiteSpace = false,
  rowSpan = false
) => {
  return {
    name: isCreate ? id : name,
    header: header,
    minWidth: minWidth,
    formatter: isCreate ? "listItemText" : null,
    editor: isCreate
      ? {
          type: "select",
          options: {
            listItems: listArray,
          },
        }
      : false,
    align: align,
    hidden: hidden,
    sortable: sortable,
    filter: filter,
    whiteSpace: whiteSpace,
    rowSpan: rowSpan,
  };
};

const rList = (
  id = "",
  name = "",
  header = "",
  listArray = [],
  isCreate = false,
  minWidth = C.WIDTH_SHORT,
  hidden = false,
  align = "left",
  sortable = false,
  filter = false,
  whiteSpace = false,
  rowSpan = false
) => {
  return {
    name: isCreate ? id : name,
    header: "* " + header,
    minWidth: minWidth,
    formatter: isCreate ? "listItemText" : null,
    editor: isCreate
      ? {
          type: "select",
          options: {
            listItems: listArray,
          },
        }
      : false,
    align: align,
    hidden: hidden,
    sortable: sortable,
    filter: filter,
    whiteSpace: whiteSpace,
    rowSpan: rowSpan,
  };
};

const listGbn = (
  name = "",
  header = "",
  isCreate = false,
  minWidth = C.WIDTH_SHORT,
  hidden = false,
  align = "left",
  sortable = false,
  filter = false,
  whiteSpace = false,
  rowSpan = false
) => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    formatter: isCreate ? "listItemText" : null,
    editor: isCreate
      ? {
          type: "select",
          options: {
            listItems: [
              { text: "제품", value: "제품" },
              { text: "공정", value: "공정" },
            ],
          },
        }
      : false,
    align: align,
    hidden: hidden,
    sortable: sortable,
    filter: filter,
    whiteSpace: whiteSpace,
    rowSpan: rowSpan,
  };
};
const check = (
  name = "",
  header = "",
  isCreate = false,
  ref = null,
  minWidth = C.WIDTH_SUPER_SHORT,
  hidden = false,
  sortable = false,
  filter = false,
  whiteSpace = false,
  rowSpan = false
) => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    editor: false,
    renderer: {
      type: gridCheckBox,
      options: {
        name: name,
        disabled: isCreate ? false : true,
        gridInstance: ref?.current?.gridInst,
      },
    },
    className: isCreate ? "tui-grid-cell-editable" : "",
    align: "center",
    hidden: hidden,
    sortable: sortable,
    filter: filter,
    whiteSpace: whiteSpace,
    rowSpan: rowSpan,
  };
};
const button = (
  name = "",
  header = "",
  btnName = "",
  btnName2 = "",
  func = () => {},
  btnType = "",
  disabled = false
) => {
  return {
    name: name,
    header: header,
    minWidth: C.WIDTH_SHORT,
    align: "center",
    editor: false,
    renderer: {
      type: gridButton,
      options: {
        name: btnName,
        name2: btnName2,
        onClick: func,
        disabled: disabled,
        btnType: btnType,
      },
    },
    hidden: false,
    sortable: false,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};
/**
 *
 * @param {*} name
 * @param {*} header
 * @param {*} isCreate
 * @param {*} minWidth
 * 실제 입력받는 페이지에서 Grid Edit Finish 에 정규표현식 적용해줘야함
 * if (Condition(e, ["columnName"])) {
 *  RE.NumComma(e, refGrid, "columnName");
 * }
 * @returns
 */
const number = (
  name = "",
  header = "",
  isCreate = false,
  minWidth = C.WIDTH_SHORT,
  hidden = false,
  sortable = false,
  filter = false,
  rowSpan = false
) => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    align: "right",
    editor: isCreate ? "text" : false,
    formatter: function (value) {
      return gridNumComma(value.value);
    },
    hidden: hidden,
    sortable: sortable,
    filter: filter,
    whiteSpace: false,
    rowSpan: rowSpan,
  };
};

const rNumber = (
  name = "",
  header = "",
  isCreate = false,
  minWidth = C.WIDTH_SHORT,
  hidden = false,
  sortable = false,
  filter = false,
  rowSpan = false
) => {
  return {
    name: name,
    header: "* " + header,
    minWidth: minWidth,
    align: "right",
    editor: isCreate ? "text" : false,
    formatter: function (value) {
      return gridNumComma(value.value);
    },
    hidden: hidden,
    sortable: sortable,
    filter: filter,
    whiteSpace: false,
    rowSpan: rowSpan,
  };
};

const select = (name = "", header = "", isCreate = false, minWidth = C.WIDTH_SHORT, align = "left") => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    align: align,
    editor: false,
    validation: isCreate
      ? {
          required: true,
        }
      : null,
    hidden: false,
    sortable: false,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};

const rSelect = (name = "", header = "", isCreate = false, minWidth = C.WIDTH_SHORT, align = "left") => {
  return {
    name: name,
    header: "* " + header,
    minWidth: minWidth,
    align: align,
    editor: false,
    validation: isCreate
      ? {
          required: true,
        }
      : null,
    hidden: false,
    sortable: false,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};

const date = (name = "", header = "", isCreate = false, minWidth = C.WIDTH_SHORT, sortable = false) => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    align: "center",
    editor: isCreate
      ? {
          type: "datePicker",
          options: {
            language: "ko",
            format: "yyyy-MM-dd",
          },
        }
      : false,
    hidden: false,
    sortable: sortable,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};

const rDate = (name = "", header = "", isCreate = false, minWidth = C.WIDTH_SHORT, sortable = false) => {
  return {
    name: name,
    header: "* " + header,
    minWidth: minWidth,
    align: "center",
    editor: isCreate
      ? {
          type: "datePicker",
          options: {
            language: "ko",
            format: "yyyy-MM-dd",
          },
        }
      : false,
    hidden: false,
    sortable: sortable,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};

const month = (name = "", header = "", isCreate = false, minWidth = C.WIDTH_SHORT, sortable = false) => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    align: "center",
    editor: isCreate
      ? {
          type: "datePicker",
          options: {
            language: "ko",
            format: "yyyy-MM",
            type: "month",
          },
        }
      : false,
    hidden: false,
    sortable: sortable,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};
const year = (name = "", header = "", isCreate = false, minWidth = C.WIDTH_SHORT, sortable = false) => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    align: "center",
    editor: isCreate
      ? {
          type: "datePicker",
          options: {
            language: "ko",
            format: "yyyy",
            type: "year",
          },
        }
      : false,
    hidden: false,
    sortable: sortable,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};

const time = (
  name = "",
  header = "",
  isCreate = false,
  hidden = false,
  minWidth = C.WIDTH_SUPER_SHORT,
  align = "center",
  sortable = false,
  filter = false,
  whiteSpace = false,
  rowSpan = false
) => {
  return {
    name: name,
    header: header,
    minWidth: minWidth,
    editor: isCreate ? "text" : false,
    align: align,
    hidden: hidden,
    sortable: sortable,
    filter: filter ? "select" : false,
    whiteSpace: whiteSpace,
    rowSpan: rowSpan,
  };
};

const password = (name = "", header = "", isCreate = false, hidden = false) => {
  return {
    name: name,
    header: header,
    minWidth: C.WIDTH_MIDDLE,
    align: "left",
    editor: isCreate ? "password" : false,
    formatter: function (value) {
      return gridPassword(value, true);
    },
    hidden: hidden,
    sortable: false,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};

const rPassword = (name = "", header = "", isCreate = false) => {
  return {
    name: name,
    header: "* " + header,
    minWidth: C.WIDTH_MIDDLE,
    align: "left",
    editor: isCreate ? "password" : false,
    formatter: function (value) {
      return gridPassword(value, true);
    },
    hidden: false,
    sortable: false,
    filter: false,
    whiteSpace: false,
    rowSpan: false,
  };
};

const multi = (names = []) => {
  const columns = names.map((name) => {
    return {
      name: name,
      renderer: multiLine,
    };
  });

  return {
    columns,
  };
};

const RENumComma = (e, refGrid, columnName) => {
  if (condition(e, [columnName])) {
    RE.numComma(e, refGrid, columnName);
  }
};

export const col = {
  id,
  text,
  rText,
  list,
  rList,
  listGbn,
  check,
  button,
  number,
  rNumber,
  select,
  rSelect,
  date,
  rDate,
  month,
  year,
  time,
  password,
  rPassword,
  multi,
  RENumComma,
};
