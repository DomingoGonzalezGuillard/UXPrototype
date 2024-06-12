import SearchBar from "../../components/SearchBar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import Fuse from "fuse.js";

const items = [
  { id: "1", code: "C-101" },
  { id: "2", code: "C-202" },
  { id: "3", code: "C-201" },
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
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={() => {}}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.code}</Text>}
      />
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
  },
});
