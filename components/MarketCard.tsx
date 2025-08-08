// components/MarketCard.tsx
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

type MarketItem = { id: string; title: string; value: string; change: string };

interface MarketCardProps {
  item: MarketItem;
}

const { width } = Dimensions.get("window");

export default function MarketCard({ item }: MarketCardProps) {
  const isNeg = item.change.trim().startsWith("-");

  return (
    <View style={styles.marketCard}>
      <Text style={styles.marketName}>{item.title}</Text>
      <Text style={styles.marketValue}>{item.value}</Text>
      <Text
        style={[styles.marketChange, isNeg ? styles.negative : styles.positive]}
      >
        {item.change}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  marketCard: {
    width: Math.round(width * 0.44),
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
  },
  marketName: { color: "#ddd", fontWeight: "700" },
  marketValue: { color: "#fff", marginTop: 6, fontWeight: "600" },
  marketChange: { marginTop: 6, fontSize: 12 },
  positive: { color: "#0f0" },
  negative: { color: "#ff4d4d" },
});
