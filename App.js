import React, { useState } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import BleScreen from "./screens/BleScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const bleName = "Connect to CHESTER";
const loginName = "Login";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        backBehavior="initialRoute"
        initialRouteName={loginName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === loginName) {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === bleName) {
              iconName = "bluetooth";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: "#8B0000",
          inactiveTintColor: "gray",
          labelStyle: { fontSize: 10, fontWeight: "bold", fontSize: 10 },
          iconStyle: { marginTop: 5, fontSize: 8, fontWeight: "bold" },
        }}
      >
        <Tab.Screen name={loginName} component={LoginScreen} />
        <Tab.Screen name={bleName} component={BleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
