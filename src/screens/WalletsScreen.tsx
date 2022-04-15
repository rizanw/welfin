import React from "react";
import TransactionList from "@/components/TransactionList";
import WalletList from "@/components/WalletList";
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { NavigationProp, RouteProp } from "@react-navigation/native";

interface Props {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export default function WalletsScreen({ navigation, route }: Props) {
  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={<Icon name="plus-circle-outline" />}
        onPress={() => navigation.navigate("CreateWalletScreen")}
      />
    </React.Fragment>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <TopNavigation
        alignment="center"
        title="Wallets"
        accessoryRight={renderRightActions}
      />
      <WalletList />
      <TransactionList />
    </Layout>
  );
}
