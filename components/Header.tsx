// components/Header.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.brand}>TRADERAKE</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Notification Icon with Badge */}
        <View style={[styles.notification, { marginRight: 12 }]}>
          <Ionicons name="notifications-outline" size={22} color="#fff" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </View>

        {/* Profile Icon */}
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  logo: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  brand: {
    color: "#d7d7d7",
    fontSize: 18,
    fontWeight: "700",
    flex: 1,
    letterSpacing: 1,
  },
  notification: { position: "relative", marginLeft: 4 },
  badge: {
    position: "absolute",
    top: -6,
    right: -8,
    backgroundColor: "#ff3b30",
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: { color: "#fff", fontSize: 11 },
});
