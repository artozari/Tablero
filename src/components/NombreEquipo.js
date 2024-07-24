import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import React from "react";

const NombreEquipo = ({ nombre }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={style.NombreEquipo}>
        <Text style={style.txtNombre}>{`${nombre}`}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NombreEquipo;

const style = StyleSheet.create({
  NombreEquipo: {
    backgroundColor: "#000",
    width: "90%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  txtNombre: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
  },
});
