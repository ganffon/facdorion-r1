const SS = 100;
const S = 150;
const M = 200;
const L = 250;
const SL = 300;
export const WIDTH = { SS: SS, S: S, M: M, L: L, SL: SL };

export const XX = undefined;

const HIDDEN_FG = process.env.REACT_APP_COLUMN_HIDDEN;
export const HIDDEN_ID = HIDDEN_FG === "true" ? true : false;
