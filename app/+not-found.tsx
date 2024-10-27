import { Link, Stack } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { playSound } from './utils/playSound';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <View style={styles.content}>
          <ThemedText type="title" style={styles.title}>Página no encontrada</ThemedText>
          <ThemedText style={styles.message}>La pantalla que estás buscando no existe o ha sido movida.</ThemedText>
          <Pressable onPress={() => playSound(require('@/assets/sounds/back.mp3'))}>
          <Link href="/" style={styles.link}>
            <ThemedText type="link" style={styles.linkText}>Ir a la página principal</ThemedText>
          </Link>
          </Pressable>
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa', // Color de fondo claro
    padding: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 300,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Color de texto principal
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666', // Color de texto secundario
    textAlign: 'center',
    marginBottom: 30,
  },
  link: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#CE0615', // Color de fondo del botón
    borderRadius: 8,
  },
  linkText: {
    color: '#fff', // Color de texto del botón
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
