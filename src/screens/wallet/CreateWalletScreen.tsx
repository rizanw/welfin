import { SaveIcon } from "@/components/Icons";
import KeyboardView from "@/components/KeyboardView";
import SafeView from "@/components/SafeView";
import { createWallet } from "@/store/wallet/action";
import { Wallet } from "@/store/wallet/type";
import { NavigationProp } from "@react-navigation/native";
import {
  Button,
  Icon,
  Input,
  Layout,
  StyleService,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from "@ui-kitten/components";
import { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function CreateWalletScreen({ navigation }: Props) {
  const style = useStyleSheet(themedStyles);
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  const [isNameInputWrong, setIsNameInputWrong] = useState(false);
  const [balanceInput, setBalanceInput] = useState("");
  const [isBalanceInputWrong, setIsBalanceInputWrong] = useState(false);

  const onSubmit = () => {
    if (isNaN(parseFloat(balanceInput))) {
      setIsBalanceInputWrong(true);
    }
    if (nameInput == "") {
      setIsNameInputWrong(true);
    }
    if (isBalanceInputWrong || isNameInputWrong) {
      return;
    }

    const wallet: Wallet = {
      balance: parseFloat(balanceInput),
      name: nameInput,
      id: "",
      createdAt: undefined,
      updatedAt: undefined,
    };

    dispatch(createWallet(wallet));
    navigation.goBack();
  };

  return (
    <KeyboardView>
      <>
        <TopNavigation
          alignment="center"
          title="Create Wallet"
          accessoryLeft={
            <TopNavigationAction
              icon={<Icon name="arrow-back" />}
              onPress={() => navigation.goBack()}
            />
          }
        />
        <Layout
          style={{
            flex: 1,
            paddingHorizontal: 16,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={style.card}>
              <Text category={"h6"}>{nameInput}</Text>
              <Text style={{ marginVertical: 18 }} category={"h5"}>
                **** **** **** ****
              </Text>
              <Text category={"c1"}>active balance</Text>
              <Text category={"h6"}>
                Rp.{" "}
                {balanceInput ? parseFloat(balanceInput).toLocaleString() : 0}
              </Text>
            </View>
            <Input
              style={{ marginVertical: 16 }}
              value={nameInput}
              placeholder="Name"
              onChangeText={(val: string) => {
                setIsNameInputWrong(false);
                setNameInput(val);
              }}
              status={isNameInputWrong ? "danger" : "basic"}
            />
            <Input
              value={balanceInput}
              placeholder="Balance"
              onChangeText={(val: string) => {
                setIsBalanceInputWrong(false);
                setBalanceInput(val);
              }}
              keyboardType="numeric"
              status={isBalanceInputWrong ? "danger" : "basic"}
            />
          </View>
          <Button onPress={() => onSubmit()} accessoryLeft={<SaveIcon />}>
            Create
          </Button>
        </Layout>
      </>
    </KeyboardView>
  );
}

const themedStyles = StyleService.create({
  card: {
    marginHorizontal: 24,
    marginVertical: 20,
    paddingHorizontal: 22,
    paddingVertical: 26,
    borderRadius: 20,
    backgroundColor: "#BE7BBB",
  },
});
