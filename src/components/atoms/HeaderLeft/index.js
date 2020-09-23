import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../common/colors';
import {styles} from './styles';

const HeaderLeft = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/Images/hasOrder.png')}
        style={styles.image}
      />
    </View>
  );
};

export default React.memo(HeaderLeft);
