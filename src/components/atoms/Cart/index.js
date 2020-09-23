import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {COLORS} from '../../../common/colors';
import {styles} from './styles';
// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setCart, deleteCart} from '../../../redux/actions/Cart';
import IMAGES from '../../../common/images';

const Cart = ({id, isCart, setCart, deleteCart}) => {
  const [Cart, toggleCart] = useState(isFav);
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

function mapStateToProps(state) {
  return {
    // error: state.favorite.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({setFavorite, deleteFavorite}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
