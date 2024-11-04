import SearchBar from "../../components/SearchBar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, useWindowDimensions, Pressable } from "react-native";
import { useGlobalSearchParams, Link } from "expo-router";
import Fuse from "fuse.js";
import Icon from "react-native-vector-icons/FontAwesome"; // Importamos el ícono de FontAwesome

import { speakText } from "../../utils/TextToSpeech";
import { playSound } from "../../utils/playSound";
import { classrooms } from "@/classrooms/classrooms";
import { Classroom } from "@/classrooms/typesClassrooms";
import { capitalize } from "@/utils/capitalize";
import { useLanguage } from "@/contexts/LanguageContext";

const itemsToString = (items: Classroom[]): string => {
  return items.filter((item) => item.show === true).map(item => `${item.id}`).join('. ');
};

export default function SearchScreen() {
  const { query } = useGlobalSearchParams<{ query: string }>();
  const { width } = useWindowDimensions();

  const [searchText, setSearchText] = useState(query ?? "");
  const [filteredItems, setFilteredItems] = useState<Classroom[]>(Object.values(classrooms));

  const { translations } = useLanguage();

  useEffect(() => {
    const options = {
      keys: ["id"],
      includeScore: true,
    };

    const fuse = new Fuse(Object.values(classrooms), options); // Crear fuse aquí

    if (searchText.trim() === "") {
      setFilteredItems(Object.values(classrooms));
    } else {
      const result = fuse.search(searchText);
      setFilteredItems(result.map(({ item }) => item));
    }
  }, [searchText]); // Dependencia en searchText

  useEffect(() => {
    if (query !== undefined) {
      setSearchText(query);
    }
  }, [query]);

  const getItemWidth = () => {
    const padding = 20; // Total horizontal padding
    const gap = 20; // Gap between items
    return (width - padding - gap) / 2; // Divide available width by 2 for two columns
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.backButtonContainer}>
        <Pressable onPress={() => playSound(require('@/assets/sounds/back.mp3'))}>
          <Link href="/" asChild>
            <View style={styles.backButtonContent}>
              <Icon name="chevron-left" size={20} color="#CE0615" style={styles.icon} />
              <Text style={styles.backText}>{translations['back']}</Text>
            </View>
          </Link>
        </Pressable>
      </View>
      
      <View style={styles.instructionContainer}>
        <Icon name="chevron-right" size={20} color="#CE0615" style={styles.icon} />
        <Text style={styles.instructionText}>{translations['name_classroom']} 🚪</Text>
        <a 
          onClick={() => speakText(`${"Introduce nombre de sala."} ${itemsToString(filteredItems)}`)}
          style={styles.iconContainer}
        >
          <Icon name="volume-up" size={40} color="#000000"/>
        </a>
      </View>

      <View>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={() => {}}
        />
      </View>

      <FlatList
        data={filteredItems.filter((item) => item.show === true)}
        keyExtractor={(item) => `${item.build}-${item.number}`}
        numColumns={2}
        extraData={width}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable onPress={() => playSound(require('@/assets/sounds/click.mp3'))}>
            <Link href={{ pathname: `/display_map`, params: { id: item.id } }} style={styles.link} >
              <View style={[styles.buttonContainer, { width: getItemWidth() }]}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{`${item.build[0].toUpperCase()}-${item.floor}${item.number}`}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.infoText}>{translations['building']}: {capitalize(item.build)}</Text>
                  <Text style={styles.infoText}>{translations['floor']}: {item.floor}</Text>
                  <Text style={styles.infoText}>{translations['number']}: {item.number}</Text>
                </View>
              </View>
            </Link>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No se encontraron salas.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    emptyText: {
        textAlign: "center",
        fontSize: 16,
        color: "#888",
      },
    backButtonContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      marginTop: 10,
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
    container: {
      flex: 1,
      padding: 10,
    },
    instructionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', // Centrar horizontalmente
      marginBottom: 10,
    },
    row: {
      justifyContent: 'space-between',
    },
    buttonContainer: {
      flexDirection: 'column',
      alignItems: 'stretch',
      marginBottom: 20,
    },
    titleContainer: {
      backgroundColor: '#8B0000',
      padding: 10,
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff',
    },
    infoContainer: {
      backgroundColor: '#f4f4f4',
      padding: 15,
      alignItems: 'flex-start',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    infoText: {
      fontSize: 16,
      color: '#000',
    },
    link: {
      flex: 1,
    },
    instructionText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10, // Espaciado entre el ícono y el texto
    },
    listContent: {
      flexGrow: 1,
    },
    icon: {
      marginRight: 10, // Separar el ícono del texto
    },
    iconContainer: {
      alignSelf: 'flex-end',
      marginLeft: 'auto', // Moves it to the far right within the flex container
    },
  });