import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

const Todo = (props) => {
  const { todo, id, deleteItem } = props;

  return (
    <ScrollView>
      <TouchableOpacity>
        <View style={styles.todo}>
          <Text style={styles.title}>{todo}</Text>
          <Icon
            onPress={() => deleteItem(id)}
            style={styles.icon}
            name="shopping-basket-remove"
            size={20}
            color={"firebrick"}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    height: 60,
    backgroundColor: "lightgray",
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    borderRadius: 10,
  },
  deleteText: {
    color: "brown",
    fontSize: 20,
    width: 20,
    backgroundColor: "lightgray",
    fontWeight: "bold",
  },
});
