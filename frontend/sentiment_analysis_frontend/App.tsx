import { StyleSheet, Text, View } from "react-native";
import AppBar from "./components/AppBar";
import MyTextField from "./components/MyTextField";
import { useState } from "react";
import MyButton from "./components/MyButton";
import axios from "axios";

export default function App() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        "http://10.0.2.2:5000/predict_sentiment",
        {
          text: text,
        }
      );

      setSentiment(JSON.stringify(response.data.sentiment));
      console.log(sentiment);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <AppBar title="Sentiment Analysis" />
      <View style={styles.center}>
        <MyTextField
          hintText="Enter text"
          onChangeText={(text) => setText(text)}
        />
        <MyButton title="Click" onPress={handleButtonClick} />
        <View style={styles.textContainer}>
          <Text style={styles.textDesign}>{sentiment.replace(/"/g, "")}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
  },
  textDesign: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
