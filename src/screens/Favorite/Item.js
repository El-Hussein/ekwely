import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import {calcWidth} from '../../common/styles';
import {Line} from '../../components/atoms/Line';

const Item = ({item}) => {
  return (
    <View>
      <View style={styles.item}>
        <AppText style={styles.product}>{item.name}</AppText>

        <TouchableOpacity>
          <IconIonicons name="close-circle-outline" size={calcWidth(30)} />
        </TouchableOpacity>
      </View>
      <Line width={calcWidth(345)} color={COLORS.lightGray} />
    </View>
  );
};

export default Item;
