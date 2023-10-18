import {
  gridCheckBox,
  gridButton,
  multiLine,
  gridNumComma,
  gridPassword,
  onlyNumGrid,
  CustomNumberEditor,
} from "./gridFunc";
import condition from "../../functions/gridColumnCondition/condition";
import { WIDTH } from "constant/grid";
import { REG_EXP_GRID_DECIMAL, REG_EXP_GRID_NUMBER } from "functions/regularExpression/regularExpression";

const envHidden = process.env.REACT_APP_COLUMN_HIDDEN === "true" ? true : false;

/**
 * @param {Object} props
 * @param {boolean} props.isEditable
 * @param {('id'|'text'|'number'|'date'|'year'|'month'|'day'|'time'|'list'|'select'|'check'|'button')} props.type
 * @param {string} props.id
 * @param {string} props.listID
 * @param {string} props.name
 * @param {Array} props.key
 * @param {number} props.width
 * @param {string} props.align
 * @param {boolean} props.hidden
 * @param {boolean} props.sortable
 * @param {(boolean|"select")} props.filter
 * @param {boolean} props.whiteSpace
 * @param {boolean} props.rowSpan
 * @param {Array} props.listArray
 * @param {Array} props.ref
 * @param {any} props.buttonFunc
 * @returns {Object}
 */

export const col = (props) => {
  const {
    type = "id" |
      "text" |
      "number" |
      "date" |
      "year" |
      "month" |
      "day" |
      "time" |
      "list" |
      "select" |
      "check" |
      "button",
    id = "",
    key = [],
    name = "",
    listID,
    listArray = [],
    width = WIDTH.S,
    align = "",
    hidden = false,
    sortable = false,
    filter = false | "select",
    whiteSpace = false,
    rowSpan = false,
    isEditable = false,
    ref = [],
    buttonFunc = () => {},
    btnName = "",
    btnNameSwitch = "",
    btnType = "",
    btnDisabled = false,
    required = false,
    min = null,
    max = null,
    decimal = 0,
  } = props;

  let column;
  switch (type) {
    case "id":
      column = {
        name: id,
        header: id,
        minWidth: WIDTH.SS,
        width: WIDTH.SS,
        editor: false,
        align: "left",
        hidden: envHidden,
        sortable: false,
        filter: false,
        whiteSpace: false,
        rowSpan: false,
      };
      if (key.length > 0) {
        column.relations = [
          {
            targetNames: key,
            editable({ value }) {
              return !value;
            },
          },
        ];
      }

      return column;

    case "text":
      column = {
        name: id,
        header: name,
        minWidth: width,
        width: width,
        editor: isEditable ? "text" : false,
        align: align === "" ? "left" : align,
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
        validation: { required: required },
      };

      return column;

    case "list":
      column = {
        className: "gridList",
        name: isEditable ? id : listID,
        header: name,
        minWidth: width,
        width: width,
        align: align === "" ? "left" : align,
        formatter: isEditable ? "listItemText" : null,
        editor: isEditable
          ? {
              type: "select",
              options: {
                listItems: listArray,
              },
            }
          : false,
        copyOptions: {
          useListItemText: true,
        },
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
      };

      return column;
    case "check":
      column = {
        className: isEditable ? "tui-grid-cell-editable" : "base",
        name: id,
        header: name,
        minWidth: width,
        width: width,
        align: "center",
        editor: false,
        renderer: {
          type: gridCheckBox,
          options: {
            name: id,
            disabled: isEditable ? false : true,
            gridInstance: ref?.current?.gridInst,
          },
        },
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
      };

      return column;

    case "button":
      column = {
        name: id,
        header: name,
        minWidth: width,
        width: width,
        align: "center",
        editor: false,
        renderer: {
          type: gridButton,
          options: {
            name: btnName,
            nameSwitch: btnNameSwitch,
            onClick: buttonFunc,
            disabled: btnDisabled,
            btnType: btnType,
          },
        },
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
      };

      return column;

    case "number":
      column = {
        className: "gridNumber",
        name: id,
        header: name,
        minWidth: width,
        width: width,
        align: align === "" ? "right" : align,
        editor: isEditable
          ? {
              type: CustomNumberEditor,
              options: {
                decimal: decimal,
              },
            }
          : false,
        formatter: function (value) {
          return gridNumComma(value.value);
        },
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
        validation: {
          required: required,
          min: min,
          max: max,
          validatorFn: function (value) {
            return {
              valid: REG_EXP_GRID_NUMBER(value, decimal),
              meta: { customErrorCode: "DECIMAL", decimal: decimal },
            };
          },
        },
      };

      return column;
    case "select":
      column = {
        className: "gridSelect",
        name: id,
        header: name,
        minWidth: width,
        width: width,
        align: "left",
        editor: false,
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
      };

      return column;

    case "date":
      column = {
        name: id,
        header: name,
        minWidth: width,
        width: width,
        align: "center",
        editor: isEditable
          ? {
              type: "datePicker",
              options: {
                language: "ko",
                format: "yyyy-MM-dd",
              },
            }
          : false,
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
      };
      return column;

    case "year":
      column = {
        name: id,
        header: name,
        minWidth: width,
        width: width,
        align: "center",
        editor: isEditable
          ? {
              type: "datePicker",
              options: {
                language: "ko",
                format: "yyyy",
                type: "year",
              },
            }
          : false,
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
      };

      return column;

    case "month":
      column = {
        name: id,
        header: name,
        minWidth: width,
        width: width,
        align: "center",
        editor: isEditable
          ? {
              type: "datePicker",
              options: {
                language: "ko",
                format: "yyyy-MM",
                type: "month",
              },
            }
          : false,
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
      };

      return column;

    case "time":
      column = {
        className: "gridTime",
        name: id,
        header: name,
        minWidth: width,
        width: width,
        editor: isEditable ? "text" : false,
        align: "center",
        hidden: hidden,
        sortable: sortable,
        filter: filter,
        whiteSpace: whiteSpace,
        rowSpan: rowSpan,
      };

      return column;

    case "password":
      column = {
        name: id,
        header: name,
        minWidth: WIDTH.M,
        width: WIDTH.M,
        align: "left",
        editor: isEditable ? "password" : false,
        formatter: function (value) {
          return gridPassword(value, true);
        },
        hidden: hidden,
        sortable: false,
        filter: false,
        whiteSpace: false,
        rowSpan: false,
      };

      return column;

    default:
      alert("col type 지정 오류!");
  }
};

export const multiCol = (names = []) => {
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
