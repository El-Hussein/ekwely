import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import COLORS from '../../../common/colors';
import {styles} from './styles';

const HeaderLeft = () => {
  const [visible, setVisible] = useState(false);
  const {currentOrders, loading} = useSelector((state) => {
    return {
      currentOrders: state.order.currentOrder,
      loading: state.order.loading,
    };
  });
  useEffect(() => {
    if (currentOrders?.length > 0 && !loading) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);
  return (
    <View>
      {visible && (
        <Image
          source={require('../../../assets/Images/hasOrder.png')}
          style={styles.image}
        />
      )}
    </View>
  );
};

export default React.memo(HeaderLeft);
