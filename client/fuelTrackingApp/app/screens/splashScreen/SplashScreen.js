import { StyleSheet, Text, Image, View } from 'react-native';
import React, { useEffect } from 'react';
import { COLORS } from '../../utils/Colors';
const fuel = require('../../assets/fuel.jpg');
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={fuel} style={styles.image} />
    </View>
  );
};

export { SplashScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  image: {
    width: 110,
    height: 110,
  },
});
