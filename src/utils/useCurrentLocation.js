import {Platform, Alert} from 'react-native';
import {
  PERMISSIONS,
  request,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import * as Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';

const useCurrentLocation = () => {
  const [state, setState] = useState({
    location: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const result = await request(
        Platform.select({
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        }),
      );
      if (result === RESULTS.GRANTED) {
        getPosition();
      } else {
        throw new Error(result);
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        location: null,
        loading: false,
        error: error,
      }));
    }
  };

  const getPosition = async () => {
    await Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        setState((prev) => ({
          ...prev,
          location: {latitude, longitude},
          loading: false,
          error: false,
        }));
      },
      (error) => {
        if (error.code == 2) {
          openSettings().catch(() => Alert.alert('cannot open settings'));
        }
        setState((prev) => ({
          ...prev,
          location: null,
          loading: false,
          error: error,
        }));
      },
      {
        timeout: 40000,
        maximumAge: 10000,
      },
    );
  };

  return state;
};

export {useCurrentLocation};
