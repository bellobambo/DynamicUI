import { StyleSheet, View, Text, Platform, Pressable } from "react-native";
import CustomButton from "./components/CustomButton/CustomButton";

// import CustomButton from "./components/CustomButton/CustomButton.andriod";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
        <CustomButton title="Press Me" onPress={() => alert("Pressed")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 24,
        fontStyle: "italic",
      },
    }),
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
