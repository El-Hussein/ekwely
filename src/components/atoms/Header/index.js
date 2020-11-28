import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../common/colors';
import {styles} from './styles';
import HeaderLeft from '../HeaderLeft';
import HeaderRight from '../HeaderRight';

const Header = () => {
  return (
    <View style={styles.header}>
      <HeaderRight />
      <HeaderLeft />
    </View>
  );
};
export default React.memo(Header);
