import React from "react";
import { View, Text, Button } from "react-native";
import { useAuthStore } from "../../store/auth";

export default function Profile() {
  const username = useAuthStore((s) => s.username);
  const logout = useAuthStore((s) => s.logout);

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome {username}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
