import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const addGoalHandler = (enteredGoalText) => {
    if (!enteredGoalText) return;
    setCourseGoals((prev) => [
      { text: enteredGoalText, id: Math.random().toString() },
      ...prev,
    ]);
    endAddGoalHandler();
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prev) => {
      return prev.filter((ele) => ele.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Pressable onPress={startAddGoalHandler}>
          <Text style={styles.btn}>Add a new Goal</Text>
        </Pressable>
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCloseModal={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "red",
  },
  goalsContainer: {
    flex: 8,
  },
  text: {
    color: "red",
  },
  btn: {
    backgroundColor: "#4e8ee9",
    textAlign: "center",
    padding: 10,
    marginBottom: 15,
  },
});
