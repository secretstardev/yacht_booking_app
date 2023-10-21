import React from "react";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/welcome';
import SplashScreen from "./src/screens/splash";
import LoginScreen from "./src/screens/login";
import RegisterScreen from "./src/screens/signup";
function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
function AboutScreen() {
  return (
    <View>
      <Text>About Screen</Text>
    </View>
  );
}
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LoginScreen />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="About" component={AboutScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
