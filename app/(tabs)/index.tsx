import React, { useState } from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

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
  buttonContainer: {
    padding: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
  },
  languageContainer: {
    marginTop: 0,
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
