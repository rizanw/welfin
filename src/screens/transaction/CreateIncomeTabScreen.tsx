import { SaveIcon } from "@/components/Icons";
import KeyboardView from "@/components/KeyboardView";
import { AppState } from "@/store";
import { Categories } from "@/store/transaction/type";
import { NavigationProp } from "@react-navigation/native";
import {
  Button,
  Datepicker,
  Icon,
  IndexPath,
  Input,
  Layout,
  Select,
  SelectItem,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function CreateIncomeTabScreen({ navigation }: Props) {
  const styles = useStyleSheet(themedStyles);
  const dispatch = useDispatch();
  const wallets = useSelector((state: AppState) => state.wallet ?? []);
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(
    new IndexPath(0)
  );
  const displayWalletValue = wallets[selectedWalletIndex.row];
  const renderWalletOption = (wallet) => (
    <SelectItem title={wallet.name} key={wallet.id} />
  );
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(
    new IndexPath(0)
  );
  const displayCategoryValue = Categories[selectedCategoryIndex.row];
  const renderCategoryOption = (category) => (
    <SelectItem title={category} key={category} />
  );
  const [dateInput, setDateInput] = React.useState(new Date());
  const [amountInput, setAmountInput] = useState("");
  const [isAmountInputWrong, setIsAmountInputWrong] = useState(false);
  const [noteInput, setNoteInput] = useState("");

  const onSubmit = () => {
    navigation.goBack();
  };

  return (
    <KeyboardView>
      <Layout style={styles.container}>
        <View>
          <Datepicker
            label="Date"
            placeholder="Pick Date"
            date={dateInput}
            onSelect={(nextDate) => setDateInput(nextDate)}
            accessoryRight={() => <Icon name="calendar" />}
            controlStyle={{ height: 40 }}
            style={{ marginVertical: 6 }}
          />
          <Select
            label={"Wallet"}
            style={styles.select}
            placeholder="Pick Wallet"
            value={displayWalletValue?.name ?? "Please create a Wallet first!"}
            selectedIndex={selectedWalletIndex}
            onSelect={(index) => setSelectedWalletIndex(index)}
          >
            {wallets.map(renderWalletOption)}
          </Select>
          <Select
            label={"Category"}
            style={styles.select}
            placeholder="Pick Category"
            value={displayCategoryValue ?? "Please create a Wallet first!"}
            selectedIndex={selectedCategoryIndex}
            onSelect={(index) => setSelectedCategoryIndex(index)}
          >
            {Categories.map(renderCategoryOption)}
          </Select>
          <Input
            label="Amount"
            value={amountInput}
            keyboardType="numeric"
            placeholder="Set amount"
            onChangeText={(val: string) => {
              setIsAmountInputWrong(false);
              setAmountInput(val);
            }}
            status={isAmountInputWrong ? "danger" : "basic"}
            style={{ marginVertical: 6 }}
          />
          <Input
            label="Note"
            value={noteInput}
            placeholder="Put a note"
            onChangeText={(val: string) => {
              setNoteInput(val);
            }}
            style={{ marginVertical: 6 }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            style={styles.cancelButton}
            status="basic"
            onPress={() => navigation.navigate("MainTabNavigation")}
          >
            Cancel
          </Button>
          <Button
            style={styles.saveButton}
            status="primary"
            accessoryLeft={<SaveIcon />}
          >
            Save
          </Button>
        </View>
      </Layout>
    </KeyboardView>
  );
}

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  select: {
    marginVertical: 6,
  },
  cancelButton: { flex: 1, marginRight: 8 },
  saveButton: { flex: 1, marginLeft: 8 },
});
