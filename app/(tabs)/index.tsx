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
                <Button title="Humanidades" />
              </Link>
            </View>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=c" asChild>
                <Button title="Ciencias" />
              </Link>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=b" asChild>
                <Button title="Biblioteca" />
              </Link>
            </View>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=i" asChild>
                <Button title="Ingenieria" />
              </Link>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=r" asChild>
                <Button title="Reloj" />
              </Link>
            </View>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=m" asChild>
                <Button title="Mecano" />
              </Link>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=e" asChild>
                <Button title="ESE" />
              </Link>
            </View>
            <View style={styles.buttonWrapper}>
              <Link href="/search?query=ce" asChild>
                <Button title="Central" />
              </Link>
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
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
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
});
