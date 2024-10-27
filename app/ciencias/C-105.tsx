import React from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import Icon from "react-native-vector-icons/FontAwesome5"; // Importamos el ícono de FontAwesome
import { playSound } from '../utils/playSound';

export default function C101Screen() {

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
      <Pressable onPress={() => playSound("../../assets/sounds/back.ogg")}>
        <Link href="/search" asChild>
          <View style={styles.backButtonContent}>
            <Icon name="chevron-left" size={20} color="#CE0615" style={styles.icon} />
            <Text style={styles.backText}>Back</Text>
          </View>
        </Link>
      </Pressable>
      </View>
      
      <Text style={styles.title}>C-105</Text>
      <Image source={require('../../assets/images/ciencias/c-105.gif')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 60, // Ajusta este valor para dar espacio al botón de back
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40, // Ajusta este valor según sea necesario
    left: 20, // Ajusta este valor según sea necesario
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#CE0615',
    marginLeft: 5, // Ajusta el espacio entre el icono y el texto
  },
  image: {
    width: 470,
    height: 610,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
  },
});