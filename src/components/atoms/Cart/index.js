import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setCart, deleteCart} from '../../../redux/actions/Cart';
import IMAGES from '../../../common/images';
import styles from './styles';
import COLORS from '../../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {calcFont} from '../../../common/styles';

const Cart = ({id, isCart, setCart, deleteCart}) => {
  const [cart, toggleCart] = useState(isCart);
  const toggle = () => {
    toggleCart(!cart);
    if (isCart) {
      deleteCart(id);
    } else {
      setCart(id);
    }
  };

  return (
    <TouchableOpacity
      onPress={toggle}
      style={[styles.favoriteOut, !cart && {backgroundColor: COLORS.midGrayo}]}>
      <Image
        source={IMAGES.cart}
        style={[styles.cartImage, !cart && {tintColor: COLORS.white}]}
      />
    </TouchableOpacity>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({setCart, deleteCart}, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Cart);
