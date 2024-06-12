import SearchBar from "../../components/SearchBar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useGlobalSearchParams, Link } from "expo-router";
import Fuse from "fuse.js";

const items = [
  { id: "1", code: "C-101", route: '/C-101' },
  { id: "2", code: "C-102", route: '/C-102' },
  { id: "28", code: "C-106", route: '/C-106' },
  { id: "3", code: "C-201", route: '/C-201' },
  { id: "4", code: "C-202", route: '/C-202' },
  { id: "5", code: "H-101", route: '/H-101' },
  { id: "6", code: "H-201", route: '/H-201' },
  { id: "7", code: "R-101", route: '/R-101' },
  { id: "8", code: "R-102", route: '/R-102' },
  { id: "9", code: "R-201", route: '/R-201' },
  { id: "10", code: "I-101", route: '/I-101' },
  { id: "11", code: "I-102", route: '/I-102' },
  { id: "12", code: "I-103", route: '/I-103' },
  { id: "13", code: "I-104", route: '/I-104' },
  { id: "14", code: "I-105", route: '/I-105' },
  { id: "15", code: "I-106", route: '/I-106' },
  { id: "16", code: "I-201", route: '/I-201' },
  { id: "17", code: "I-202", route: '/I-202' },
  { id: "29", code: "I-204", route: '/I-204' },
  { id: "18", code: "I-301", route: '/I-301' },
  { id: "19", code: "I-302", route: '/I-302' },
  { id: "26", code: "B-101", route: '/B-101' },
  { id: "27", code: "B-102", route: '/B-102' },
  { id: "20", code: "B-201", route: '/B-201' },
  { id: "21", code: "B-202", route: '/B-202' },
  { id: "22", code: "B-203", route: '/B-203' },
  { id: "23", code: "B-204", route: '/B-204' },
  { id: "24", code: "B-301", route: '/B-301' },
  { id: "25", code: "B-302", route: '/B-302' },
];

export default function SearchScreen() {
  const { query } = useGlobalSearchParams<{ query: string }>();

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

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>Introduce nombre de sala 🚪</Text> {/* Este es el texto agregado */}
      <View>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={() => {}}
        />
      </View>

      <View style={styles.centeredView} >
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link href={item.route ?? '/default'} style={styles.link}>
                <Text style={styles.title}>{item.code}</Text>
            </Link>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 10,
  },
  link: {
    width: '100%',
    marginVertical: 10,
    
  },
  title: {
    fontSize: 18,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  instructionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});