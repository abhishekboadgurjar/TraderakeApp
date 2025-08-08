// components/MarketSection.tsx
import React, { useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MarketCard from "./MarketCard";
import { MarketItem } from "../data/dummyData";

interface MarketSectionProps {
  marketData: MarketItem[];
}

export default function MarketSection({ marketData }: MarketSectionProps) {
  const renderMarketCard = useCallback(({ item }: { item: MarketItem }) => (
    <MarketCard item={item} />
  ), []);

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>MARKET</Text>
        <Text style={styles.more}>More</Text>
      </View>

      <FlatList
        horizontal
        data={marketData}
        renderItem={renderMarketCard}
        keyExtractor={(i) => i.id}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 8, maxHeight: 110 }}
        contentContainerStyle={{ paddingRight: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  sectionTitle: { color: "#fff", fontWeight: "700" },
  more: { color: "#6aa8ff", fontSize: 13 },
});