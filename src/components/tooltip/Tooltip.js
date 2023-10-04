import { CN } from "api/uri";

const convertChar = (column) => {
  return column.includes("\n") ? column.replace(/\n/g, " ") : column;
};
export const tooltipStore = {
  line_cd: {
    tooltip: `🔸${convertChar(CN.line_cd)}
    비밀번호를 분실한 사용자를 체크하세요
    체크시 비밀번호는 초기비밀번호로 설정되며 
    사용자는 로그인 시 비밀번호 변경 페이지로 이동합니다`,
  },
  factory_id: {
    tooltip: `🔸${convertChar(CN.line_cd)}
    비밀번호를 분실한 사용자를 체크하세요
    체크시 비밀번호는 초기비밀번호로 설정되며 
    사용자는 로그인 시 비밀번호 변경 페이지로 이동합니다`,
  },
  // pwd_fg: {
  //   columnName: "pwd_fg",
  //   tooltip: `🔸${convertChar(CN.pwd_fg)}
  //   비밀번호를 분실한 사용자를 체크하세요
  //   체크시 비밀번호는 초기비밀번호로 설정되며
  //   사용자는 로그인 시 비밀번호 변경 페이지로 이동합니다`,
  // },
  // admin_fg: {
  //   columnName: "admin_fg",
  //   tooltip: `🔸${convertChar(CN.admin_fg)}
  //   프로그램 메뉴에 대한 전체 권한을 갖는 사용자를 체크하세요
  //   admin계정은 시스템상에서 필수로 등록됩니다.`,
  // },
  // worker_fg: {
  //   columnName: "worker_fg",
  //   tooltip: `🔸${convertChar(CN.worker_fg)}
  //   생산정보에 작업자로 등록할 사원을 체크하세요`,
  // },
  // is_spareparts: {
  //   columnName: "is_spareparts",
  //   tooltip: `🔸${convertChar(CN.is_spareparts)}
  //   설비관리 > SpareParts정보에서
  //   관리하는 품목을 체크하세요`,
  // },
  // apply_fg: {
  //   columnName: "apply_fg",
  //   tooltip: `🔸${convertChar(CN.apply_fg)}
  //   품목 별로 관리하는 검사기준서를 체크하세요`,
  // },
  // lineButton: {
  //   columnName: "lineButton",
  //   tooltip: `🔸라인, 라인부서 데이터를 ERP에서 불러옵니다.`,
  // },
  // productButton: {
  //   columnName: "productButton",
  //   tooltip: `🔸제품 구분, 제품군, 품종군, 품종, 제품분류,
  //   품목, 단위 데이터를 ERP에서 불러옵니다.`,
  // },
  // departmentButton: {
  //   columnName: "departmentButton",
  //   tooltip: `🔸부서 데이터를 ERP에서 불러옵니다.`,
  // },
  // gradeButton: {
  //   columnName: "gradeButton",
  //   tooltip: `🔸직급 데이터를 ERP에서 불러옵니다.`,
  // },
  // employeeButton: {
  //   columnName: "employeeButton",
  //   tooltip: `🔸사원 데이터를 ERP에서 불러옵니다.`,
  // },
  // dataMapping: {
  //   columnName: "dataMapping",
  //   tooltip: `🔸오전 검사값 [06:00 ~ 13:59]
  //      오후 검사값 [14:00 ~ 21:59]
  //      야간 검사값 [22:00 ~ 05:59]

  //      현재 시간에 해당하는 컬럼에
  //      　　설비 값을 실시간으로 불러옵니다.`,
  // },
};
