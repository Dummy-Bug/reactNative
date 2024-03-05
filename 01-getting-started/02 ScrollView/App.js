import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
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
          onChangeText={goalInputHandler} 
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}> 
      <ScrollView > 
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem }>  
          <Text style={styles.goalItemText} >
            {goal}
          </Text>
          </View> 
        ))} 
      </ScrollView> 
      </View> 
    </View>
  );
}
// downside of Scrollview is that it renders all the items even the one's that are not visible yet , so it hampers the 
// performance of the system.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    borderColor: "black",
    paddingTop: 50,
    paddingHorizontal: 14,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
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
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 7,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText:{ 
    color:"white" 
  }
});
