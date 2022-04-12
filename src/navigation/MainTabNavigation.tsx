import SafeView from "@/components/SafeView";
import HomeScreen from "@/screens/HomeScreen";
import SettingsMenuScreen from "@/screens/SettingsMenuScreen";
import WalletsScreen from "@/screens/WalletsScreen";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

const Tab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Wallets" />
    <BottomNavigationTab title="Investments" />
    <BottomNavigationTab title="Settings" />
  </BottomNavigation>
);

export default function MainTabNavigation() {
  return (
    <SafeView>
      <Tab.Navigator
        tabBar={(props) => <BottomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallets" component={WalletsScreen} />
        <Tab.Screen name="Investments" component={WalletsScreen} />
        <Tab.Screen name="Settings" component={SettingsMenuScreen} />
      </Tab.Navigator>
    </SafeView>
  );
}
