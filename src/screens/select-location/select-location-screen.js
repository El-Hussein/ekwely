/* eslint-disable react/sort-comp */
import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  I18nManager,
  BackHandler,
} from 'react-native';
import MapView, {PROVIDER_DEFAULT, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './select-location-styles';
import COLORS from '../../common/colors';
import {calcFont} from '../../common/styles';

import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  getMyLocation,
  getLocationFromLatLng,
  QUERY_KEY,
} from '../../utils/location.helpers';

const content = {
  title: 'تحديد العنوان',
};

class SelectLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 222,
      longitude: 222,
      address: '',
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
  }

  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    const {latitude, longitude} = await getMyLocation();
    const data = await getLocationFromLatLng({
      latitude,
      longitude,
    });
    this.setState({
      latitude,
      longitude,
      address: data,
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    const {address} = this.state;
    this.props.route.params.onGoBack(address);
  };

  async onRegionChange(region) {
    const {latitude, longitude, latitudeDelta, longitudeDelta} = this.state;
    this.map.animateToRegion({
      latitudeDelta,
      longitudeDelta,
      ...region,
    });

    if (
      region.latitude.toFixed(6) === latitude.toFixed(6) &&
      region.longitude.toFixed(6) === longitude.toFixed(6)
    ) {
      this.setState({
        latitude: parseFloat(region.latitude),
        longitude: parseFloat(region.longitude),
        latitudeDelta,
        longitudeDelta,
      });
    } else {
      const data = await getLocationFromLatLng({
        latitude: region.latitude,
        longitude: region.longitude,
      });

      this.setState({
        ...region,
        latitudeDelta,
        longitudeDelta,
        address: data,
      });
      this.autoComplete.setAddressText(data.formattedAddress);
    }
  }

  getCurrentLocation = async () => {
    const {latitude, longitude} = await getMyLocation();
    const data = await getLocationFromLatLng({latitude, longitude});
    this.setState({
      latitude,
      longitude,
      address: data,
    });
    this.autoComplete.setAddressText(data.formattedAddress);
  };

  handleMapGoBack = () => {
    const {address} = this.state;
    this.props.route.params.onGoBack(address);
    this.props.navigation.goBack(null);
  };

  async onPressOption(details) {
    const data = await getLocationFromLatLng({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });

    this.setState({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      address: data,
    });
  }

  render() {
    const iconPlatform = Platform.OS === 'ios' ? 'ios' : 'md';
    const {latitude, longitude, longitudeDelta, latitudeDelta} = this.state;

    return (
      <View style={styles.containerView}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.handleMapGoBack()}>
            <Icon
              color={COLORS.white}
              name={
                I18nManager.isRTL
                  ? `${iconPlatform}-arrow-forward`
                  : `${iconPlatform}-arrow-back`
              }
              style={styles.backIcon}
              size={calcFont(30)}
            />
          </TouchableOpacity>
          <Text style={styles.titleEnText}>{content.title}</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={this.handleMapGoBack}>
            <Text style={styles.done}>تم</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex1}>
          <View style={styles.mapViewContainerStyle}>
            <MapView
              userLocationAnnotationTitle="عنواني"
              showsUserLocation
              provider={PROVIDER_DEFAULT}
              followsUserLocation
              region={{
                latitude,
                longitude,
                latitudeDelta,
                longitudeDelta,
              }}
              onPress={(event) =>
                this.onRegionChange(event.nativeEvent.coordinate)
              }
              // onRegionChangeComplete={(region) => this.onRegionChange(region)}
              onPoiClick={(e) => this.onRegionChange(e.nativeEvent.coordinate)}
              style={styles.mapViewStyle}
              ref={(o) => {
                this.map = o;
              }}>
              <Marker
                title="العنوان المحدد"
                pinColor={COLORS.main}
                coordinate={{
                  latitude,
                  longitude,
                }}
              />
            </MapView>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.currentLocation}
              onPress={this.getCurrentLocation}>
              <MaterialIcons name="my-location" size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchMapContainer}>
            <GooglePlacesAutocomplete
              ref={(ref) => {
                this.autoComplete = ref;
              }}
              style={styles.textInputStyle}
              placeholder="بحث..."
              minLength={2} // minimum length of text to search
              autoFocus
              returnKeyType="search"
              listViewDisplayed={false}
              fetchDetails
              renderDescription={(row) => row.description} // custom description render
              onPress={(data, details = null) => this.onPressOption(details)}
              query={QUERY_KEY}
              styles={{
                textInputContainer: styles.textInputContainer,
                description: styles.description,
                textInput: styles.textInput,
                container: styles.containerMap,
                listView: styles.listView,
                powered: {
                  display: 'none',
                },
              }}
              currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="العنوان"
              nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              filterReverseGeocodingByTypes={[
                'locality',
                'administrative_area_level_3',
              ]}
              debounce={200}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SelectLocationScreen;
