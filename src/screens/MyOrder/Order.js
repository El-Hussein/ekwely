import React, {useState, useRef} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import {calcHeight, calcWidth, calcFont, height} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Order = ({item, type}) => {
  const [spreadItems, setSpreadItems] = useState(false);
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
          <View style={[styles.orderNumber]}>
            <AppText style={styles.totalPriceText}>اجمالي القيمه</AppText>
            <AppText style={styles.priceText}>{item.total}</AppText>
          </View>

          <Line width={calcWidth(300)} color={COLORS.lightGray} />

          <View style={[styles.orderNumber]}>
            <AppText style={styles.dateTitleText}>وقت تسليم الطلب</AppText>
            <AppText style={styles.dateText}>
              {item.deliverDate.substring(0, 10)}
            </AppText>
          </View>

          <Line width={calcWidth(300)} color={COLORS.lightGray} />

          <View style={[styles.orderNumber]}>
            <AppText style={styles.dateTitleText}>منتجات الطلب</AppText>
            <FlatList
              data={
                spreadItems ? item.orderDetails : item.orderDetails.slice(0, 3)
              }
              renderItem={({item}) => (
                <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                  <AppText
                    style={{...styles.dateText, width: calcWidth(125)}}
                    numberOfLines={2}>
                    {item.itemName}
                  </AppText>
                  <Text style={styles.numberText} numberOfLines={1}>
                    {' X ' + item.quantity}
                  </Text>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View style={{height: 2, backgroundColor: 'red', margin: 5}} />
              )}
              ListFooterComponent={
                item.orderDetails.length > 3 && (
                  <TouchableOpacity
                    style={styles.arrowDown}
                    onPress={() => setSpreadItems(!spreadItems)}>
                    <Icon
                      name={
                        spreadItems
                          ? 'keyboard-arrow-up'
                          : 'keyboard-arrow-down'
                      }
                      color={COLORS.main}
                      size={calcFont(25)}
                    />
                    <AppText style={{...styles.dateText, color: COLORS.main}}>
                      {spreadItems ? 'اقل' : 'اكثر'}
                    </AppText>
                  </TouchableOpacity>
                )
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Order;
