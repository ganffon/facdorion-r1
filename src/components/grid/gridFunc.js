export class gridCheckBox {
  constructor(props) {
    const el = document.createElement("input");
    const elName = props.columnInfo.renderer.options.name;
    const disabled = props.columnInfo.renderer.options.disabled;
    const grid = props.columnInfo.renderer.options.gridInstance;

    el.type = "checkbox";
    el.className = "gridCheckbox";
    el.disabled = disabled; //🔸true 값을 주면 체크박스가 회색으로 비활성화됨, CSS로 색이 안바뀜, 방법 좀 찾아주세요!
    el.addEventListener("click", (ev) => {
      const rowKey = el.parentElement.__preactattr_["data-row-key"];

      if (el.checked) {
        grid.setValue(rowKey, elName, true);
      } else {
        grid.setValue(rowKey, elName, false);
      }
    });

    this.el = el;
    this.render(props);
  }
  getElement() {
    return this.el;
  }

  render(props) {
    this.el.checked = Boolean(props.value); //🔸BE에서 받아온 데이터에 따라 체크표시 유무
  }
}

export class gridButton {
  constructor(props) {
    const el = document.createElement("button");
    // const elName = props.columnInfo.renderer.options.name;
    const disabled = props.columnInfo.renderer.options.disabled;
    el.type = "button";
    el.className = "gridButton";
    // el.innerText = elName;
    el.disabled = disabled;
    el.onclick = (e) => {
      const rowKey = el.parentElement.__preactattr_["data-row-key"];
      const columnName = el.parentElement.__preactattr_["data-column-name"];
      if (props.columnInfo.renderer.options.onClick != null) {
        props.columnInfo.renderer.options.onClick(e, rowKey);
      } else {
        console.log("Custom Grid Button Err");
      }
      // props.columnInfo.renderer.options.onClick();
    };

    this.el = el;
    this.render(props);
  }
  getElement() {
    return this.el;
  }

  render(props) {
    const value = props.value;
    const buttonName = props.columnInfo.renderer.options.name;
    const buttonName2 = props.columnInfo.renderer.options.name2;
    const type = props.columnInfo.renderer.options.btnType;
    switch (type) {
      case "copy":
        this.el.innerText = buttonName;
        this.el.disabled = value ? true : false;
        break;
      case "cancel":
        this.el.innerText = buttonName;
        this.el.disabled = value ? false : true;
        break;
      case "packingInput":
        if (buttonName2 === "") {
          this.el.innerText = buttonName;
        } else {
          this.el.innerText = value ? buttonName : buttonName2;
          this.el.disabled = value === 2 ? false : true;
          this.el.className = value === 2 ? "gridButton grid__button--apply" : "gridButton grid__button--disabled";
        }
        break;
      case "inspDocumentApply":
        if (buttonName2 === "") {
          this.el.innerText = buttonName;
        } else {
          this.el.innerText = value ? buttonName : buttonName2;
        }
        this.el.className = value ? "gridButton grid__button--apply" : "gridButton";
        break;
      case "downtimeInput":
        if (buttonName2 === "") {
          this.el.innerText = buttonName;
        } else {
          switch (value) {
            case 0:
              this.el.innerText = buttonName;
              this.el.disabled = false;
              break;
            case 1:
              this.el.innerText = buttonName2;
              this.el.disabled = true;
              break;
            case 2:
              this.el.innerText = buttonName;
              this.el.disabled = true;
              break;
            default:
          }
        }
        break;
      default:
        if (buttonName2 === "") {
          this.el.innerText = buttonName;
        } else {
          this.el.innerText = value ? buttonName : buttonName2;
        }
    }
  }
}

/**
 * ⬇️ step 값을 변수로 받아왔더니 동작을 안함
 * EditorNumber(정수)
 * EditorFloat1(소수점1자리)
 * EditorFloat2(소수점2자리)
 * EditorFloat3(소수점3자리)
 * 총 4종류를 만들어 두었음.
 */
