import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import COLORS from '../../../common/colors';
const Loader = ({visible}) => {
  return (
    visible && (
      <View style={styles.container}>
        <ActivityIndicator color={COLORS.main} size={30} />
      </View>
    )
  );
};

export default React.memo(Loader);
