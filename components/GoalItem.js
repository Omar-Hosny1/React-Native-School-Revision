import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{ color: "#dddddd" }}
        // style={({ pressed }) => {
        //   pressed && styles.IOS;
        // }} // IOS EFFECT
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 13,
    borderRadius: 4,
    backgroundColor: "#2e8ee4",
  },
  IOS: {
    backgroundColor: "#cccccc",
  },
  goalText: {
    paddingVertical: 8,
    paddingLeft: 8,
    textTransform: "uppercase",
    color: "white",
  },
});
export default GoalItem;
