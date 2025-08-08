// components/SearchBar.tsx
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={18} color="#888" />
      <TextInput
        placeholder="Search Here"
        placeholderTextColor="#7d7d7d"
        style={styles.searchInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  searchInput: { marginLeft: 8, color: "#ddd", flex: 1 },
});