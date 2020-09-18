import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import AppText from '../AppText';
import COLORS from '../../../common/colors';
import IMAGES from '../../../common/images';
import {calcFont} from '../../../common/styles';

const DropDown = ({placeholder, onPress, disabled}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.dropDown, disabled && styles.disabled]}>
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
