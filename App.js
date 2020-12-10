import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import { AnotherAppButton, AppButton } from "./components/Button";
import Header from "./components/Header";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState("");

  const { container } = styles;
  return (
    <View style={container}>
      <Header title={"Shopping List"} />

      <TextInput
        style={{
          fontSize: 20,
          backgroundColor: "#e6e8ed",
          width: "100%",
          padding: 20,
          marginBottom: 20,
        }}
        placeholder={"Add Item"}
        value={text}
        onChangeText={(val) => setText(val)}
        onSubmitEditing={() => {
          if (!text.trim()) {
            Alert.alert("oops !", "Item Cannot be empty ");
          } else {
            setTodos((prevTodo) => {
              return [{ id: Math.random() * 100 + 1, todo: text }, ...prevTodo];
            });
            setText("");
          }
        }}
      />
      <AppButton
        onPress={() => {
          if (!text.trim()) {
            Alert.alert("oops !", "Item Cannot be empty golu molu");
          } else {
            setTodos((prevTodo) => {
              return [{ id: Math.random() * 100 + 1, todo: text }, ...prevTodo];
            });
            setText("");
          }
        }}
        title={"Add Item"}
      />
      <FlatList
        style={{ width: "100%", backgroundColor: "white" }}
        data={todos}
        renderItem={({ item }) => (
          <Todo
            deleteItem={(id) => {
              setTodos((prevTodos) => {
                return prevTodos.filter((item) => item.id !== id);
              });
            }}
            todo={item.todo}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
