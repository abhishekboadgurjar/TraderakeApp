// components/MainTabs.tsx
import React, { useCallback } from "react";
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface MainTabsProps {
  mainTabs: string[];
  mainTab: string;
  onMainTabChange: (tab: string) => void;
}

export default function MainTabs({ mainTabs, mainTab, onMainTabChange }: MainTabsProps) {
  const renderMainTab = useCallback(
    ({ item }: { item: string }) => (
      <TouchableOpacity
        onPress={() => onMainTabChange(item)}
        style={styles.mainTabButton}
      >
        <Text
          style={[
            styles.mainTabText,
            mainTab === item && styles.mainTabActiveText,
          ]}
        >
          {item}
        </Text>
        {mainTab === item && <View style={styles.mainTabUnderline} />}
      </TouchableOpacity>
    ),
    [mainTab, onMainTabChange]
  );

  return (
    <FlatList
      data={mainTabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(t) => `main-${t}`}
      renderItem={renderMainTab}
      style={{ marginTop: 12 }}
      contentContainerStyle={{ paddingBottom: 4 }}
      extraData={mainTab}
    />
  );
}

const styles = StyleSheet.create({
  mainTabButton: { marginRight: 22, alignItems: "center" },
  mainTabText: { color: "#888", fontSize: 14 },
  mainTabActiveText: { color: "#fff", fontWeight: "700" },
  mainTabUnderline: {
    height: 2,
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 6,
  },
});