import React, { useState } from 'react';
import { Image, StyleSheet, View, Button, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { BuildingEmoji } from '@/components/BuildingEmoji'; // Asegúrate de importar el componente del emoji

export default function HomeScreen() {
  const [language, setLanguage] = useState('Español'); // Estado para controlar el idioma

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage); // Cambia el idioma
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/portada_universidad.jpg')}
          style={styles.universityBackground}
        />
      }>
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
              <Link href="/search?query=h" asChild>
                <Button title="  📜  " color="#E91E63" />
              </Link>
              <Text>Humanidades</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=c" asChild>
                <Button title="   🔬   " color="#4CAF50" />
              </Link>
              <Text>Ciencias</Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=b" asChild>
                <Button title="   🏫   " color="#FFEB3B" />
              </Link>
              <Text>Biblioteca</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=i" asChild>
                <Button title="   🔧   " color="#FF9800" />
              </Link>
              <Text>Ingeniería</Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=r" asChild>
                <Button title="   🕚   " color="#3F51B5" />
              </Link>
              <Text>Reloj</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=m" asChild>
                <Button title="   ⚙️   " color="#9C27B0" />
              </Link>
              <Text>Mecano</Text>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=e" asChild>
                <Button title="   🏢   " color="#FF5733" />
              </Link> 
              <Text>ESE</Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=ce" asChild>
                <Button title="   🏛️   " color="#795548" />
              </Link>
              <Text>Central</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.languageContainer}>
        <Image source={require('@/assets/images/idioma.png')} style={styles.languageIcon} />
        <Picker
          selectedValue={language}
          style={styles.languagePicker}
          onValueChange={(itemValue) => toggleLanguage(itemValue)}>
          <Picker.Item label="Español" value="Español" />
          <Picker.Item label="English" value="English" />
        </Picker>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 20,
  },
  universityBackground: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  sectionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonContainer: {
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  languageContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center', // Center the text under the button
  },
  buttonText: {
    textAlign: 'center', // Center the text horizontally
    marginTop: 5, // Optional: Add some space between the button and the text
  },
});
