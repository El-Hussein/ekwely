import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {COLORS} from '../../../common/colors';
import {styles} from './styles';
// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setCart, deleteCart} from '../../../redux/actions/Cart';
import IMAGES from '../../../common/images';

const Cart = (cart) => {
  

  return (
    <TouchableOpacity
      style={
        cart
          ? styles.favoriteOut
          : [styles.favoriteOut, {backgroundColor: COLORS.midGrayo}]
      }>
      <Image
        source={IMAGES.cart}
        style={
          cart
            ? styles.cartImage
            : [styles.cartImage, {tintColor: COLORS.white}]
        }
      />
    </TouchableOpacity>
  );
};


export default (Cart);
