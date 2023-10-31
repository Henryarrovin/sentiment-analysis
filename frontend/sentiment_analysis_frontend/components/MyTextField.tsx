import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface MyTextFieldProps {
  hintText: string;
  onChangeText: (text: string) => void;
}

const MyTextField = ({ hintText, onChangeText }: MyTextFieldProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={hintText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default MyTextField;
