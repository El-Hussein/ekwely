import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
const CheckBox = ({selected}) => {
  return (
    <View style={[styles.mainView, selected && styles.selectedBorder]}>
      {selected && <View style={styles.selected} />}
    </View>
  );
};

export default React.memo(CheckBox);
