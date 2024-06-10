import { Image, StyleSheet, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  
  const navigation = useNavigation();

  // const handleButtonPress = (name: string) => {
  //   navigation.navigate('Search');
  // };
  


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/portada_universidad.jpg')}
          style={styles.universityBackground}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenido!</ThemedText>
        <HelloWave />
      </ThemedView>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
            <Button title="Humanidades" onPress={() => navigation.navigate('Search' as never)} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Ciencias" onPress={() => navigation.navigate('Search'as never)} />
          </View>
        </View>
        <View style={styles.buttonRow}>
          <View style={styles.buttonWrapper}>
            <Button title="Biblioteca" onPress={() => navigation.navigate('Search'as never)} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Ingenieria" onPress={() =>navigation.navigate('Search'as never)} />
          </View>
        </View>
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
    marginBottom: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
  },
});
