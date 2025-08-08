import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";
import Profile from "../screens/Dashboard/Profile";
import Notification from "../screens/Dashboard/Notification";

const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      {/* Tabs - No header */}
      <Stack.Screen
        name="Tabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />

      {/* Profile Screen - Show header with back */}
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerStyle: { backgroundColor: "#1a1a1a" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      />

      {/* Notification Screen - Show header with back */}
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Notifications",
          headerStyle: { backgroundColor: "#1a1a1a" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      />
    </Stack.Navigator>
  );
}
