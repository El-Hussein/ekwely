import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
// redux
import {bindActionCreators} from 'redux';
import {connect, useSelector} from 'react-redux';
import {setCart, deleteCart} from '../../../redux/actions/Cart';
import IMAGES from '../../../common/images';
import styles from './styles';
import COLORS from '../../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {calcFont} from '../../../common/styles';
import {getProducts} from '../../../redux/actions/Products';
import {useNavigation} from '@react-navigation/native';

const Cart = ({
  id,
  isCart,
  serviceType,
  isProduct,
  setCart,
  deleteCart,
  getProducts,
}) => {
  const [cart, toggleCart] = useState(isCart);
  const user = useSelector((state) => state.auth.user);
  const navgation = useNavigation();

  const toggle = () => {
    if (user) {
      toggleCart(!cart);
      if (isCart) {
        deleteCart(id, true);
        getProducts(true);
      } else {
        setCart(id, 1, serviceType, isProduct);
        getProducts(true);
      }
    } else {
      navgation.navigate('Auth');
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
    ...bindActionCreators({setCart, deleteCart, getProducts}, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Cart);
