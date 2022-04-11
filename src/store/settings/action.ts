import { Dispatch } from "redux";
import { DarkMode, UPDATE_DARKMODE } from "./type";

export function updateDarkMode({ mode }: DarkMode) {
  return async (dispatch: Dispatch) => {
    dispatch({ type: UPDATE_DARKMODE, payload: { mode: mode } });
  };
}
