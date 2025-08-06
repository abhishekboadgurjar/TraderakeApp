import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainTabs from "./MainTabs";
import { useAuthStore } from "../store/auth";

export default function AppNavigator() {
  const { accessToken, loadTokens } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true); // ✅ loading flag

  useEffect(() => {
    const initAuth = async () => {
      await loadTokens(); // 🔁 Load tokens from AsyncStorage
      setIsLoading(false); // 🟢 Once loaded, show UI
    };

    initAuth();
  }, []);

  if (isLoading) return null; // Or a SplashScreen/Loader component

  return (
    <NavigationContainer>
      {accessToken ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
