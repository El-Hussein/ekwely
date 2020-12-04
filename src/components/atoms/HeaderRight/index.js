import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../common/colors';
import {styles} from './styles';

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.menu}
      onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu-outline" color={COLORS.white} size={28} />
    </TouchableOpacity>
  );
};

export default React.memo(HeaderRight);
