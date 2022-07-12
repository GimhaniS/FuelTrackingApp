import React from 'react';

import { StatusBar, StyleSheet, View } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SplashScreen } from './app/screens';
import { Homestack } from './app/navigation/Homestack';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <Homestack />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
