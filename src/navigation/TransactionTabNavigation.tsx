import SafeView from "@/components/SafeView";
import CreateExpenseTabScreen from "@/screens/transaction/CreateExpenseTabScreen";
import CreateIncomeTabScreen from "@/screens/transaction/CreateIncomeTabScreen";
import CreateTransferTabScreen from "@/screens/transaction/CreateTransferTabScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationProp } from "@react-navigation/native";
import {
  Icon,
  Tab,
  TabBar,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { useEffect } from "react";
import navigation from ".";

const TopTab = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => {
  useEffect(() => {
    state.index = 1;
  }, []);

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <Tab title="Income" />
      <Tab title="Expense" />
      <Tab title="Transfer" />
    </TabBar>
  );
};

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function TransactionTabNavigation({ navigation }: Props) {
  return (
    <>
      <TopNavigation
        alignment="center"
        title="Create Transaction"
        accessoryLeft={
          <TopNavigationAction
            icon={<Icon name="arrow-back" />}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
        <TopTab.Screen
          name="CreateIncomeTabScreen"
          component={CreateIncomeTabScreen}
        />
        <TopTab.Screen
          name="CreateExpenseTabScreen"
          component={CreateExpenseTabScreen}
        />
        <TopTab.Screen
          name="CreateTransferTabScreen"
          component={CreateTransferTabScreen}
        />
      </TopTab.Navigator>
    </>
  );
}
