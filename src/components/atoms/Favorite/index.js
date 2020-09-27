import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setFavorite, deleteFavorite} from '../../../redux/actions/Favorite';
import IMAGES from '../../../common/images';
import styles from './styles';
import COLORS from '../../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { calcFont } from '../../../common/styles';

const Favorite = ({id, isFav, setFavorite, deleteFavorite,}) => {
  const [favorite, toggleFavorite] = useState(isFav);
  const toggle = () => {
    toggleFavorite(!favorite);
    if (isFav) {
      deleteFavorite(id);
    } else {
      setFavorite(id);
    }
  };

  return (
    <TouchableOpacity
      onPress={toggle}
      style={[
        styles.favoriteOut,
        !favorite && {backgroundColor: COLORS.midGrayo},
      ]}>
      <Icon
        name='md-heart-sharp'
        size={calcFont(22)}
        color={COLORS.white}
      />
    </TouchableOpacity>
  );
};



function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({setFavorite, deleteFavorite}, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Favorite);
