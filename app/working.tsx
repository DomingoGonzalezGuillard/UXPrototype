import { Link, Stack } from 'expo-router';
import { Pressable, StyleSheet, View, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { playSound } from '../utils/playSound';

export default function Working() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={require('@/assets/images/working.gif')} // Cambia esta ruta al archivo de imagen que quieres mostrar
            style={styles.image}
          />
          <ThemedText type="title" style={styles.title}>Estamos Trabajando</ThemedText>
          <ThemedText style={styles.message}>La pantalla que estás buscando aun no existe, pero estamos trabajando en ella</ThemedText>
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
  image: {
    width: 350, // Ajusta el ancho de la imagen
    height: 200, // Ajusta la altura de la imagen
    marginBottom: 20, // Espacio debajo de la imagen
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
