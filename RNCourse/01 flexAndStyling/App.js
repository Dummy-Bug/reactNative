import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredGoalText) {
    setEnteredGoalText(enteredGoalText);
  }
  function addGoalHandler() {
    // setCourseGoals([...courseGoals,enteredGoalText]); // not a recomended way to do it if new state is
    // dependent on previous state.
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goals"
          style={styles.textInput}
          onChangeText={goalInputHandler} // not adding () parenthesis while calling function or else goalInputHandler
          // will get execute as soon as the code is parsed and evaluated this would be too soon as it would happen when
          // when user's interface is rendered, instead we want to point at this function so that react can executed for me
          // whenever the text changes.
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal,i)=><Text key={i}>{goal}</Text>)}
      </View>
    </View>
  );
}
// by default native uses flex.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // to assign entire height to this container.
    borderColor: "black",
    paddingTop: 50,
    paddingHorizontal: 14,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row", // making row as our main axis, so items would be row wise inside this container.
    justifyContent: "space-between", // handles main axis.
    alignItems: "center", // handles cross axis.
    marginBottom: 10,
    borderWidth: 0.2,
    borderColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "75%",
    marginRight: 5,
    padding: 8,
  },
  goalsContainer: {
    flex: 5, // will occupy 1/5th of the space available.
  },
});
