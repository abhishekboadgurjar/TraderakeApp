// components/SubTabs.tsx
import React, { useCallback } from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

interface SubTabsProps {
  subTabs: string[];
  subTab: string;
  onSubTabChange: (tab: string) => void;
}

export default function SubTabs({ subTabs, subTab, onSubTabChange }: SubTabsProps) {
  const renderSubTab = useCallback(
    ({ item }: { item: string }) => (
      <TouchableOpacity
        onPress={() => onSubTabChange(item)}
        style={item === subTab ? styles.subTabActive : styles.subTab}
      >
        <Text
          style={item === subTab ? styles.subTabActiveText : styles.subTabText}
        >
          {item}
        </Text>
      </TouchableOpacity>
    ),
    [subTab, onSubTabChange]
  );

  return (
    <FlatList
      data={subTabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(t) => `sub-${t}`}
      renderItem={renderSubTab}
      style={{ marginTop: 10, marginBottom: 12 }}
      extraData={subTab}
    />
  );
}

const styles = StyleSheet.create({
  subTab: {
    backgroundColor: "#1f1f1f",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  subTabActive: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  subTabText: { color: "#aaa" },
  subTabActiveText: { color: "#000", fontWeight: "700" },
});