import React, { useContext, useCallback, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
// ⬇️ import MUI
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// ⬇️ reference of page
import Logo from "img/customer/cosmo/cosmoLogo.png";
// import AvatarButton from "./AvatarButton";
import { LayoutContext } from "../layout";
import * as S from "./appBar.styled";
import MenuListDev from "routers/MenuListDev";
import { getMenuStepName } from "functions/getMenuStepName/getMenuStepName";
import Avatar from "./avatar";
// import restAPI from "api/restAPI";
// import restURI from "json/restURI.json";
// import NoticeSnack from "components/alert/NoticeSnack";

// import GetBookmarkList from "custom/GetBookmarkList";

function AppBar(props) {
  const { menuSlide, menuStepName } = useContext(LayoutContext);
  // const { isVersionAlert } = props;
  const [isSnackOpen, setIsSnackOpen] = useState({
    open: false,
  });
  const navigate = useNavigate();
  const gotoDashboard = useCallback(() => {
    navigate("/mes");
    // setCurrentMenuName("Dashboard");
  }, []);
  const location = useLocation();
  const locationLength = location.pathname.split("/").length - 1;
  const menuKey = location.pathname.split("/")[locationLength];

  // const getBookmark = async () => {
  //   try {
  //     const result = await restAPI.get(restURI.bookmark + `?&uid=${Cookies.get("userUID")}`);
  //     const data = result?.data?.data?.rows;
  //     const list = GetBookmarkList(data);
  //     setBookmarkList(list);
  //   } catch (err) {
  //     setIsSnackOpen({
  //       ...isSnackOpen,
  //       open: true,
  //       message: err?.response?.data?.message,
  //       severity: "error",
  //       location: "bottomRight",
  //     });
  //   } finally {
  //   }
  // };

  // const onBookmark = async (e) => {
  //   switch (activeBookmark) {
  //     case "onBookmark":
  //       try {
  //         const data = { menu_key: menuKey };
  //         await restAPI.delete(restURI.bookmark, { data });
  //         setActiveBookmark("");
  //         getBookmark();

  //         setIsSnackOpen({
  //           ...isSnackOpen,
  //           open: true,
  //           message: "즐겨찾기 해제",
  //           severity: "success",
  //           location: "bottomRight",
  //         });
  //       } catch (err) {
  //         setIsSnackOpen({
  //           ...isSnackOpen,
  //           open: true,
  //           message: err?.response?.data?.message,
  //           severity: "error",
  //           location: "bottomRight",
  //         });
  //       } finally {
  //       }
  //       break;
  //     default:
  //       try {
  //         await restAPI.post(restURI.bookmark, { menu_key: menuKey });
  //         setActiveBookmark("onBookmark");
  //         getBookmark();
  //         setIsSnackOpen({
  //           ...isSnackOpen,
  //           open: true,
  //           message: "즐겨찾기 등록",
  //           severity: "success",
  //           location: "bottomRight",
  //         });
  //       } catch (err) {
  //         setIsSnackOpen({
  //           ...isSnackOpen,
  //           open: true,
  //           message: err?.response?.data?.message,
  //           severity: "error",
  //           location: "bottomRight",
  //         });
  //       } finally {
  //       }
  //   }
  // };

  // let menuLists = [];
  // if (currentMenuName) {
  //   menuLists = currentMenuName.split("|");
  // }

  const menuSlideIcon = () => {
    return (
      <S.MenuSlideIcon onClick={() => menuSlide.set(!menuSlide.state)}>
        <S.MenuSlide />
        <S.MenuSlide />
        <S.MenuSlide />
      </S.MenuSlideIcon>
    );
  };
  const [step, setStep] = useState({});
  useEffect(() => {
    const menuList = MenuListDev;
    for (let i = 0; getMenuStepName(menuList).path.length > i; i++) {
      if (location.pathname.split("/")[1] === "mes" && location.pathname.split("/")[2] === undefined) {
        window.document.title = `FacdoriOn | Dashboard`;
        if (location.pathname === "/mes") {
          setStep({
            ...step,
            single: <S.StepSingle>{"Dashboard"}</S.StepSingle>,
            header: null,
            main: null,
          });
        }
        break;
      } else {
        if (getMenuStepName(menuList).path[i] === location.pathname.split("/")[2]) {
          window.document.title = `FacdoriOn | ` + getMenuStepName(menuList).name[i];
          const menuName = getMenuStepName(menuList).fullPath[i].split("★");

          if (menuName.length === 2) {
            setStep({
              ...step,
              single: null,
              header: <S.StepHeader>{`${menuName[0]}`}</S.StepHeader>,
              main: <S.StepMain>{menuName[1]}</S.StepMain>,
            });
          } else if (menuName.length === 3) {
            setStep({
              ...step,
              single: null,
              header: <S.StepHeader>{`${menuName[0]} > ${menuName[1]}`}</S.StepHeader>,
              main: <S.StepMain>{menuName[2]}</S.StepMain>,
            });
          }
          break;
        }
      }
    }
  }, [location.pathname]);

  return (
    <S.AppBar>
      <S.LeftSide>
        {menuSlideIcon()}
        <S.Logo id="mainLogo" src={Logo} onClick={gotoDashboard} />
        <S.StepWrap>
          {step.single}
          {step.header}
          {step.main}
        </S.StepWrap>
      </S.LeftSide>
      <S.RightSide>
        {/* {isVersionAlert && (
          <S.UserTextBackground className={"pink"}>
            <S.UserText>
              <S.BuildAlert>{` ※ 현재 구 버전을 사용중입니다. 웹 화면을 새로고침(F5) 해주세요!`}</S.BuildAlert>
            </S.UserText>
          </S.UserTextBackground>
        )} */}
        <S.UserTextBackground>
          <S.UserText>{`${Cookies.get("userName")}님 환영합니다.`}</S.UserText>
        </S.UserTextBackground>
        <Avatar />
      </S.RightSide>
      {/* <NoticeSnack state={isSnackOpen} setState={setIsSnackOpen} /> */}
    </S.AppBar>
  );
}

export default AppBar;
