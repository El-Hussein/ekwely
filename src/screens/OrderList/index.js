import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import Button from '../../components/atoms/Button';
import ImagesSlider from '../../components/atoms/ImageSlider';
import IMAGES from '../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import {useNavigation} from '@react-navigation/native';

const PlaceOrder = () => {
  const navigation = useNavigation();
  const [value, onChangeText] = useState('');
  const [quickCleaning, setQuickCleaning] = useState(true);
  const [cashPayment, setCashPayment] = useState(false);

  const toggleQuickCleaning = () => {
    setQuickCleaning(!quickCleaning);
  };
  const toggleCashPayment = () => {
    setCashPayment(!cashPayment);
  };
  const cart = [
    {
      id: '1',
      product: 'فستان',
      totalPrice: '60 ج',
      type: 'غسيل ومكوي',
      number: 1,
    },
    {
      id: '2',
      product: 'علبة مناديل كبيرة',
      totalPrice: '60 ج',
      type: 'غسيل ومكوي',
      number: 1,
    },
    {
      id: '3',
      product: 'فستان',
      totalPrice: '60 ج',
      type: 'غسيل ومكوي',
      number: 1,
    },
    {
      id: '4',
      product: 'علبة مناديل كبيرة',
      totalPrice: '60 ج',
      type: 'غسيل ومكوي',
      number: 1,
    },
  ];
  const changeCounter = (type) => {
    if (type == 'increase') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const _renderCartItem = ({item}) => {
    return (
      <View>
        <View style={styles.item}>
          <View style={styles.name}>
            <AppText style={styles.product}>{item.product}</AppText>
            <AppText style={styles.type}>{item.type}</AppText>
          </View>
          <View style={styles.counter}>
            <Button
              title={'+'}
              // onPress={() => changeCounter('increase')}
              titleStyle={styles.counterButtonText}
              style={styles.counterButton}
            />
            <AppText style={styles.counterText}>{item.number}</AppText>
            <Button
              title={'-'}
              // onPress={() => changeCounter('decrease')}
              titleStyle={styles.counterButtonText}
              style={styles.counterButton}
              disabled={item.number < 2}
            />
          </View>
          <AppText style={styles.price}>{item.totalPrice}</AppText>
          <TouchableOpacity>
            <IconIonicons name="close-circle-outline" size={calcWidth(25)} />
          </TouchableOpacity>
        </View>
        <Line width={calcWidth(345)} color={COLORS.lightGray} />
      </View>
    );
  };
  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>السلة</AppText>
        </View>
        <FlatList
          data={cart}
          renderItem={_renderCartItem}
          contentContainerStyle={{
            width: calcWidth(375),
          }}
          keyExtractor={(item, index) => `${index}`}
          ListEmptyComponent={
            <AppText style={styles.EmptyComponent}>لا توجد طلبات</AppText>
          }
          ListFooterComponent={
            <>
              <TouchableOpacity
                onPress={toggleQuickCleaning}
                style={styles.checkBoxContainer}>
                <AppText style={styles.checkboxText}>
                  خدمة التنظيف السريع (تسليم خلال 24 ساعه)
                </AppText>
                <IconIonicons
                  name={quickCleaning ? 'md-checkbox' : 'square-outline'}
                  size={calcFont(25)}
                  color={quickCleaning ? COLORS.darkMain : COLORS.midLightGray}
                />
              </TouchableOpacity>

              <Line width={calcWidth(345)} color={COLORS.lightGray} />

              <View style={styles.total}>
                <AppText style={styles.totalPriceText}>اجمالي القيمه</AppText>
                <AppText style={styles.priceText}>200 ج</AppText>
              </View>
              <View style={styles.total}>
                <AppText style={styles.totalPromoCode}>خصم البروموكود</AppText>
                <AppText style={styles.PromoCode}>40 ج</AppText>
              </View>
              <View style={styles.total}>
                <AppText style={styles.totalPriceText}>
                  القيمة بعد الخصم
                </AppText>
                <AppText style={styles.priceText}>160 ج</AppText>
              </View>
              <TouchableOpacity
                // onPress={toggleCashPayment}
                style={styles.checkBoxContainer}>
                <AppText style={styles.checkboxText}>الدفع نقدى</AppText>
                <IconIonicons
                  name={cashPayment ? 'md-checkbox' : 'square-outline'}
                  size={calcFont(25)}
                  color={cashPayment ? COLORS.darkMain : COLORS.midLightGray}
                />
              </TouchableOpacity>

              <View style={styles.orderButton}>
                <Button
                  title={'تنفيذ الطلب'}
                  onPress={() => navigation.navigate('Home')}
                  titleStyle={styles.completeOrder}
                  style={styles.button}
                />
              </View>
            </>
          }
        />
      </View>
    </View>
  );
};

export default PlaceOrder;
