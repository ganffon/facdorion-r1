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
  const createData = grid.getData().filter((row) => row.rowState === "add");

  convertData = convert(createData, params);
  convertData = removeNullRows(convertData);

  return convertData;
};

const gridPut = (ref, params) => {
  const grid = ref?.current?.gridInst;
  grid.finishEditing();

  let convertData;
  const updatedData = grid?.getModifiedRows().updatedRows;
  const deleteData = grid?.getCheckedRows();

  const filteredUpdatedData = updatedData.filter(
    (updateItem) => !deleteData.some((deleteItem) => deleteItem.rowKey === updateItem.rowKey)
  );
  convertData = convert(filteredUpdatedData, params);

  return convertData;
};

const gridDelete = (ref, params) => {
  const grid = ref?.current?.gridInst;
  grid.finishEditing();
  let convertData;
  const deleteData = grid?.getCheckedRows();
  if (deleteData) {
    convertData = convert(deleteData, params);
  }

  return convertData;
};

export const gridModify = async (
  backDrop,
  snackBar,
  ref,
  SCM_PUT,
  URI_PUT,
  SCM_DELETE,
  URI_DELETE,
  onSearch = () => {}
) => {
  try {
    backDrop.set(true);
    // 수정 먼저 처리하고 삭제 진행함
    // 수정 실패하면 삭제 진행하지 않음
    const updated = gridPut(ref, SCM_PUT);
    if (updated.length > 0) {
      const putResult = await rest.put(URI_PUT, updated);
      if (putResult.flag) {
        snackBar.set({ ...snackBar, open: true, type: "success", message: "수정 성공" });
      } else {
        snackBar.set({ ...snackBar, open: true, type: "error", message: "수정 실패" });
        return;
      }
    }

    const deleted = gridDelete(ref, SCM_DELETE);
    if (deleted?.length > 0) {
      const deleteResult = await rest.delete(URI_DELETE, deleted);
      if (deleteResult.flag) {
        snackBar.set({ ...snackBar, open: true, type: "success", message: "수정 및 삭제 성공" });
      } else {
        snackBar.set({ ...snackBar, open: true, type: "error", message: "수정 성공, 삭제 실패" });
        return;
      }
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
