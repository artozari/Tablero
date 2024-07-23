import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ToastAndroid,
} from "react-native";
import Equipo from "./src/components/Equipo";
import * as ScreenOrientation from "expo-screen-orientation";
import React, { useContext, useEffect, useState } from "react";
import { datosPartidoContext } from "./src/context/Context";
import { diferenciaDe2, equipoGanador } from "./src/utils/util";

export default function App() {
  // const [orientation, setOrientation] = useState(
  //   ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  // );

  const [local, setLocal] = useState(0);
  const [visitante, setVisitante] = useState(0);
  const [ganador, setGanador] = useState(0);
  const [puntajeParaGanar, setPuntajeParaGanar] = useState(5);

  useEffect(() => {
    console.log(`=========`);
    console.log(`puntos Local:     ${local}`);
    console.log(`puntos visitante: ${visitante}`);
    
    
    // local === puntajeParaGanar || visitante === puntajeParaGanar
    //   ? diferenciaDe2(local, visitante)
    //     ? (alert("ganador"), setGanador(0), setLocal(0), setVisitante(0)) //aqui hay que averiguar quien es el ganador
    //     : ToastAndroid.show("aun no hay ganador", ToastAndroid.SHORT)
    //   : 0;
    // ScreenOrientation.lockAsync(orientation);
  }, [, /* orientation */ local, visitante]);

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
        }}
      >
        <StatusBar barStyle={"default"} />
        <Equipo equipo={1} />
        <Equipo equipo={2} />
      </datosPartidoContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
