import React, { useEffect } from "react";
import { Settings } from "@/store/settings/type";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppNavigator from "./navigation";
import { AppState } from "@/store";
import { Appearance } from "react-native";
import { useSelector } from "react-redux";
import { scheme } from "./theme/vars";
import { default as welfinTheme } from "@/theme/colors.json";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SafeView from "./components/SafeView";

export default function Welfin() {
  const settings: Settings = useSelector((state: AppState) => state.settings);
  const [_, setAutoTheme] = React.useState("light");

  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme }): void => {
        if (colorScheme == null || colorScheme == undefined) {
          return setAutoTheme("light");
        }
        return setAutoTheme(colorScheme);
      }
    );
    return () => subscription.remove();
  }, []);

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        mapping={eva.mapping}
        theme={{
          ...(scheme(settings.darkmode) === "light" ? eva.light : eva.dark),
          ...welfinTheme,
        }}
      >
        <SafeAreaProvider>
          <SafeView>
            <AppNavigator />
          </SafeView>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
}
