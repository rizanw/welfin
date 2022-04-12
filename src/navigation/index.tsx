import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "./RootStackNavigation";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}
