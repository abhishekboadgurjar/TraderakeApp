import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "../screens/Dashboard/Home";
import Market from "../screens/Dashboard/Market";
import News from "../screens/Dashboard/Stock";
import Watchlist from "../screens/Dashboard/Watchlist";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#1a1a1a",
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Ionicons name="home" size={22} color={color} />;
          } else if (route.name === "Market") {
            return <FontAwesome5 name="chart-line" size={20} color={color} />;
          } else if (route.name === "News") {
            return (
              <MaterialCommunityIcons
                name="newspaper"
                size={22}
                color={color}
              />
            );
          } else if (route.name === "Watchlist") {
            return <Ionicons name="bookmark" size={22} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Watchlist" component={Watchlist} />
    </Tab.Navigator>
  );
}
