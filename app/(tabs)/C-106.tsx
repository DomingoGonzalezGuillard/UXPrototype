import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function C101Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>C-106</Text>
      <Image source={require('../../assets/images/106.png')} style={styles.image} />
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
  },
  image: {
    width: 330,
    height: 400,
    marginTop: 20,
  },
});
