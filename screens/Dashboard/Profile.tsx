import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../store/auth";

export default function Profile() {
  const username = useAuthStore((s) => s.username);
  const logout = useAuthStore((s) => s.logout);

  return (
    <View style={styles.container}>
      <Ionicons
        name="person-circle-outline"
        size={80}
        color="#fff"
        style={styles.icon}
      />

      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.username}>{username}</Text>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginBottom: 20,
  },
  welcome: {
    color: "#bbb",
    fontSize: 20,
    marginBottom: 4,
  },
  username: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 40,
  },
  logoutBtn: {
    backgroundColor: "#ff3b30",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
