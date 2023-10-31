import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface MyButtonProps {
  title: string;
  onPress: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#212121",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    padding: 10,
  },
});

export default MyButton;