//🔸Grid Cell Type 정수
export class EditorNumber {
  constructor(props) {
    const el = document.createElement("input");
    el.type = "number";
    el.step = 1;
    el.className = "number";
    el.value = props.value;

    this.el = el;
  }
  getElement() {
    return this.el;
  }
  getValue() {
    return this.el.value;
  }
}
//🔸Grid Cell Type 소수점 1자리
export class EditorFloat1 {
  constructor(props) {
    const el = document.createElement("input");
    el.type = "number";
    el.step = 0.1;
    el.className = "number";
    el.value = props.value;

    this.el = el;
  }
  getElement() {
    return this.el;
  }
  getValue() {
    return this.el.value;
  }
}
//🔸Grid Cell Type 소수점 2자리
export class EditorFloat2 {
  constructor(props) {
    const el = document.createElement("input");
    el.type = "number";
    el.step = 0.01;
    el.className = "number";
    el.value = props.value;

    this.el = el;
  }
  getElement() {
    return this.el;
  }
  getValue() {
    return this.el.value;
  }
}
//🔸Grid Cell Type 소수점 3자리
export class EditorFloat3 {
  constructor(props) {
    const el = document.createElement("input");
    el.type = "number";
    el.step = 0.001;
    el.className = "number";
    el.value = props.value;

    this.el = el;
  }
  getElement() {
    return this.el;
  }
  getValue() {
    return this.el.value;
  }
}

/**
 *
 * @param {any} value 숫자 3자리 마다 콤마를 찍음
 * @returns
 */
export function gridNumComma(value) {
  if (value !== null) {
    // 소수점 이하 자리 수를 구함
    const decimalLength = value.toString().includes(".") ? value.toString().split(".")[1].length : 0;
    const int = value.toString().split(".")[0];
    const decimal = value.toString().split(".")[1];
    const formattedValue =
      decimalLength > 0
        ? int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + decimal
        : value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
  } else {
    return null;
  }
}

/**
 *
 * @param {any} value yyyy-MM-dd 형식 표현
 * @returns
 */
export function DateFormat(value) {
  if (value.value !== null) {
    return value.value.toString().substr(0, 10);
  } else {
    return null;
  }
}
/**
 *
 * @param {any} value
 * @param {boolean} fg true인 경우 비밀번호 입력 문자 수 만큼 치환하고, false인 경우 비밀번호 치환 문자 수 고정
 * @returns
 */
export function gridPassword(value, fg) {
  if (value.value !== null) {
    if (fg) {
      return value.value.toString().replace(value.value.toString(), () => {
        let passwordStr = "";
        for (let i = 0; i < value.value.toString().length; i++) {
          passwordStr = passwordStr + "*";
        }
        return passwordStr;
      });
    } else {
      return value.value.toString().replace(value.value.toString(), "●●●●");
    }
  } else {
    return null;
  }
}

export class multiLine {
  constructor(props) {
    const columnInfo = props.columnInfo;
    const el = document.createElement("div");
    el.className = "headerMultiLine";
    el.textContent = columnInfo.header;
    this.el = el;
  }
  getElement() {
    return this.el;
  }
  render(props) {
    this.el.textContent = props.columnInfo.header;
  }
}

