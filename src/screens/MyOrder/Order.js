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
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import DropDown from '../../components/atoms/DropDown';
import Button from '../../components/atoms/Button';
import ImagesSlider from '../../components/atoms/ImageSlider';
import IMAGES from '../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import CheckBox from '../../components/atoms/CheckBox';

const Order = ({item ,type}) => {
  return (
    <View>
      <View style={styles.order}>
        <View style={styles.title}>
          <View style={styles.orderNumber}>
            <AppText style={styles.orderNumText}>طلب رقم</AppText>
            <AppText style={styles.NumText}>{item.orderNumber}</AppText>
          </View>
          <AppText style={styles.sent}>{type}</AppText>
        </View>
        <View style={styles.desc}>
          <View
            style={[
              styles.orderNumber,
              {
                width: calcWidth(320),
                paddingBottom: calcHeight(5),
                paddingHorizontal: calcWidth(5),
                justifyContent: 'flex-start',
              },
            ]}>
            <AppText style={styles.totalPriceText}>اجمالي القيمه</AppText>
            <AppText style={styles.priceText}>{item.totalPrice}</AppText>
          </View>

          <Line width={calcWidth(300)} color={COLORS.lightGray} />

          <View
            style={[
              styles.orderNumber,
              {
                width: calcWidth(320),
                paddingTop: calcHeight(5),
                paddingHorizontal: calcWidth(5),
                justifyContent: 'flex-start',
              },
            ]}>
            <AppText style={styles.dateTitleText}>وقت تسليم الطلب</AppText>
            <AppText style={styles.dateText}>{item.orderDate}</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Order;
