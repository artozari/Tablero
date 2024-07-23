import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { datosPartidoContext } from "../context/Context";
// import {} from "expo-status-bar";

const Equipo = ({ equipo }) => {
  const {
    local,
    setLocal,
    visitante,
    setVisitante,
    ganador,
    puntajeParaGanar,
  } = useContext(datosPartidoContext);

  const [punto, setPunto] = useState(0);

  const sumarPuntaje = () => setPunto((prevPunto) => prevPunto + 1);

  const restarPuntaje = () => setPunto((prevPunto) => prevPunto - 1);

  useEffect(() => {
    equipo == 1 ? setLocal(punto) : setVisitante(punto);
  }, [punto]);

  return (
    <TouchableOpacity onPress={sumarPuntaje}>
      <StatusBar hidden={false} />
      <View style={styles.puntaje}>
        <Image
          source={
            equipo === 1
              ? require("../images/fondoCalipso.png")
              : require("../images/fondoRojo.png")
          }
          style={styles.backgroundImage}
        />
        <Text style={styles.marcador}>{equipo == 1 ? local : visitante}</Text>
        <TouchableOpacity
          style={equipo === 1 ? styles.btnMenosL : styles.btnMenosV}
          onPress={restarPuntaje}
        >
          <Image
            source={require("../images/signoMenos.png")}
            style={styles.backgroundSignoMenos}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Equipo;

const styles = StyleSheet.create({
  puntaje: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height - StatusBar.currentHeight,
    left: -5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 10,
    margin: 0,
  },
  marcador: {
    fontSize: 300,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: 8, height: 8 },
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "stretch",
  },
  backgroundSignoMenos: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  btnMenosL: {
    borderRadius: 50,
    left: 15,
    top: Dimensions.get("window").height - 160,
    width: 100,
    height: 100,
    backgroundColor: "white",
    position: "absolute",
    fontSize: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  btnMenosV: {
    borderRadius: 50,
    left: Dimensions.get("window").width / 2 - 120,
    top: Dimensions.get("window").height - 165,
    width: 100,
    height: 100,
    backgroundColor: "white",
    position: "absolute",
    fontSize: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  txtMenos: {
    color: "#fff",
    fontSize: 80,
    fontWeight: "bold",
  },
});
