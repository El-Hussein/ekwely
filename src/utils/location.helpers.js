import geolocationService from '@react-native-community/geolocation';
import {Platform} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Geocoder from 'react-native-geocoding';

// const GEOCODING_API_KEY = 'AIzaSyBLXAD0ETj7jqhla5t8JqaTqvV0lB3q-K4'; // mongy one
const GEOCODING_API_KEY = 'AIzaSyAbz-RVyfy_QR5W2Nc_WAqzrbcELkK5mH8'; // magneto one
// const GEOCODING_API_KEY = 'AIzaSyDC2hgjvjaEMeKOnt-hAz67yG0NBNfkCr0';

/**
 * A function that returns current location
 */
export const getMyLocation = () => {
  /**
   * set config to geolocation library
   */
  return new Promise(async (resolve, reject) => {
    try {
      const result = await request(
        Platform.select({
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        }),
      );
      if (result === RESULTS.GRANTED) {
        geolocationService.getCurrentPosition(
          (position) => {
            const coords = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            resolve(coords);
          },
          (error) => {
            reject(error);
          },
          {
            timeout: 30000,
          },
        );
      } else {
        reject(result);
      }
    } catch (error) {
      resolve({
        latitude: null,
        longitude: null,
      });
    }
  });
};

const findLocationName = (locationObject: any[], key: locationKeys) => {
  // find an elemnt by provided key
  const foundElement = locationObject.find(
    (addressComponent) => addressComponent.types[0] === key,
  );

  /**
   * return long name if is provided
   * return short name if no long name found
   * retun empty string if no long or short name
   */
  if (foundElement) return foundElement.long_name || foundElement.short_name;

  return '';
};

const formAddress = (location: any, coordinates: LatLng) => {
  // grap data from location object
  const fullAddressData = location.results[0];
  const addressComponents = fullAddressData.address_components;

  // get formatted address name
  const formattedAddress = fullAddressData.formatted_address;

  // get street name
  const streetName = findLocationName(addressComponents, 'route');

  // get city name
  const cityName = findLocationName(addressComponents, 'locality');

  // get state name
  const stateName = findLocationName(
    addressComponents,
    'administrative_area_level_1',
  );

  // gt country name
  const countryName = findLocationName(addressComponents, 'country');

  // form full address location
  const fulllAddress: Location = {
    coordinates,
    street: streetName,
    city: cityName,
    state: stateName,
    country: countryName,
    formattedAddress,
  };

  return fulllAddress;
};

/**
 * A function that recieves an object
 * and returns location details
 * @param latLngObject
 * @public
 */
export const getLocationFromLatLng = async (latLngObject) => {
  // initialize geocoder
  Geocoder.init(GEOCODING_API_KEY);

  // grap lat & lng from object
  const {latitude, longitude} = latLngObject;

  // get location details from lat and lng
  return new Promise(async (resolve, reject) => {
    try {
      const locationApiResponse = await Geocoder.from(latitude, longitude);
      const finalLocation = formAddress(locationApiResponse, latLngObject);
      resolve(finalLocation);
    } catch (error) {
      reject(error);
    }
  });
};

export const LATITUDE_DELTA = 0.002;
export const LONGITUDE_DELTA = 0.002;

export const QUERY_KEY = {
  key: 'AIzaSyBwIGw_YL5JPBJfEdPizPQR9jsg4wJh12E',
  language: 'en',
  // types: '(regions)',
};
