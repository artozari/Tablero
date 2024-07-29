import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TableroCentral = ({ Local, Visitante }) => {
  const [local, setPLocal] = useState((Local = 0));
  const [visitante, setPVisitante] = useState((Visitante = 0));
  return (
    <TouchableOpacity style={styles.tableroCentral}>
      <Text style={styles.textoTableroCentral}>{`${local}`}</Text>
      <Text style={styles.textoTableroCentral}>{`${local}`}</Text>
      {/* <Text style={styles.textoTableroCentral}>TableroCentral</Text> */}
    </TouchableOpacity>
  );
};

export default TableroCentral;

const styles = StyleSheet.create({
  tableroCentral: {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    alignItems: "",
    justifyContent: "space-around",
    borderWidth: 3,
    borderColor: "#fff",
    width: 200,
    height: "auto",
    position: "absolute",
    borderRadius: 25,
  },
  textoTableroCentral: {
    color: "#fff",
    fontSize: 50,
  },
});
