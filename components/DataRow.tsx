// components/DataRow.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type DisplayItem = {
  id: string;
  leftTitle: string;
  leftSubtitle?: string;
  rightValue: string;
  rightChange: string;
};

interface DataRowProps {
  item: DisplayItem;
}

export default function DataRow({ item }: DataRowProps) {
  const isNegative = item.rightChange.trim().startsWith("-");

  return (
    <View style={styles.indexCard}>
      {/* left: logo circle */}
      <View style={styles.logoCircle}>
        <Text style={styles.logoInitial}>
          {(item.leftTitle || "").slice(0, 2).toUpperCase()}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.indexName}>{item.leftTitle}</Text>
        {item.leftSubtitle ? (
          <Text style={styles.indexTime}>{item.leftSubtitle}</Text>
        ) : null}
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.indexValue}>{item.rightValue}</Text>
        <Text
          style={[
            styles.indexChange,
            isNegative ? styles.negative : styles.positive,
          ]}
        >
          {isNegative ? "▼ " : "▲ "}
          {item.rightChange}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indexCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  logoCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#0b0b0b",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  logoInitial: { color: "#fff", fontWeight: "700" },
  indexName: { color: "#fff", fontWeight: "700" },
  indexTime: { color: "#888", fontSize: 12 },
  indexValue: { color: "#fff", fontWeight: "700" },
  indexChange: { fontSize: 12, marginTop: 6 },
  positive: { color: "#0f0" },
  negative: { color: "#ff4d4d" },
});