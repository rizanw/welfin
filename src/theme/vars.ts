/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */
import { DarkMode } from "@/store/settings/type";
import { useColorScheme } from "react-native";

/**
 * Scheme
 */
export const scheme = (darkmode: DarkMode) => {
  let res;

  switch (darkmode.mode) {
    case "dark":
      res = "dark";
      break;
    case "light":
      res = "light";
      break;
    default:
      res = useColorScheme();
      break;
  }
  if (!res) res = "light";
  return res;
};
