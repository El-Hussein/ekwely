import React, {useState, useRef} from 'react';
import {
  View,
} from 'react-native';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';

const Order = ({item ,type}) => {
  return (
    <View>
      <View style={styles.order}>
        <View style={styles.title}>
          <View style={styles.orderNumber}>
            <AppText style={styles.orderNumText}>طلب رقم</AppText>
            <AppText style={styles.NumText}>{item.id}</AppText>
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
            <AppText style={styles.priceText}>{item.total}</AppText>
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
            <AppText style={styles.dateText}>{item.deliverDate.substring(0, 10)}</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Order;
