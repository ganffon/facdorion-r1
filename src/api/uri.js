const URI = {
  MDM: {
    LINE: {
      GET: { LINE: "/std/line", INCLUDE_REWORK: "/std/line/include-rework" },
      POST: { LINE: "/std/line" },
      PUT: { LINE: "/std/line" },
      DELETE: { LINE: "/std/line" },
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
