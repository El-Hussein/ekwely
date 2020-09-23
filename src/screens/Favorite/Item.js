import React, {useState, useRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import {calcWidth} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
// // redux
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {deleteFavorite} from '../../redux/actions/Favorite';
const Item = ({item ,onPress}) => {

  return (
    <View>
      <View style={styles.item}>
        <AppText style={styles.product} numberOfLines={1}>
          {item.arName}
        </AppText>

        <TouchableOpacity onPress={onPress}>
          <IconIonicons name="close-circle-outline" size={calcWidth(30)} />
        </TouchableOpacity>
      </View>
      <Line width={calcWidth(345)} color={COLORS.lightGray} />
    </View>
  );
};



export default (Item);
