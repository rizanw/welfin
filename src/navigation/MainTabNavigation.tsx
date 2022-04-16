import SafeView from "@/components/SafeView";
import HomeScreen from "@/screens/HomeScreen";
import SettingsMenuScreen from "@/screens/SettingsMenuScreen";
import WalletsScreen from "@/screens/WalletsScreen";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Button,
  Icon,
} from "@ui-kitten/components";

const Tab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Home" />
    <BottomNavigationTab title="Wallets" />
    <Button
      style={{ borderRadius: 40, maxWidth: 50, maxHeight: 50 }}
      status="primary"
      accessoryLeft={<Icon name="plus" />}
      onPress={() => navigation.navigate("TransactionTabNavigation")}
    />
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
        <Tab.Screen name="Transaction" component={WalletsScreen} />
        <Tab.Screen name="Settings" component={SettingsMenuScreen} />
      </Tab.Navigator>
    </SafeView>
  );
}
