import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigation from "./MainTabNavigation";
import CreateWalletScreen from "@/screens/wallet/CreateWalletScreen";

const Stack = createNativeStackNavigator();

export default function RootStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabNavigation"
        component={MainTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateWalletScreen"
        component={CreateWalletScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
