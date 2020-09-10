import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import styles from './styles';
import Order from './Order';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import DropDown from '../../components/atoms/DropDown';
import Button from '../../components/atoms/Button';
import ImagesSlider from '../../components/atoms/ImageSlider';
import IMAGES from '../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import CheckBox from '../../components/atoms/CheckBox';

const Product = () => {
  const orders = [
    {
      id: '1',
      orderNumber: '24566',
      totalPrice: '60 ج',
      orderDate: '15 يونيو 2020  9ص - 3م',
    },
    {
      id: '2',
      orderNumber: '24566',
      totalPrice: '60 ج',
      orderDate: '15 يونيو 2020  9ص - 3م',
    },
  ];

  const _renderOrderItem = ({item}) => {
    return <Order item={item} type="تم التسليم" />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={_renderOrderItem}
        contentContainerStyle={{
          marginVertical: calcHeight(10),
          width: calcWidth(375),
        }}
        keyExtractor={(item, index) => `${index}`}
        ListEmptyComponent={
          <AppText style={styles.EmptyComponent}>لا توجد طلبات</AppText>
        }
      />
    </View>
  );
};

export default Product;
