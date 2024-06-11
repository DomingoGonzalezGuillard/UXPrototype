
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import SearchBar from "../../components/SearchBar";

const items = [
  { id: '1', code: 'C-101' },
  { id: '2', code: 'C-202' },
  { id: '3', code: 'C-201' }
];

export default function SearchScreen() {
  const route = useRoute();
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = () => {
    const filtered = items.filter(item => 
      item.code.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <View style={styles.container}>
      <Text>Button Name: {"buttonName"}</Text>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleSearch}
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
    borderBottomColor: '#ccc',
  },
});
