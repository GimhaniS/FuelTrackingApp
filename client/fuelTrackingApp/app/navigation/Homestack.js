import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SplashScreen } from '../screens';
const Stack = createStackNavigator();
const Homestack = () => {
  return (
    <Stack.Navigator>
      <>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </>
    </Stack.Navigator>
  );
};

export { Homestack };
