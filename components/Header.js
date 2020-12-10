import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Icon style={styles.icon} name="shopping-cart" size={20} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {
    marginTop: 35,
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  title: {
    marginTop: 30,
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#009688",
    width: "100%",
    padding: 20,
    marginBottom: 0,
  },
});
