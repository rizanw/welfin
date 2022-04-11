import { Settings, SettingsActionState, UPDATE_DARKMODE } from "./type";

const initialState: Settings = {
  darkmode: { mode: "auto" },
};

export const SettingsReducer = (
  state: Settings = initialState,
  action: SettingsActionState
): Settings => {
  switch (action.type) {
    case UPDATE_DARKMODE:
      return { ...state, darkmode: action.payload };

    default:
      return state;
  }
};
