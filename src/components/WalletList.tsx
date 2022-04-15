import React from "react";
import {
  Icon,
  StyleService,
  List,
  Text,
  Card,
  useStyleSheet,
} from "@ui-kitten/components";
import { useSelector } from "react-redux";
import { AppState } from "@/store";

interface Props {
  children?: React.ReactNode;
}

const data = new Array(3).fill({
  name: "Bank BCA",
  amount: "2.500",
});

export default function WalletList({ children }: Props) {
  const styles = useStyleSheet(themedStyles);
  const wallets = useSelector((state: AppState) => state.wallet ?? []);

  const IconCreditCard = () => (
    <Icon style={styles.icon} fill="#8F9BB3" name="credit-card" />
  );

  const renderItem = ({ item, index }: any) => (
    <Card style={styles.card}>
      <IconCreditCard />
      <Text category={"s1"} style={{ marginBottom: 18 }}>
        {item.name}
      </Text>
      <Text>
        Rp. <Text category={"h6"}>{item.balance}</Text>.000
      </Text>
    </Card>
  );

  return (
    <List
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={wallets}
      renderItem={renderItem}
    />
  );
}

const themedStyles = StyleService.create({
  container: {
    minHeight: 160,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    maxWidth: 240,
    marginHorizontal: 9,
  },
  icon: {
    width: 38,
    height: 38,
  },
});
