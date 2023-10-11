import { rest } from "api/rest";
import { URI_MDM } from "api/uri";
import { convertValueText } from "functions/convertObj/cboList/objValueText";
import { useState, useEffect } from "react";

const cboSort = (obj) => {
  const sortResult = obj.sort(function (a, b) {
    let x = a.text.toLowerCase();
    let y = b.text.toLowerCase();
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortResult;
};

export const useLine = () => {
  const [lineList, setLineList] = useState([]);
  useEffect(() => {
    const getCboOpt = async () => {
      const result = await rest.get(URI_MDM.LINE.GET.LINE);
      if (result.flag) {
        const convert = convertValueText(result.res, "line_id", "line_nm");
        const sort = cboSort(convert);
        setLineList(sort);
      }
    };
    getCboOpt();
  }, []);
  return [lineList];
};

export const useProcess = () => {
  const [processList, setProcessList] = useState([]);
  useEffect(() => {
    const getCboOpt = async () => {
      const result = await rest.get(URI_MDM.PROCESS.GET.PROCESS);
      if (result.flag) {
        const convert = convertValueText(result.res, "proc_id", "proc_nm");
        const sort = cboSort(convert);
        setProcessList(sort);
      }
    };
    getCboOpt();
  }, []);
  return [processList];
};
