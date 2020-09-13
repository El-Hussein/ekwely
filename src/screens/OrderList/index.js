import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
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
import CheckBox from '../../components/atoms/CheckBox';

const PlaceOrder = () => {
  const [value, onChangeText] = useState('');
  const [quickCleaning, setQuickCleaning] = useState(true);
  const [cashPayment, setCashPayment] = useState(false);

  const toggleQuickCleaning = () => {
    setQuickCleaning(!quickCleaning);
  };
  const toggleCashPayment = () => {
    setCashPayment(!cashPayment);
  };

  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>السلة</AppText>
        </View>

        <TouchableOpacity
          onPress={toggleQuickCleaning}
          style={styles.checkBoxContainer}>
          <AppText style={styles.checkboxText}>
            خدمة التنظيف السريع (تسليم خلال 24 ساعه)
          </AppText>
          <CheckBox selected={quickCleaning} />
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
          <AppText style={styles.totalPriceText}>القيمة بعد الخصم</AppText>
          <AppText style={styles.priceText}>160 ج</AppText>
        </View>
        <TouchableOpacity
          onPress={toggleCashPayment}
          style={styles.checkBoxContainer}>
          <AppText style={styles.checkboxText}>الدفع نقدى</AppText>
          <CheckBox selected={cashPayment} />
        </TouchableOpacity>

        <View style={styles.orderButton}>
          <Button
            title={'تنفيذ الطلب'}
            onPress={() => console.log('pressed')}
            titleStyle={styles.completeOrder}
            style={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceOrder;
