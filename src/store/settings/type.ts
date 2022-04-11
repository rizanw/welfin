export interface Settings {
  darkmode: DarkMode;
}

export interface DarkMode {
  mode: "auto" | "dark" | "light";
}

export const GET_DARKMODE = "settings/GET_DARKMODE";
export const UPDATE_DARKMODE = "settings/UPDATE_DARKMODE";

interface UpdateDarkMode {
  type: typeof UPDATE_DARKMODE;
  payload: DarkMode;
}

export type SettingsActionState = UpdateDarkMode;
