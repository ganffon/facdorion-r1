/**
 * yyyy, MM, dd, days, yyyy-MM-dd, hh, mm, ss 형식 출력 함수
 * @param {number} custom 입력안하면 기본 값 0, 정수 입력
 * @returns 0 인 경우 현재 날짜 반환 | 정수 입력한 경우 날짜에 플러스해서 출력
 */
function getDt(custom = 0) {
  // 현재 날짜 기본 값 형태로 가져오기
  const getToday = () => {
    const today = new Date();
    if (custom !== 0) {
      today.setDate(today.getDate() + custom);
    }
    return today;
  };

  // 년(yyyy) 가져오기
  const getYear = () => {
    const today = new Date();
    if (custom !== 0) {
      return String(today.getFullYear() + custom);
    } else {
      return String(today.getFullYear());
    }
  };

  // 월(MM) 가져오기
  const getMonth = () => {
    const today = new Date();
    if (custom !== 0) {
      today.setMonth(today.getMonth() + custom);
    }
    return String(today.getMonth() + 1).padStart(2, "0");
  };

  // 일(dd) 가져오기
  const getDate = () => {
    const today = new Date();
    if (custom !== 0) {
      today.setDate(today.getDate() + custom);
    }
    return String(today.getDate()).padStart(2, "0");
  };

  // 요일 가져오기
  const getDays = () => {
    const day = new Array("일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일");
    const today = new Date();
    if (custom !== 0) {
      today.setDate(today.getDate() + custom);
    }
    return day[today.getDay()];
  };

  // yyyy-MM-dd 형태로 가져오기
  const getDateFull = () => {
    const today = new Date();
    if (custom !== 0) {
      today.setDate(today.getDate() + custom);
    }
    const year = String(today.getFullYear());
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + date;
  };

  // 시(hh) 가져오기
  const getHour = () => {
    const today = new Date();
    if (custom !== 0) {
      today.setHours(today.getHours() + custom);
    }
    return String(today.getHours()).padStart(2, "0");
  };

  // 분(mm) 가져오기
  const getMinute = () => {
    const today = new Date();
    if (custom !== 0) {
      today.setMinutes(today.getMinutes() + custom);
    }
    return String(today.getMinutes()).padStart(2, "0");
  };

  // 초(ss) 가져오기
  const getSecond = () => {
    const today = new Date();
    if (custom !== 0) {
      today.setSeconds(today.getSeconds() + custom);
    }
    return String(today.getSeconds()).padStart(2, "0");
  };

  // hh:mm 형태로 가져오기
  const getTime = () => {
    const today = new Date();
    if (custom !== 0) {
      today.setMinutes(today.getMinutes() + custom);
    }
    const hour = String(today.getHours()).padStart(2, "0");
    const minute = String(today.getMinutes()).padStart(2, "0");
    return hour + ":" + minute;
  };

  // 프로그램 버전 : yyyyMMddhhmm 형태로 가져오기
  const getVersion = () => {
    const today = new Date();
    const year = String(today.getFullYear()).slice(2, 4);
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const hour = String(today.getHours()).padStart(2, "0");
    const minute = String(today.getMinutes()).padStart(2, "0");
    return year + month + date + hour + minute;
  };

  return {
    get today() {
      return getToday();
    },
    get year() {
      return getYear();
    },
    get month() {
      return getMonth();
    },
    get date() {
      return getDate();
    },
    get days() {
      return getDays();
    },
    get dateFull() {
      return getDateFull();
    },
    get hour() {
      return getHour();
    },
    get minute() {
      return getMinute();
    },
    get second() {
      return getSecond();
    },
    get time() {
      return getTime();
    },
    get version() {
      return getVersion();
    },
  };
}

Object.defineProperty(getDt, "today", {
  get: function () {
    return getDt().today;
  },
});
Object.defineProperty(getDt, "year", {
  get: function () {
    return getDt().year;
  },
});
Object.defineProperty(getDt, "month", {
  get: function () {
    return getDt().month;
  },
});
Object.defineProperty(getDt, "date", {
  get: function () {
    return getDt().date;
  },
});
Object.defineProperty(getDt, "days", {
  get: function () {
    return getDt().days;
  },
});
Object.defineProperty(getDt, "dateFull", {
  get: function () {
    return getDt().dateFull;
  },
});
Object.defineProperty(getDt, "hour", {
  get: function () {
    return getDt().hour;
  },
});
Object.defineProperty(getDt, "minute", {
  get: function () {
    return getDt().minute;
  },
});
Object.defineProperty(getDt, "second", {
  get: function () {
    return getDt().second;
  },
});
Object.defineProperty(getDt, "time", {
  get: function () {
    return getDt().time;
  },
});
Object.defineProperty(getDt, "version", {
  get: function () {
    return getDt().version;
  },
});

export default getDt;
