const URI = {
  MDM: {
    LINE: {
      GET: { LINE: "/std/line", INCLUDE_REWORK: "/std/line/include-rework" },
      POST: { LINE: "/std/line" },
      PUT: { LINE: "/std/line" },
      DELETE: { LINE: "/std/line" },
    },
    PROCESS: {
      GET: { PROCESS: "/std/proc" },
      POST: { PROCESS: "/std/proc" },
      PUT: { PROCESS: "/std/proc" },
      DELETE: { PROCESS: "/std/proc" },
    },
  },
};

export const URI_MDM = URI.MDM;

const SCM = {
  MDM: {
    LINE: {
      POST: {
        line_cd: "string",
        line_nm: "string",
        rework_fg: true,
      },
      PUT: { line_id: "string", line_nm: "string", rework_fg: true },
      DELETE: { line_id: "string" },
    },
  },
};

export const SCM_MDM = SCM.MDM;

export const CN = {
  create_at: "등록일시",
  create_user_nm: "등록자",
  update_at: "수정일시",
  update_user_nm: "수정자",

  line_cd: "라인코드",
  line_nm: "라인명",
  rework_fg: "재작업라인\n여부",
};
