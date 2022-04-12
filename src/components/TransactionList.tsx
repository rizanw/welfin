import React from "react";
import {
  Icon,
  List,
  Text,
  Card,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

interface Props {
  children?: React.ReactNode;
}

const data = new Array(80).fill({
  category: "Food",
  desc: "Masakan Padang",
  amount: "12.500",
  date: "12/04/2022",
  wallet: "Bank BCA",
});

export default function TransactionList({ children }: Props) {
  const styles = useStyleSheet(themedStyles);

  const IconCategory = ({ name }: any) => (
    <Icon style={styles.icon} fill="#8F9BB3" name={name} />
  );

  const renderItem = ({ item, index }: any) => (
    <Card style={styles.card}>
      <View style={styles.cardContainer}>
        <View style={styles.cardLeft}>
          <IconCategory name="layers" />
        </View>
        <View style={styles.cardCenter}>
          <Text category={"h6"}>{item.category}</Text>
          <Text category={"c2"}>{item.desc}</Text>
          <Text category={"c1"} appearance={"hint"}>
            {item.date}
          </Text>
        </View>
        <View style={styles.cardRight}>
          <Text>
            -Rp.<Text category={"s1"}>{item.amount}</Text>
          </Text>
          <Text category={"c1"}>{item.wallet}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <List
      ListHeaderComponent={() => <Text category={"h4"}>Transactions</Text>}
      stickyHeaderIndices={[0]}
      ListHeaderComponentStyle={styles.listHeaderComponent}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItem}
    />
  );
}

const themedStyles = StyleService.create({
  container: {
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  listHeaderComponent: {
    backgroundColor: "background-basic-color-2",
  },
  card: {
    marginVertical: 8,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  cardLeft: {
    flex: 1 / 2,
    justifyContent: "center",
  },
  cardCenter: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  cardRight: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  icon: {
    width: 38,
    height: 38,
  },
});