export const copyRow = (refGrid, setGridData, columns, copyColumnNames, btnRowKey = null) => {
  let rowKey = null;
  if (!btnRowKey) {
    rowKey = refGrid?.current?.gridInst?.getFocusedCell().rowKey; //현재 선택된 cell의 rowKey 가져오기
  } else {
    rowKey = btnRowKey;
  }
  if (rowKey) {
    const targetGridData = refGrid?.current?.gridInst?.getData(); //현재 Grid Data 모두 가져오기
    const maxRowCount = targetGridData.length;
    targetGridData.forEach((item) => {
      item.copyRow = item.copyRow === 1 ? 1 : 0;
      item.cancelRow = item.cancelRow === 1 ? 1 : 0;
    });
    const makesCopyRow = {}; //Copy 할 Row 를 만들기 시작
    columns.forEach((column) => {
      if (copyColumnNames.includes(column.name)) {
        //copyColumnNames 에 배열로 전달받은 컬럼만 내용을 복사함
        makesCopyRow[column.name] = targetGridData[rowKey]?.[column.name];
      } else {
        makesCopyRow[column.name] = null;
      }
    });
    makesCopyRow.copyRow = 1;
    makesCopyRow.cancelRow = 1;

    if (Number(rowKey) !== maxRowCount - 1) {
      //연속 복사 시 복사한 다음 row에 추가될 수 있도록 조치함
      for (let i = Number(rowKey) + 1; i < Number(maxRowCount) + 1; i++) {
        if (targetGridData[i]?.copyRow === 0) {
          rowKey = i;
          break;
        }
        if (i === maxRowCount) {
          rowKey = maxRowCount;
        }
      }
    } else {
      rowKey = Number(rowKey) + 1;
    }

    // targetGridData.splice(Number(rowKey) + 1, 0, makesCopyRow);
    targetGridData.splice(rowKey, 0, makesCopyRow);
    const copiedData = targetGridData.map((item, index) => {
      //최종적으로 만들어진 데이터에 uniqueKey와 rowKey를 재선언함
      return { ...item, uniqueKey: `@dataKey${Date.now()}-${index}`, rowKey: index };
    });
    setGridData(copiedData);
  }
};
export const cancelRow = (ref, setGridData, btnRowKey = null) => {
  if (ref) {
    let rowKey = null;
    if (!btnRowKey) {
      rowKey = ref?.current?.gridInst?.getFocusedCell().rowKey; //현재 선택된 cell의 rowKey 가져오기
    } else {
      rowKey = btnRowKey;
    }
    if (rowKey) {
      ref?.current?.gridInst?.removeRow(rowKey); // 일단 지우고
      const targetGridData = ref?.current?.gridInst?.getData(); //현재 Grid Data 모두 가져오기
      targetGridData.forEach((item) => {
        item.copyRow = item.copyRow === 1 ? 1 : 0;
        item.cancelRow = item.cancelRow === 1 ? 1 : 0;
      });
      const cancelData = targetGridData.map((item, index) => {
        //최종적으로 만들어진 데이터에 uniqueKey와 rowKey를 재선언함
        return { ...item, uniqueKey: `@dataKey${Date.now()}-${index}`, rowKey: index };
      });
      setGridData(cancelData);
    }
  }
};
/**
 * 일반적인 상황에서의 [행 추가] 버튼
 */
export const addRow = (ref) => {
  if (ref) {
    const grid = ref?.current?.gridInst;
    grid?.appendRow({ rowState: "add" });
    const rowKey = grid?.getRowCount() - 1;
    console.log(grid);
    grid?.addCellClassName(rowKey, "line_cd", "tui-grid-cell-editable");
    grid?.focus(rowKey, 0);
  }
};
/**
 * Header Grid에서의 [행 추가] 버튼 단, 1회만 동작!
 */
export const oneAddRow = (ref) => {
  if (ref) {
    const grid = ref?.current?.gridInst;
    const allRows = grid?.store?.data?.rawData;
    const hasAppendedRow = allRows?.some((row) => row.rowState);
    if (hasAppendedRow) {
      return;
    }
    grid?.appendRow({ rowState: "add" });
    const rowKey = grid?.getRowCount() - 1;
    grid?.focus(rowKey, 0);
  }
};
/**
 * [행 취소] 버튼
 */
export const removeRow = (ref) => {
  if (ref) {
    const grid = ref?.current?.gridInst;
    const coords = grid.getFocusedCell();
    if (coords.rowKey !== null) {
      const selectedRowData = ref.current.gridInst.getRow(coords.rowKey);
      if ("rowState" in selectedRowData) {
        grid?.removeRow(coords.rowKey);
      }
    } else {
      const rowCount = grid?.getData()?.length;
      if (rowCount > 0) {
        const lastRowData = ref.current.gridInst.getRowAt(rowCount - 1);
        const lastRowKey = lastRowData.rowKey;
        if (lastRowData.rowState === "add") {
          grid?.removeRow(lastRowKey);
        }
      }
    }
  }
};

