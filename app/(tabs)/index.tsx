import React, { useState, useEffect, ReactNode } from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  Pressable,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome5"; // Importamos el ícono de FontAwesome
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, withSpring } from "react-native-reanimated";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

import { speakText } from "../utils/TextToSpeech";

interface AnimatedButtonWrapperProps {
  delay: number;
  children: ReactNode;  // Add the children prop type
}

const AnimatedButtonWrapper: React.FC<AnimatedButtonWrapperProps> = ({ children, delay }) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(delay, withTiming(0, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.buttonWrapper, animatedStyle]}>
      {children}
    </Animated.View>
  );
};


export default function HomeScreen() {
  // how to set the language options
  const [language, setLanguage] = useState("Español");

  const toggleLanguage = (selectedLanguage: string) => {
    setLanguage(selectedLanguage); // Cambia el idioma
  };

  useEffect(() => {
    
  }, []);
  

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

      <button onClick={() => speakText("Bienvenido. Buscar por edificio. Humanidades. Ciencias. Biblioteca. Ingenieria.")}>
        Text to Speech
      </button>
      
      <View style={styles.sectionContainer}>
        <View style={styles.sectionTitleContainer}>
          
          <Icon name="chevron-right" size={20} color="#CE0615" style={styles.icon} /> 

          <Text style={styles.sectionTitle}>Buscar por edificio</Text>
          
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
                <Link href="/search?query=h" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="book" size={40} color="#CE0615" style={styles.icon} /> 

                    <Text style={styles.buttonText}>Humanidades</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
                <Link href="/search?query=c" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="flask" size={40} color="#CE0615" style={styles.icon} /> 
                    <Text style={styles.buttonText}>Ciencias</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
                <Link href="/search?query=b" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="place-of-worship" size={40} color="#CE0615" style={styles.icon} /> 
                    <Text style={styles.buttonText}>Biblioteca</Text>
                  </View>
                </Link>
              </Pressable>
              </AnimatedButtonWrapper>
            </View>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
                <Link href="/search?query=i" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="screwdriver" size={40} color="#CE0615" style={styles.icon} /> 

                    <Text style={styles.buttonText}>Ingeniería</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
                <Link href="/search?query=r" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="clock" size={40} color="#CE0615" style={styles.icon} /> 
                    <Text style={styles.buttonText}>Reloj</Text>
                  </View>
                </Link>
              </Pressable>
              </AnimatedButtonWrapper>
            </View>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
                <Link href="/search?query=m" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="dungeon" size={40} color="#CE0615" style={styles.icon} /> 
                    <Text style={styles.buttonText}>Mecano</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
                <Link href="/search?query=e" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="school" size={40} color="#CE0615" style={styles.icon} /><Text style={styles.buttonText}>ESE</Text>
                  </View>
                </Link>
              </Pressable>
              </AnimatedButtonWrapper>
            </View>
            <View style={styles.buttonWrapper}>
            <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
                <Link href="/search?query=ce" asChild>
                  <View style={styles.buttonWrapper}>
                  <Icon name="landmark" size={40} color="#CE0615" style={styles.icon} /><Text style={styles.buttonText}>Central</Text>
                  </View>
                </Link>
              </Pressable>
            </AnimatedButtonWrapper>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
      <AnimatedButtonWrapper delay={0}>
            <Pressable
              style={[styles.button, { backgroundColor: "#f4f4f4", borderWidth: 1, borderColor: "#bdbebf" }]} 
              >
          <Link href="/campus" asChild>
            <View style={styles.buttonWrapper}>
            <Icon name="map" size={40} color="#CE0615" style={styles.icon} />               
            <Text style={styles.buttonText}>Mapa de Campus</Text>
            </View>
          </Link>
        </Pressable>
        </AnimatedButtonWrapper>
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
    fontSize: 18,
    color: "#000000", // White color
    lineHeight: 8,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  //f0f0f0
  sectionContainer: {
    backgroundColor: "#ffffff",
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
    marginTop: 30, // Optional: Add some space between the button and the text
    fontSize: 18,
    backgroundColor: "f4f4f4",
    padding: 5,
    borderRadius: 10,
  },


  button: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Ajusta este valor para hacer los bordes más redondeados
  },

  icon: {
    marginLeft: 10, // Separar el ícono del texto
  },
  listContent: {
    flexGrow: 1,
  },

});
