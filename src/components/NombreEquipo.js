import { View, Text } from "react-native";
import React from "react";

const NombreEquipo = ({ nombre }) => {
  return (
    <View>
      <Text>{`${nombre}`}</Text>
    </View>
  );
};

export default NombreEquipo;
