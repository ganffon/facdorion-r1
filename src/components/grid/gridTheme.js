import { palette } from "constant/color/color";
import TuiGrid from "tui-grid";

function gridTheme() {
  return TuiGrid.applyTheme("custom", {
    frozenBorder: {
      border: palette.red[100],
    },
    cell: {
      rowHeader: {
        border: palette.black[200],
        background: palette.black[100],
      },
      header: {
        border: palette.black[200],
        background: palette.black[100],
      },
      normal: {
        border: palette.black[200],
        background: palette.white,
        showVerticalBorder: true,
        showHorizontalBorder: true,
      },
      required: {
        background: palette.green[100],
      },
      editable: {
        background: palette.yellow[100],
      },
      disabled: {
        background: palette.black[100],
      },
      invalid: {
        background: palette.green[100],
      },
    },
  });
}

export default gridTheme;
