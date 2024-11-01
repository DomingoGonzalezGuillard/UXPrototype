import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Link, Redirect, useGlobalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { playSound } from '@/utils/playSound';
import { classrooms } from '@/classrooms/classrooms';
import { Classroom } from "@/classrooms/typesClassrooms";

const { width, height } = Dimensions.get('window'); // Obtener el ancho de la pantalla

export default function displayMap() {
  const { id } = useGlobalSearchParams<{ id: string }>();
  
  const [classroom, setClassroom] = useState<Classroom | undefined>(undefined);
  const [selectedResourceType, setSelectedResourceType] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (id && id in classrooms) {
      setClassroom(classrooms[id as keyof typeof classrooms]);
      setSelectedResourceType(classrooms[id as keyof typeof classrooms]?.resources[0].type || null);
    }
  }, [id]);

  if (id === undefined || !(id in classrooms)) {
    return <Redirect href="/default" />;
  }

  const handleResourceTypeChange = (type: string) => {
    setSelectedResourceType(type);
    setCurrentIndex(0); // Reiniciar el índice cuando cambia el tipo de recurso
  };

  const selectedResources = classroom?.resources.find(res => res.type === selectedResourceType)?.resources || [];

  const nextImage = () => {
    if (currentIndex < selectedResources.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => playSound(require('@/assets/sounds/back.mp3'))}>
          <Link href="/search" asChild>
            <View style={styles.backButtonContent}>
              <Icon name="chevron-left" size={20} color="#CE0615" style={styles.icon} />
              <Text style={styles.backText}>Volver</Text>
            </View>
          </Link>
        </Pressable>
      </View>

      <Text style={styles.title}>{classroom?.id}</Text>

      {classroom && classroom.resources && classroom.resources.length > 1 && (
        <View style={styles.resourceTypeButtons}>
          {classroom.resources.map((resource) => (
            <TouchableOpacity key={resource.type} onPress={() => handleResourceTypeChange(resource.type)}>
              <Text style={[styles.resourceType, selectedResourceType === resource.type && styles.selectedResourceType]}>
                {resource.type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {selectedResources.length > 0 && (
        <View style={styles.imageContainer}>
          <Image
            source={selectedResources[currentIndex]} // Usamos la imagen asociada al recurso
            style={styles.resourceImage}
            resizeMode="contain"
          />
          {selectedResources.length > 1 && (
            <View style={styles.navigationButtons}>
              <TouchableOpacity
                onPress={previousImage}
                style={[styles.navButton, currentIndex === 0 && styles.disabledButton]}
                disabled={currentIndex === 0}
              >
                <Text style={styles.navButtonText}>Anterior</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={nextImage}
                style={[styles.navButton, currentIndex === selectedResources.length - 1 && styles.disabledButton]}
                disabled={currentIndex === selectedResources.length - 1}
              >
                <Text style={styles.navButtonText}>Siguiente</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
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
    marginTop: 60,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#CE0615',
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  resourceTypeButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  resourceType: {
    fontSize: 18,
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  selectedResourceType: {
    backgroundColor: '#CE0615',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Asegura que el contenedor de la imagen ocupe todo el ancho
  },
  resourceImage: {
    width: width * 0.9, // 90% del ancho de la pantalla
    height: height * 0.75,
    aspectRatio: 0.75, // Proporción de 3:4
  },
  navigationButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  navButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#CE0615',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#999999',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
