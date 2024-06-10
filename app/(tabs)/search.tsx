import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
//import { SearchBar } from 'react-native-elements';
import SearchBar from 'react-native-search-bar';

export default function SearchScreen() {
  const route = useRoute();
//   const buttonName = route.params?.buttonName ?? 'Default';

  return (
    <View>
      <Text>Button Name: {"buttonName"}</Text>

    </View>
  );
}