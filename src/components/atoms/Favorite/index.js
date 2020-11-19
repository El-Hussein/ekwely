import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
// redux
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { setFavorite, deleteFavorite } from '../../../redux/actions/Favorite';
import IMAGES from '../../../common/images';
import styles from './styles';
import COLORS from '../../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { calcFont } from '../../../common/styles';
import { getProducts } from '../../../redux/actions/Products';
import { useNavigation } from '@react-navigation/native';

const Favorite = ({ id, isFav, setFavorite, deleteFavorite, getProducts }) => {
  const [favorite, toggleFavorite] = useState(isFav);
  const user = useSelector(state => state.auth.user);
  const navgation = useNavigation();

  const toggle = () => {
    if (user) {
      toggleFavorite(!favorite);
      if (isFav) {
        deleteFavorite(id);
        getProducts(true);
      } else {
        setFavorite(id);
        getProducts(true);
      }
    } else {
      navgation.navigate('Auth');
    }
  };

  return (
    <TouchableOpacity
      onPress={toggle}
      style={[
        styles.favoriteOut,
        !favorite && { backgroundColor: COLORS.midGrayo },
      ]}>
      <Icon name="md-heart-sharp" size={calcFont(22)} color={COLORS.white} />
    </TouchableOpacity>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ setFavorite, deleteFavorite, getProducts }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Favorite);
