export const palette = {
  red: {
    100: "#FFCCCC",
    300: "#FF9999",
    500: "#FF6666",
    700: "#FF3232",
    900: "#FF0000",
  },
  orange: {
    100: "#FFDDCC",
    300: "#FFBE99",
    500: "#FFA366",
    700: "#FF8832",
    900: "#FF7200",
  },
  yellow: {
    100: "#F2F2DA",
    300: "#EFEFA7",
    500: "#F2F279",
    700: "#EFEF47",
    900: "#F2F218",
  },
  green: {
    100: "#DCF2E2",
    300: "#A7EFB7",
    500: "#79F295",
    700: "#47EF6F",
    900: "#18F24E",
  },
  skyBlue: {
    100: "#CCF4FF",
    300: "#99EAFF",
    500: "#66E0FF",
    700: "#32D6FF",
    900: "#00C8FF",
  },
  blue: {
    100: "#A3B7CC",
    300: "#7AA3CC",
    500: "#518ECC",
    700: "#287ACC",
    900: "#0066CC",
  },
  navy: {
    100: "#0067E5",
    300: "#0050B2",
    500: "#00397F",
    700: "#00224C",
    900: "#000B19",
  },
  purple: {
    100: "#EDCCFF",
    300: "#D799FF",
    500: "#BF66FF",
    700: "#A332FF",
    900: "#AE00FF",
  },
  black: {
    100: "#C8C8C8",
    300: "#969696",
    500: "#646464",
    700: "#323232",
    900: "#000000",
  },
  white: "#ffffff",
};

export const color = {
  appBar: {
    slide: { icon: palette.black[500], hover: palette.skyBlue[900] },
    step: { header: palette.black[500], main: palette.navy[900], bookmark: palette.yellow[900] },
    message: { background: { blue: palette.skyBlue[100], red: palette.red[100] }, font: palette.black[500] },
  },
  menu: { background: palette.navy[700], hover: palette.navy[500] },
  menuSub: { background: palette.navy[500], hover: palette.navy[300], title: palette.skyBlue[900] },
  avatar: { menu: { hover: palette.skyBlue[100] } },
  contents: { background: palette.black[100], selected: palette.red[100] },
  notFound: { background: palette.skyBlue[100], title: palette.red[300], description: palette.black[700] },
  button: {
    fill: { background: palette.blue[500], border: palette.black[100], font: palette.white },
    outline: { background: palette.white, border: palette.blue[500], font: palette.blue[500] },
  },
  white: palette.white,
};
