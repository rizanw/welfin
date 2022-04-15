import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import Constants from "expo-constants";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { Settings } from "@/store/settings/type";
import { scheme } from "@/theme/vars";
import { AppState } from "@/store";
import { useTheme } from "@ui-kitten/components";

interface Props {
  children?: React.ReactNode;
}

export default function SafeView({ children }: Props) {
  const settings: Settings = useSelector((state: AppState) => state.settings);
  const theme = useTheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={[
            {
              flex: 1,
              backgroundColor: theme["background-basic-color-1"],
            },
            Platform.OS === "android"
              ? { paddingTop: Constants.statusBarHeight }
              : {},
          ]}
        >
          <StatusBar
            style={scheme(settings.darkmode) === "dark" ? "light" : "dark"}
          />
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
