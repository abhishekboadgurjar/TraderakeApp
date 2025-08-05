import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Dashboard/Home";
import Market from "../screens/Dashboard/Market";
import Stock from "../screens/Dashboard/Stock";
import Watchlist from "../screens/Dashboard/Watchlist";
import Profile from "../screens/Dashboard/Profile";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Stock" component={Stock} />
      <Tab.Screen name="Watchlist" component={Watchlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
