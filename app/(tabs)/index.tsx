import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { BuildingEmoji } from "@/components/BuildingEmoji"; // Asegúrate de importar el componente del emoji

export default function HomeScreen() {
  // how to set the language options
  const [language, setLanguage] = useState("Español");
  const [accesibility, setAccesibility] = useState(false);

  const toggleLanguage = (selectedLanguage: string) => {
    setLanguage(selectedLanguage); // Cambia el idioma
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/portada_universidad.jpg")}
          style={styles.universityBackground}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenido!</ThemedText>
        <HelloWave />
      </ThemedView>

      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Buscar por edificio</Text>
          <BuildingEmoji />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#E91E63" }]}
              >
                <Link href="/search?query=h" asChild>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonEmoji}>📜</Text>
                    <Text style={styles.buttonText}>Humanidades</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#4CAF50" }]}
              >
                <Link href="/search?query=c" asChild>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonEmoji}>🔬</Text>
                    <Text style={styles.buttonText}>Ciencias</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#FFEB3B" }]}
              >
                <Link href="/search?query=b" asChild>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonEmoji}>🏫</Text>
                    <Text style={styles.buttonText}>Biblioteca</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#FF9800" }]}
              >
                <Link href="/search?query=i" asChild>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonEmoji}>🔧</Text>
                    <Text style={styles.buttonText}>Ingeniería</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#3F51B5" }]}
              >
                <Link href="/search?query=r" asChild>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonEmoji}>🕚</Text>
                    <Text style={styles.buttonText}>Reloj</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#9C27B0" }]}
              >
                <Link href="/search?query=m" asChild>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonEmoji}>🔧</Text>
                    <Text style={styles.buttonText}>Mecano</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#FF5733" }]}
              >
                <Link href="/search?query=e" asChild>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonEmoji}>🏢</Text>
                    <Text style={styles.buttonText}>ESE</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#795548" }]}
              >
                <Link href="/search?query=ce" asChild>
                  <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonEmoji}>🏛️</Text>
                    <Text style={styles.buttonText}>Central</Text>
                  </View>
                </Link>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={[styles.smallButton, { backgroundColor: "#E7D37F" }]}
        >
          <Link href="/campus" asChild>
            <View style={styles.buttonWrapper}>
              -<Text style={styles.buttonEmoji}>🗺️</Text>
              <Text style={styles.smallButtonText}>Mapa de Campus</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>

      <View style={styles.languageContainer}>
        <Image
          source={require("@/assets/images/idioma.png")}
          style={styles.languageIcon}
        />
        <Picker
          selectedValue={language}
          style={styles.languagePicker}
          onValueChange={(itemValue) => toggleLanguage(itemValue)}
        >
          <Picker.Item label="Español" value="Español" />
          <Picker.Item label="English" value="English" />
        </Picker>
      </View>

      <View style={styles.languageContainer}>
        <Switch
          value={accesibility}
          onValueChange={(value) => setAccesibility(value)}
        />
        <Text>Accesibilidad</Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 20,
  },
  universityBackground: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  smallButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  smallButtonText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#000000", // White color
    lineHeight: 8,
  },

  sectionContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 1 - 0,
    marginTop: 20,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  buttonContainer: {
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  languageContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  languagePicker: {
    width: 150,
    height: 40,
    marginLeft: 10,
  },
  languageIcon: {
    width: 30,
    height: 30,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
    alignItems: "center", // Center the text under the button
    justifyContent: "center",
  },
  buttonEmoji: {
    fontSize: 35, // Ajusta este valor para cambiar el tamaño del emoji
  },
  buttonText: {
    textAlign: "center", // Center the text horizontally
    marginTop: 5, // Optional: Add some space between the button and the text
    fontWeight: "bold",
  },

  button: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Ajusta este valor para hacer los bordes más redondeados
  },
});