export class SVGFlagRenderer {
  constructor(props) {
    this.el = document.createElement("div"); // 초기에는 div 요소만 생성
  }

  getElement() {
    return this.el;
  }

  render(props) {
    let svgContent;
    if (props.value === "editFlag") {
      svgContent = `<svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1C1.89543 1 1 1.89543 1 3V27C1 28.1046 1.89543 29 3 29H57C58.1046 29 59 28.1046 59 27V3C59 1.89543 58.1046 1 57 1H3ZM4 2C2.89543 2 2 2.89543 2 4V26C2 27.1046 2.89543 28 4 28H56C57.1046 28 58 27.1046 58 26V4C58 2.89543 57.1046 2 56 2H4Z" fill="#5A86D4"/>
      <path d="M18.0781 24H6.55859V7.19531H18.0781V10.5586H9.92188V13.9219H15.4414V17.2852H9.92188V20.6367H18.0781V24ZM33.8984 15.5977C33.8984 16.3711 33.7969 17.1172 33.5938 17.8359C33.3984 18.5469 33.1172 19.2148 32.75 19.8398C32.3828 20.457 31.9453 21.0234 31.4375 21.5391C30.9297 22.0469 30.3633 22.4844 29.7383 22.8516C29.1133 23.2188 28.4414 23.5039 27.7227 23.707C27.0117 23.9023 26.2695 24 25.4961 24H20.4336V7.19531H25.4961C26.2695 7.19531 27.0117 7.29688 27.7227 7.5C28.4414 7.69531 29.1133 7.97656 29.7383 8.34375C30.3633 8.71094 30.9297 9.15234 31.4375 9.66797C31.9453 10.1758 32.3828 10.7422 32.75 11.3672C33.1172 11.9844 33.3984 12.6523 33.5938 13.3711C33.7969 14.082 33.8984 14.8242 33.8984 15.5977ZM30.5352 15.5977C30.5352 14.9023 30.4023 14.25 30.1367 13.6406C29.8789 13.0312 29.5195 12.5 29.0586 12.0469C28.6055 11.5859 28.0703 11.2227 27.4531 10.957C26.8438 10.6914 26.1914 10.5586 25.4961 10.5586H23.8203V20.6367H25.4961C26.1914 20.6367 26.8438 20.5078 27.4531 20.25C28.0703 19.9844 28.6055 19.625 29.0586 19.1719C29.5195 18.7109 29.8789 18.1758 30.1367 17.5664C30.4023 16.9492 30.5352 16.293 30.5352 15.5977ZM39.5 24H36.1367V7.19531H39.5V24ZM49.6836 24H46.332V10.5586H41.2812V7.19531H54.7227V10.5586H49.6836V24Z" fill="#5A86D4"/>
      </svg>`;
      this.el.innerHTML = "";
      this.el.innerHTML = svgContent;
    } else if (props.value === "deleteFlag") {
      svgContent = `<svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1C1.89543 1 1 1.89543 1 3V27C1 28.1046 1.89543 29 3 29H57C58.1046 29 59 28.1046 59 27V3C59 1.89543 58.1046 1 57 1H3ZM4 2C2.89543 2 2 2.89543 2 4V26C2 27.1046 2.89543 28 4 28H56C57.1046 28 58 27.1046 58 26V4C58 2.89543 57.1046 2 56 2H4Z" fill="#FA4852"/>
      <path d="M12.3896 14.7485C12.3896 15.2319 12.3262 15.6982 12.1992 16.1475C12.0771 16.5918 11.9014 17.0093 11.6719 17.3999C11.4424 17.7856 11.1689 18.1396 10.8516 18.4619C10.5342 18.7793 10.1802 19.0527 9.78955 19.2822C9.39893 19.5117 8.979 19.6899 8.52979 19.8169C8.08545 19.939 7.62158 20 7.13818 20H3.97412V9.49707H7.13818C7.62158 9.49707 8.08545 9.56055 8.52979 9.6875C8.979 9.80957 9.39893 9.98535 9.78955 10.2148C10.1802 10.4443 10.5342 10.7202 10.8516 11.0425C11.1689 11.3599 11.4424 11.7139 11.6719 12.1045C11.9014 12.4902 12.0771 12.9077 12.1992 13.3569C12.3262 13.8013 12.3896 14.2651 12.3896 14.7485ZM10.2876 14.7485C10.2876 14.314 10.2046 13.9062 10.0386 13.5254C9.87744 13.1445 9.65283 12.8125 9.36475 12.5293C9.08154 12.2412 8.74707 12.0142 8.36133 11.8481C7.98047 11.6821 7.57275 11.5991 7.13818 11.5991H6.09082V17.8979H7.13818C7.57275 17.8979 7.98047 17.8174 8.36133 17.6562C8.74707 17.4902 9.08154 17.2656 9.36475 16.9824C9.65283 16.6943 9.87744 16.3599 10.0386 15.979C10.2046 15.5933 10.2876 15.1831 10.2876 14.7485ZM20.9883 20H13.7886V9.49707H20.9883V11.5991H15.8906V13.7012H19.3403V15.8032H15.8906V17.8979H20.9883V20ZM29.814 20H22.4604V9.49707H24.5625V17.8979H29.814V20ZM38.1123 20H30.9126V9.49707H38.1123V11.5991H33.0146V13.7012H36.4644V15.8032H33.0146V17.8979H38.1123V20ZM43.9937 20H41.8989V11.5991H38.7422V9.49707H47.1431V11.5991H43.9937V20ZM55.4561 20H48.2563V9.49707H55.4561V11.5991H50.3584V13.7012H53.8081V15.8032H50.3584V17.8979H55.4561V20Z" fill="#FA4852"/>
      </svg>`;
      this.el.innerHTML = "";
      this.el.innerHTML = svgContent;
    } else {
      this.el.innerHTML = "";
    }
  }
}
/**
 * 컬럼명 중 필수값 컬럼명 앞에 * 표시를 하기 위함
 */
