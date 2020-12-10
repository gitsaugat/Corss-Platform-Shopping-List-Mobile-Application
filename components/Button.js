import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Fontisto";

export const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Icon name="shopping-basket-add" color="white" size={20} />
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const AnotherAppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.anotherappButtonContainer}>
    {/* <Icon name ="shopping-basket-add"  color = "white" size = {20} /> */}
    <Text style={styles.anotherappButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 10,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "95%",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  appButtonText: {
    marginLeft: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  anotherappButtonContainer: {
    elevation: 10,
    backgroundColor: "coral",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 40,
    marginBottom: 30,
    flexDirection: "row-reverse",
  },
  anotherappButtonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
