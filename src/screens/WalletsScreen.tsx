import TransactionList from "@/components/TransactionList";
import WalletList from "@/components/WalletList";
import { Layout, TopNavigation } from "@ui-kitten/components";

export default function WalletsScreen() {
  return (
    <Layout style={{ flex: 1 }}>
      <TopNavigation alignment="center" title="Wallets" />
      <WalletList />
      <TransactionList />
    </Layout>
  );
}
