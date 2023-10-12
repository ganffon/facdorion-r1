import { rest } from "api/rest";

const convert = (originalData, params) => {
  const filterKeys = Object.keys(params);
  originalData = originalData.map((gridData) => {
    let filteredData = {};
    filterKeys.forEach((key) => {
      if (gridData.hasOwnProperty(key)) {
        if (params[key] === true && gridData[key] === null) {
          filteredData[key] = false;
        } else if (params[key] === 0) {
          filteredData[key] = isNaN(Number(gridData[key])) ? null : Number(gridData[key]);
        } else if (key.endsWith("_date") || key.endsWith("_time")) {
          filteredData[key] = gridData[key] === "" ? null : gridData[key];
        } else {
          filteredData[key] = gridData[key];
        }
      }
    });
    return filteredData;
  });
  return originalData;
};

const removeNullRows = (data) => {
  return data.filter((obj) => {
    let allNull = true;
    for (const key in obj) {
      if (typeof obj[key] !== "boolean" && obj[key] !== null && obj[key] !== "") {
        allNull = false;
        break;
      }
    }
    return !allNull;
  });
};

const gridPost = (ref, params) => {
  const grid = ref?.current?.gridInst;
  grid.finishEditing();

  let convertData;
  const createData = grid.getData().filter((row) => row.rowState === "addF");

  convertData = convert(createData, params);
  convertData = removeNullRows(convertData);

  return convertData;
};

const gridPut = (ref, params) => {
  const grid = ref?.current?.gridInst;
  grid.finishEditing();

  let convertData;
  // const updatedData = grid?.getModifiedRows().updatedRows;

  const updatedData = grid?.getData().filter((data) => data.rowState === "editF");

  const deleteData = grid?.getCheckedRows();

  //수정한 데이터 중 삭제 체크된 데이터가 있다면 삭제를 우선 적용하기 위해 수정 데이터에서 제거함
  const filteredUpdatedData = updatedData.filter(
    (updateItem) => !deleteData.some((deleteItem) => deleteItem.rowKey === updateItem.rowKey)
  );
  if (filteredUpdatedData) {
    convertData = convert(filteredUpdatedData, params);
  }

  return convertData;
};

const gridDelete = (ref, params) => {
  const grid = ref?.current?.gridInst;
  grid.finishEditing();
  let convertData;
  const deleteData = grid?.getCheckedRows();

  const updatedData = grid?.getData().filter((data) => data.rowState === "addF" || data.rowState === "addS");
  //신규 등록 데이터 중 삭제 체크된 데이터가 있다면 신규 등록을 우선 적용하기 위해 삭제 데이터에서 제거함
  const filteredDeletedData = deleteData.filter(
    (deleteItem) => !updatedData.some((updateItem) => updateItem.rowKey === deleteItem.rowKey)
  );

  if (filteredDeletedData) {
    convertData = convert(filteredDeletedData, params);
  }

  return convertData;
};

const convertMsg = (messageCode) => {
  switch (messageCode) {
    case "PUT_S":
      return "수정 성공";
    case "POST_S":
      return "신규 등록 성공";
    case "DELETE_S":
      return "삭제 성공";
    case "PUT_F":
      return "수정 실패";
    case "POST_F":
      return "신규 등록 실패";
    case "DELETE_F":
      return "삭제 실패";
    default:
  }
};

export const gridModify = async ({
  backDrop,
  snackBar,
  ref,
  URI: { POST: URI_POST, PUT: URI_PUT, DELETE: URI_DELETE },
  SCM: { POST: SCM_POST, PUT: SCM_PUT, DELETE: SCM_DELETE },
  onSearch = () => {},
}) => {
  try {
    backDrop.set(true);
    // 수정 -> 신규 -> 삭제 순서로 진행 함
    let messageCode = [];

    const updated = gridPut(ref, SCM_PUT);
    if (updated.length > 0) {
      const putResult = await rest.put(URI_PUT, updated);
      if (putResult.flag) {
        messageCode.push("PUT_S");
        const grid = ref?.current?.gridInst;
        const updatedData = grid?.getData().filter((data) => data.rowState === "editF");
        updatedData.forEach((data) => {
          const { rowState, ...rest } = data;
          const updatedRowData = {
            ...rest,
            rowState: "editS",
          };
          grid?.setRow(data.rowKey, updatedRowData);
        });
      } else {
        messageCode.push("PUT_F");
        const msg = messageCode.map((code) => convertMsg(code)).join(", ");
        snackBar.set({ ...snackBar, open: true, type: "error", message: msg });
        return;
      }
    }

    const created = gridPost(ref, SCM_POST);
    if (created.length > 0) {
      const postResult = await rest.post(URI_POST, created);
      if (postResult.flag) {
        messageCode.push("POST_S");
        const grid = ref?.current?.gridInst;
        const updatedData = grid?.getData().filter((data) => data.rowState === "addF");
        updatedData.forEach((data) => {
          const { rowState, ...rest } = data;
          const updatedRowData = {
            ...rest,
            rowState: "addS",
          };
          grid?.setRow(data.rowKey, updatedRowData);
        });
      } else {
        messageCode.push("POST_F");
        const msg = messageCode.map((code) => convertMsg(code)).join(", ");
        snackBar.set({ ...snackBar, open: true, type: "error", message: msg });
        return;
      }
    }

    const deleted = gridDelete(ref, SCM_DELETE);
    if (deleted?.length > 0) {
      const deleteResult = await rest.delete(URI_DELETE, deleted);
      if (deleteResult.flag) {
        messageCode.push("DELETE_S");
      } else {
        messageCode.push("DELETE_F");
        const msg = messageCode.map((code) => convertMsg(code)).join(", ");
        snackBar.set({ ...snackBar, open: true, type: "error", message: msg });
        return;
      }
    }

    const msg = messageCode.map((code) => convertMsg(code)).join(", ");
    if (msg) {
      snackBar.set({ ...snackBar, open: true, type: "success", message: msg });
    }

    onSearch();
  } catch (err) {
    console.log(err);
  } finally {
    backDrop.set(false);
  }
};
export const gridCreate = async (backDrop, snackBar, ref, SCM_POST, URI_POST, setIsCreate = () => {}) => {
  try {
    backDrop.set(true);
    const created = gridPost(ref, SCM_POST);
    if (created.length > 0) {
      const postResult = await rest.post(URI_POST, created);
      if (postResult.flag) {
        snackBar.set({ ...snackBar, open: true, type: "success", message: "신규 등록 성공" });
      } else {
        snackBar.set({ ...snackBar, open: true, type: "error", message: "신규 등록 실패" });
        return;
      }
    }

    setIsCreate(false);
  } catch (err) {
    console.log(err);
  } finally {
    backDrop.set(false);
  }
};
