import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigation from "./MainTabNavigation";

const Stack = createNativeStackNavigator();

export default function RootStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabNavigation"
        component={MainTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
