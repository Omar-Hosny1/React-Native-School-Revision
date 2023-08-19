import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide" style={styles.modal}>
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require("../assets/goal.png")} />
        <TextInput
          placeholder="Enter Your Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    paddingBottom: 10,
    marginHorizontal: 10,
    display: "flex",
    marginTop: 50,
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginHorizontal: 15,
    borderRadius: 5,
    padding: 8,
  },
  modal: {
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    flex: 0.5,
  },
  img: {
    width: 200,
    height: 200,
    margin: 20,
  },
});
export default GoalInput;
