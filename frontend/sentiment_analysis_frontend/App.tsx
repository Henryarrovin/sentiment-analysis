import { StyleSheet, Text, View } from "react-native";
import AppBar from "./components/AppBar";
import MyTextField from "./components/MyTextField";
import { useState } from "react";
import MyButton from "./components/MyButton";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <AppBar title="Sentiment Analysis" />
      <MyTextField
        hintText="Enter text"
        onChangeText={(text) => setText(text)}
      />
      <MyButton title="Click" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
