import React from 'react';
import {View, TextInput, Text, TouchableOpacity ,Image} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import AppText from '../AppText';
import COLORS from '../../../common/colors';
import IMAGES from '../../../common/images';
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
        <Image source={IMAGES.drop} style={styles.dropImage} />

      </TouchableOpacity>
    </View>
  );
};

export default React.memo(DropDown);
