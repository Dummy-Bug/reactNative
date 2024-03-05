import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }} // won't worl on ios 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style = {({pressed})=> pressed && styles.pressedItem} 
        // object destructuring {pressed} is provided by pressable. && means only apply style when pressed is true
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem : {
    opacity : 0.5
  }
  ,
  goalText: {
    color: "white",
    padding: 8,
  },
});
