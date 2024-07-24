import { SafeAreaView, StyleSheet, Platform, StatusBar, ToastAndroid } from "react-native";
import Equipo from "./src/components/Equipo";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useContext, useEffect, useState } from "react";
import { datosPartidoContext } from "./src/context/Context";
import { diferenciaDe2, equipoGanador } from "./src/utils/util";

export default function App() {
  const [local, setLocal] = useState(0);
  const [visitante, setVisitante] = useState(0);
  const [ganador, setGanador] = useState(0);
  const [puntajeParaGanar, setPuntajeParaGanar] = useState(25);
  const [game, setGame] = useState(true);

  const juegoTerminado = () => {
    diferenciaDe2(local, visitante)
      ? (alert(`El equipo ${equipoGanador(local, visitante)} es el ganador`),
        setGanador(equipoGanador(local, visitante)),
        setLocal(0),
        setVisitante(0),
        setGame(false))
      : ToastAndroid.show("aun no hay ganador", ToastAndroid.SHORT);
  };

  useEffect(() => {
    if (game) {
      (local >= puntajeParaGanar || visitante >= puntajeParaGanar) && juegoTerminado();
    }
    setGame(true);
  }, [local, visitante, ganador]);

  return (
    <SafeAreaView style={styles.container}>
      <datosPartidoContext.Provider
        value={{
          puntajeParaGanar,
          local,
          setLocal,
          visitante,
          setVisitante,
          ganador,
          setGanador,
        }}
      >
        <StatusBar barStyle={"default"} hidden={false} />
        <Equipo equipo={1} />
        <Equipo equipo={2} />
      </datosPartidoContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
