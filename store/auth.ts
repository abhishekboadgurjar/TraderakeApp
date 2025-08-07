import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

let refreshInterval: NodeJS.Timeout | null = null;

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  username: string | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  refreshAccessToken: () => Promise<void>;
  logout: () => Promise<void>;
  loadTokens: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  refreshToken: null,
  username: null,

  loadTokens: async () => {
    const access = await AsyncStorage.getItem("accessToken");
    const refresh = await AsyncStorage.getItem("refreshToken");
    const username = await AsyncStorage.getItem("username");

    if (refresh) {
      startRefreshInterval(refresh);
    }

    set({ accessToken: access, refreshToken: refresh, username });
  },

  signup: async (username, email, password) => {
    await axiosInstance.post("/accounts/api/register/", {
      username,
      email,
      password,
    });
  },

  login: async (username, password) => {
    const res = await axiosInstance.post("/accounts/api/login/", {
      username,
      password,
    });

    const { access, refresh } = res.data;

    await AsyncStorage.setItem("accessToken", access);
    await AsyncStorage.setItem("refreshToken", refresh);
    await AsyncStorage.setItem("username", username);

    set({ accessToken: access, refreshToken: refresh, username });

    startRefreshInterval(refresh); // 👈 Start refresh cycle
  },

  refreshAccessToken: async () => {
    const refresh = get().refreshToken || (await AsyncStorage.getItem("refreshToken"));

    if (!refresh) return;

    try {
      const res = await axiosInstance.post("/accounts/api/token/refresh/", { refresh });
      const { access } = res.data;

      await AsyncStorage.setItem("accessToken", access);
      set({ accessToken: access });
    } catch (error) {
      console.warn("Token refresh failed", error);
      get().logout();
    }
  },

logout: async () => {
  const refresh = get().refreshToken || (await AsyncStorage.getItem("refreshToken"));

  try {
    if (refresh) {
      await axiosInstance.post("/accounts/api/logout/", { refresh });
    }
  } catch (e: any) {
    if (e.response?.status !== 401) {
      console.warn("Logout error", e);
    }
    // Else: token already expired → safe to ignore
  }

  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
  await AsyncStorage.removeItem("username");

  if (refreshInterval) {
    clearInterval(refreshInterval);
    refreshInterval = null;
  }
  set({ accessToken: null, refreshToken: null, username: null });
},

}));

function startRefreshInterval(refreshToken: string) {
  if (refreshInterval) clearInterval(refreshInterval);

 refreshInterval = setInterval(async () => {
  console.log("Trying to refresh token");
  await useAuthStore.getState().refreshAccessToken();
},5 * 60 * 1000); 

}
