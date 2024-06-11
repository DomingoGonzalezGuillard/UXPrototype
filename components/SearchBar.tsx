import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import React from "react";

interface SearchBarProps extends TextInputProps {
    searchText: string;
    setSearchText: (text: string) => void;
    onSubmit: () => void;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text) => props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    input:{
        backgroundColor:"#fff",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1
    }
});