import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import AppText from '../AppText';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';
const DropDown = ({placeholder, data ,}) => {
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.dropDown}>
        <AppText
          style={{
            color: COLORS.lightTextGray,
            fontSize: calcFont(16),
            fontWeight: 'bold',
          }}>
          {placeholder}
        </AppText>
        <IconIonicons
          name="chevron-down"
          size={calcFont(25)}
          color={COLORS.lightTextGray}
          />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(DropDown);
