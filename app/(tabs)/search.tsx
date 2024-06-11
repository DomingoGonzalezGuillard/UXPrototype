import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
//import { SearchBar } from 'react-native-elements';
//import SearchBar from 'react-native-search-bar';
import SearchBar from "../../components/SearchBar";

export default function SearchScreen() {
  const route = useRoute();
  const [searchText, setSearchText] = useState('');

  const handleSearchSubmit = () => {
    console.log('Search submitted with input:', searchText);
  };
//   const buttonName = route.params?.buttonName ?? 'Default';

  return (
    <View>
      <Text>Button Name: {"buttonName"}</Text>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleSearchSubmit}
      />
    </View>
  );
}