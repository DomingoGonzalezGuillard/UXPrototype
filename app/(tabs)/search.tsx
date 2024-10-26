import SearchBar from "../../components/SearchBar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import { useGlobalSearchParams, Link } from "expo-router";
import Fuse from "fuse.js";
import Icon from "react-native-vector-icons/FontAwesome"; // Importamos el ícono de FontAwesome

import { speakText } from "../utils/TextToSpeech";

type Item = {
  id: string;
  code: string;
  route: string;
  piso: string;
  sala: string;
  edificio: string;
};

const items = [
  { id: "1", code: "C-101", route: '/C-101', piso: '1', sala: '101', edificio: 'Ciencias' },
  { id: "2", code: "C-102", route: '/C-102', piso: '1', sala: '102', edificio: 'Ciencias' },
  { id: "28", code: "C-105", route: '/C-106', piso: '1', sala: '105', edificio: 'Ciencias' },
  { id: "3", code: "C-201", route: '/C-201', piso: '2', sala: '201', edificio: 'Ciencias' },
  { id: "4", code: "C-202", route: '/C-202', piso: '2', sala: '202', edificio: 'Ciencias' },
  { id: "5", code: "H-101", route: '/H-101', piso: '1', sala: '101', edificio: 'Humanidades' },
  { id: "6", code: "H-201", route: '/H-201', piso: '2', sala: '201', edificio: 'Humanidades' },
  { id: "7", code: "R-101", route: '/R-101', piso: '1', sala: '101', edificio: 'Reloj' },
  { id: "8", code: "R-102", route: '/R-102', piso: '1', sala: '102', edificio: 'Reloj' },
  { id: "9", code: "R-201", route: '/R-201', piso: '2', sala: '201', edificio: 'Reloj' },
  { id: "10", code: "I-101", route: '/I-101', piso: '1', sala: '101', edificio: 'Ingeniería' },
  { id: "11", code: "I-102", route: '/I-102', piso: '1', sala: '102', edificio: 'Ingeniería' },
  { id: "12", code: "I-103", route: '/I-103', piso: '1', sala: '103', edificio: 'Ingeniería' },
  { id: "13", code: "I-104", route: '/I-104', piso: '1', sala: '104', edificio: 'Ingeniería' },
  { id: "14", code: "I-105", route: '/I-105', piso: '1', sala: '105', edificio: 'Ingeniería' },
  { id: "15", code: "I-106", route: '/I-106', piso: '1', sala: '106', edificio: 'Ingeniería' },
  { id: "16", code: "I-201", route: '/I-201', piso: '2', sala: '201', edificio: 'Ingeniería' },
  { id: "17", code: "I-202", route: '/I-202', piso: '2', sala: '202', edificio: 'Ingeniería' },
  { id: "29", code: "I-204", route: '/I-204', piso: '2', sala: '204', edificio: 'Ingeniería' },
  { id: "18", code: "I-301", route: '/I-301', piso: '3', sala: '301', edificio: 'Ingeniería' },
  { id: "19", code: "I-302", route: '/I-302', piso: '3', sala: '302', edificio: 'Ingeniería' },
  { id: "26", code: "B-101", route: '/B-101', piso: '1', sala: '101', edificio: 'Biblioteca' },
  { id: "27", code: "B-102", route: '/B-102', piso: '1', sala: '102', edificio: 'Biblioteca' },
  { id: "20", code: "B-201", route: '/B-201', piso: '2', sala: '201', edificio: 'Biblioteca' },
  { id: "21", code: "B-202", route: '/B-202', piso: '2', sala: '202', edificio: 'Biblioteca' },
  { id: "22", code: "B-203", route: '/B-203', piso: '2', sala: '203', edificio: 'Biblioteca' },
  { id: "23", code: "B-204", route: '/B-204', piso: '2', sala: '204', edificio: 'Biblioteca' },
  { id: "24", code: "B-301", route: '/B-301', piso: '3', sala: '301', edificio: 'Biblioteca' },
  { id: "25", code: "B-302", route: '/B-302', piso: '3', sala: '302', edificio: 'Biblioteca' }
];

const itemsToString = (items: Item[]): string => {
  return items.map(item => item.code).join('. ');
};

export default function SearchScreen() {
  const { query } = useGlobalSearchParams<{ query: string }>();
  const { width } = useWindowDimensions();

  const [searchText, setSearchText] = useState(query ?? "");
  const [filteredItems, setFilteredItems] = useState(items);

  const options = {
    keys: ["code"],
    includeScore: true,
  };

  const fuse = new Fuse(items, options);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredItems(items);
    } else {
      const result = fuse.search(searchText);
      setFilteredItems(result.map(({ item }) => item));
    }
  }, [searchText]);

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
      <View style={styles.instructionContainer}>
        <Icon name="chevron-right" size={20} color="#CE0615" style={styles.icon} />
        <Text style={styles.instructionText}>Introduce nombre de sala 🚪</Text>
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
        data={filteredItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        extraData={width}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Link href={item.route ?? '/default'} style={styles.link}>
            <View style={[styles.buttonContainer, { width: getItemWidth() }]}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.code}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Edificio: {item.edificio}</Text>
                <Text style={styles.infoText}>Piso: {item.piso}</Text>
                <Text style={styles.infoText}>Sala: {item.sala}</Text>
              </View>
            </View>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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