export const req = (columnName) => {
  const requireName = "*" + columnName;
  return requireName;
};

// export class CheckboxRenderer {
//   constructor(props) {
//     const { grid, rowKey } = props;

//     // 레이블 생성
//     const label = document.createElement("div");
//     label.className = "rowHeaderCheckBoxWrap";
//     label.setAttribute("for", String(rowKey));

//     // 이미지 요소 추가
//     const imageElement = document.createElement("img");
//     imageElement.className = "rowHeaderImg";
//     imageElement.src = DeleteIcon; // 이미지 경로 설정
//     label.appendChild(imageElement);

//     // 체크박스 요소 추가
//     const checkboxInput = document.createElement("input");
//     checkboxInput.type = "checkbox";
//     checkboxInput.id = String(rowKey);
//     checkboxInput.className = "rowHeaderCheckBox";
//     label.appendChild(checkboxInput);

//     checkboxInput.addEventListener("click", (ev) => {
//       if (ev.shiftKey && CheckboxRenderer.lastChecked !== null) {
//         const start = Math.min(rowKey, CheckboxRenderer.lastChecked);
//         const end = Math.max(rowKey, CheckboxRenderer.lastChecked);
//         const targetState = ev.target.checked;

//         for (let i = start; i <= end; i++) {
//           grid[targetState ? "check" : "uncheck"](i);
//         }

//         ev.stopPropagation(); // 이 이벤트의 추가적인 전파를 막습니다.
//       }

//       CheckboxRenderer.lastChecked = rowKey;
//     });

//     // change 이벤트 리스너에서는 shiftKey 관련 처리를 제거
//     checkboxInput.addEventListener("change", (ev) => {
//       ev.stopPropagation();
//       grid[checkboxInput.checked ? "check" : "uncheck"](rowKey);
//     });

//     this.el = label;
//     this.render(props);
//   }

//   getElement() {
//     return this.el;
//   }

//   render(props) {
//     const checkboxInput = this.el.querySelector("input[type='checkbox']");
//     checkboxInput.checked = Boolean(props.value);
//   }
// }
