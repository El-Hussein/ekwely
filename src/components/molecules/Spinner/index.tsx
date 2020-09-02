import React from 'react';
import {ActivityIndicator, StyleSheet, View, Platform} from 'react-native';
import COLORS from '../../common';

const Spinner = ({size, style}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator animating size="small" color={COLORS.main} />
    </View>
  );
};

export {Spinner};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    shadowOffset: {height: 0.5, width: 0.5},
    elevation: 3,
    shadowColor: '#ccc',
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Platform.OS === 'android' ? 60 : 80,
    alignSelf: 'center',
    borderRadius: 17.5,
    width: 35,
    height: 35,
  },
});
