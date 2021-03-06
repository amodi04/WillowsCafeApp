import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/Screens/LoginScreen";
import LoyaltyCardScreen from "./src/Screens/LoyaltyCardScreen";
import SettingsScreen from "./src/Screens/SettingsScreens/SettingsScreen";
import { Ionicons } from "react-native-vector-icons";
import CodeScreen from "./src/Screens/CodeScreen";
import AboutScreen from "./src/Screens/SettingsScreens/AboutScreen";
import ContactScreen from "./src/Screens/SettingsScreens/ContactScreen";
import PolicyScreen from "./src/Screens/SettingsScreens/PolicyScreen";
import TermsAndConditionsScreen from "./src/Screens/SettingsScreens/TermsAndConditionsScreen";
import QRScannerScreen from "./src/Screens/QRScannerScreen";
import MenuScreen from "./src/Screens/MenuScreen";
import QRScreen from "./src/Screens/QRScreen";
import SplashScreen from "./src/Screens/SplashScreen";
import AdminScreen from "./src/Screens/AdminScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#CC5500",
            elevation: 0,
          },
          headerTintColor: "#FFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="LoyaltyCardScreen"
          component={LoyaltyCardScreen}
          options={({ navigation }) => ({
            title: "Loyalty Card",
            headerStyle: {
              backgroundColor: "#CC5500",
              elevation: 0,
            },
            headerTintColor: "#FFF",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerLeft: () => (
              <View style={{ paddingHorizontal: 20 }}>
                <Ionicons
                  name="cafe"
                  size={30}
                  color="#212322"
                  onPress={() => navigation.navigate("MenuScreen")}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{ paddingHorizontal: 20 }}>
                <Ionicons
                  name="settings"
                  size={30}
                  color="#212322"
                  onPress={() => navigation.navigate("SettingsScreen")}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="PolicyScreen" component={PolicyScreen} />
        <Stack.Screen
          name="TermsAndConditionsScreen"
          component={TermsAndConditionsScreen}
        />
        <Stack.Screen name="QRScannerScreen" component={QRScannerScreen} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="QRScreen" component={QRScreen} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CodeScreen"
          component={CodeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
