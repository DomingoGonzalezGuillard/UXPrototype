import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Icon from "react-native-vector-icons/FontAwesome5"; // Importamos el ícono de FontAwesome

export default function C204Screen() {
  const [images, setImages] = useState([
    require('../../assets/images/I-204_1_D.png'),
    require('../../assets/images/I-204_2_D.png')
  ]);
  const [toggle, setToggle] = useState(false);
  const [buttonText, setButtonText] = useState('Camino alternativo');

  const toggleImages = () => {
    if (toggle) {
      setImages([
        require('../../assets/images/I-204_1_D.png'),
        require('../../assets/images/I-204_2_D.png')
      ]);
      setButtonText('Camino alternativo');
    } else {
      setImages([
        require('../../assets/images/I-204_1_E.png'),
        require('../../assets/images/I-204_2_E.png')
      ]);
      setButtonText('');
    }
    setToggle(!toggle);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.backButtonContainer}>
        <Link href="/search" asChild>
          <View style={styles.backButtonContent}>
            <Icon name="chevron-left" size={20} color="#CE0615" style={styles.icon} />
            <Text style={styles.backText}>Volver</Text>
          </View>
        </Link>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>I-204</Text>
        <Pressable onPress={toggleImages} style={[styles.button, toggle ? styles.buttonActive : null]}>
          <Text style={styles.buttonText}>{buttonText}</Text>
          <Image source={require('../../assets/images/discapacidad.png')} style={styles.buttonImage} />
        </Pressable>
        <Image source={images[0]} style={styles.image} />
        <Image source={images[1]} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 330,
    height: 400,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: 'white', // Texto blanco
    marginRight: 10, // Espacio entre el texto y la imagen
  },
  buttonActive: {
    opacity: 0.5,
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
  icon: {
    marginRight: 5,
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
});
