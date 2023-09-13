import React, { useContext, useEffect, useState } from "react";
import * as S from "../fdrComponents.styled";
import { LayoutContext } from "components/layout/layout";
import success from "img/snackBar/success.svg";
import warning from "img/snackBar/warning.svg";
import information from "img/snackBar/information.svg";
import error from "img/snackBar/error.svg";

function FdrSnackBar(props) {
  const { snackBar } = useContext(LayoutContext);
  const [className, setClassName] = useState("");
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    switch (snackBar.state.type) {
      case "error":
        setClassName("error");
        setIcon(error);
        break;
      case "success":
        setClassName("success");
        setIcon(success);
        break;
      case "warning":
        setClassName("warning");
        setIcon(warning);
        break;
      case "information":
        setClassName("information");
        setIcon(information);
        break;
      default:
    }
  }, []);

  useEffect(() => {
    if (snackBar.state.open) {
      setTimeout(() => {
        snackBar.set({ ...snackBar.state, open: false });
      }, 4000);
    }
  }, [snackBar.state.open]);

  return (
    <S.FdrSnackBar className={className}>
      <S.snackBarIcon src={icon} />
      {"서버 통신 500 코드 반환"}
    </S.FdrSnackBar>
  );
}

export default FdrSnackBar;
