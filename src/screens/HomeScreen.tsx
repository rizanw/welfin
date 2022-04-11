import { Layout } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Welcome to UI Kitten</Text>
      </Layout>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
