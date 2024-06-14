import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Campus() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/campus.png")}
        style={[styles.image, { transform: [{ rotate: "90deg" }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "160%", // Ocupa todo el ancho de la pantalla
    resizeMode: "contain", // Escala la imagen para que quepa completamente en el contenedor
  },
});
