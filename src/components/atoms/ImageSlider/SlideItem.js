import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import IMAGES from '../../../common/images';
import AppText from '../AppText';
const ItemSlide = ({item}) => {
  return (
    <Image
      style={styles.swiperImageStyle}
      source={item.image_path}
      resizeMode="contain"
    />
  );
};

export default ItemSlide;
