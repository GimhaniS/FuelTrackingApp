import { StyleSheet, Text, View, Platform } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import MapView from 'react-native-maps';
import GeoLocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import { COLORS } from '../../utils/Colors';
const HomeScreen = () => {
  const [currentLatitude, setCurrentLatitude] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const res = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('res===>', res);
      if (res === 'granted') {
        return true;
      } else {
        return false;
      }
    }
  };

  const getCurrentLocation = () => {
    GeoLocation.getCurrentPosition(
      (position) => {
        const currentLat = position.coords.latitude;
        const currentLong = position.coords.longitude;
        console.log('latitude====>', currentLat);
        console.log('longitude====>', currentLong);
        setCurrentLatitude(currentLat);
        setCurrentLongitude(currentLong);
        return true;
      },
      (error) => {
        console.log('ERROR==>', error);
        return false;
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  };

  useEffect(() => {
    requestLocationPermission();
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    flex: 1,
  },
});
