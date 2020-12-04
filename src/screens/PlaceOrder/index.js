import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import dayjs from 'dayjs';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import Button from '../../components/atoms/Button';
import IMAGES from '../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import CheckBox from '../../components/atoms/CheckBox';
import {useNavigation} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {useSelector} from 'react-redux';
import {makePostRequest} from '../../utils/api.helpers';
import Toast from 'react-native-simple-toast';
import {getProducts} from '../../redux/actions/Products';

const PlaceOrder = ({
  cart,
  totalPrice,
  totalPromoCodeDiscount,
  getProducts,
}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const [morning, setMorning] = useState(true);
  const [evening, setEvening] = useState(false);
  const [morningDelivery, setMorningDelivery] = useState(true);
  const [eveningDelivery, setEveningDelivery] = useState(false);
  const [isOriginalAddress, setIsOriginalAddress] = useState(true);
  const [sendAddress, setSendAddress] = useState({
    address: user?.address,
    lat: user?.lat,
    lang: user?.lang,
  });
  const [deliveredAddress, setDeliveredAddress] = useState({
    address: user?.address,
    lat: user?.lat,
    lang: user?.lang,
  });
  useEffect(() => {
    setSendAddress({
      address: user?.address,
      lat: user?.lat,
      lang: user?.lang,
    });
    setDeliveredAddress({
      address: user?.address,
      lat: user?.lat,
      lang: user?.lang,
    });
  }, [user?.address]);
  const Morning = () => {
    if (morning === false) {
      setMorning(!morning);
      setEvening(!evening);
    }
  };
  const Evening = () => {
    if (evening === false) {
      setMorning(!morning);
      setEvening(!evening);
    }
  };
  const MorningDelivery = () => {
    if (morningDelivery === false) {
      setMorningDelivery(!morningDelivery);
      setEveningDelivery(!eveningDelivery);
    }
  };
  const EveningDelivery = () => {
    if (eveningDelivery === false) {
      setMorningDelivery(!morningDelivery);
      setEveningDelivery(!eveningDelivery);
    }
  };

  const [date, setDate] = useState(Date.now());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const [quickCleaning, setQuickCleaning] = useState(false);
  const [usePromoCode, setUsePromoCode] = useState(false);

  const toggleQuickCleaning = () => {
    setQuickCleaning(!quickCleaning);
  };
  const toggleUsePromoCode = () => {
    setUsePromoCode(!usePromoCode);
  };
  const setOrder = () => {
    setLoading(true);
    try {
      makePostRequest({
        url: 'api/Order/auth_AddBulkOrder',
        data: {
          Data: {
            IsOrignalAddress: isOriginalAddress,
            NewDeliverAddress: deliveredAddress.address,
            NewDeliverLat: deliveredAddress.lat,
            NewDeliverLang: deliveredAddress.lang,
            NewSendAddress: sendAddress.address,
            NewSendLat: sendAddress.lat,
            NewSendLang: sendAddress.lang,
            SendDate: dayjs(date).locale('SA').format('DD MMM YYYY'),
            DeliverDate: dayjs(date).add(quickCleaning ? 1 : 2, 'day'),
            SendTime: evening ? 0 : 1,
            DeliverTime: eveningDelivery ? 0 : 1,
            IsFastClean: quickCleaning,
          },
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
            setLoading(false);
          } else if (response?.data?.data) {
            Toast.show('لقد تم تنفيذ طلبك بنجاح');
            getProducts();
            navigation.popToTop();
            navigation.navigate('Home');
          }
          setLoading(false);
        })
        .catch((error) => {
          Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
          setLoading(false);
        });
    } catch (error) {
      Toast.show('حدث خطأ ما من فضلك حاول مره أخري');
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}>طلب جديد</AppText>
      </View>
      <ScrollView>
        <View style={styles.orderTime}>
          <Image source={IMAGES.out} style={styles.inOutImage} />

          <AppText style={styles.orderTimeText}>وقت استلام الطلب</AppText>
        </View>

        <TouchableOpacity onPress={showDatepicker} style={styles.datePicker}>
          <AppText
            style={{
              color: COLORS.lightTextGray,
              fontSize: calcFont(16),
              fontWeight: 'bold',
              width: '80%',
            }}
            numberOfLines={1}>
            {dayjs(date).locale('SA').format('DD MMM YYYY')}
          </AppText>
          <IconFeather
            name="calendar"
            size={calcFont(30)}
            color={COLORS.midGray}
          />
        </TouchableOpacity>

        <View style={styles.checkBoxContainer}>
          <TouchableOpacity onPress={Evening} style={styles.checkbox1}>
            <AppText style={{color: COLORS.textGray}}> 3م : 9م </AppText>
            <CheckBox selected={evening} />
          </TouchableOpacity>
          <TouchableOpacity onPress={Morning} style={styles.checkbox1}>
            <AppText style={{color: COLORS.textGray}}> 9ص : 3م </AppText>
            <CheckBox selected={morning} />
          </TouchableOpacity>
        </View>

        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />
          <AppText numberOfLines={1} style={styles.changeAddressText}>
            {sendAddress.address}
          </AppText>
          <Button
            title={'تغيير'}
            onPress={() => {
              navigation.navigate('SelectLocation', {
                onGoBack: (address) => {
                  setSendAddress({
                    lat: address.coordinates.latitude || 30.033333,
                    lang: address.coordinates.longitude || 31.233334,
                    address: address.formattedAddress,
                  });
                },
              });
              setIsOriginalAddress(false);
            }}
            titleStyle={styles.pressText}
            style={styles.press}
          />
        </View>

        <Line width={calcWidth(345)} color={COLORS.lightGray} />

        <View style={styles.orderTime}>
          <Image source={IMAGES.in} style={styles.inOutImage} />

          <AppText style={styles.orderTimeText}>وقت تسليم الطلب</AppText>
        </View>

        <View style={styles.desc}>
          <AppText style={styles.descText}>
            سيتم تسليم الطلب خلال يومين عمل من تاريخ استلام الطلب والتوصيل مجانا
            ويمكنك الاستلام خلال 24 ساعه بتكلفه توصيل اضافيه
          </AppText>
        </View>

        <View style={styles.checkBoxContainer}>
          <TouchableOpacity onPress={EveningDelivery} style={styles.checkbox1}>
            <AppText style={{color: COLORS.textGray}}> 3م - 9م </AppText>
            <CheckBox selected={eveningDelivery} />
          </TouchableOpacity>
          <TouchableOpacity onPress={MorningDelivery} style={styles.checkbox1}>
            <AppText style={{color: COLORS.textGray}}> 9ص - 3م </AppText>
            <CheckBox selected={morningDelivery} />
          </TouchableOpacity>
        </View>

        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />
          <AppText numberOfLines={1} style={styles.changeAddressText}>
            {deliveredAddress.address}
          </AppText>
          <Button
            title={'تغيير'}
            onPress={() => {
              navigation.navigate('SelectLocation', {
                onGoBack: (address) => {
                  setDeliveredAddress({
                    lat: address.coordinates.latitude,
                    lang: address.coordinates.longitude,
                    address: address.formattedAddress,
                  });
                },
              });
              setIsOriginalAddress(false);
            }}
            titleStyle={styles.pressText}
            style={styles.press}
          />
        </View>

        <Line width={calcWidth(345)} color={COLORS.lightGray} />

        <TouchableOpacity style={styles.checkBox}>
          <AppText style={styles.checkboxText}>الدفع نقدي</AppText>
          <IconIonicons
            name={'md-checkbox'}
            size={calcFont(25)}
            color={COLORS.main}
          />
        </TouchableOpacity>
        {!!totalPromoCodeDiscount && (
          <TouchableOpacity
            onPress={toggleUsePromoCode}
            style={styles.checkBox}>
            <AppText style={styles.checkboxText}>استخدام كود الخصم</AppText>
            <IconIonicons
              name={usePromoCode ? 'md-checkbox' : 'square-outline'}
              size={calcFont(25)}
              color={usePromoCode ? COLORS.main : COLORS.midLightGray}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={toggleQuickCleaning} style={styles.checkBox}>
          <AppText style={styles.checkboxText}>
            خدمة التنظيف السريع (تسليم خلال 24 ساعه)
          </AppText>
          <IconIonicons
            name={quickCleaning ? 'md-checkbox' : 'square-outline'}
            size={calcFont(25)}
            color={quickCleaning ? COLORS.main : COLORS.midLightGray}
          />
        </TouchableOpacity>

        <View style={styles.total}>
          <AppText style={styles.totalPriceText}>اجمالي القيمه</AppText>
          <AppText style={styles.priceText}>{totalPrice} ج</AppText>
        </View>
        {!!quickCleaning && (
          <View style={styles.total}>
            <AppText style={styles.totalPromoCode}>
              تكاليف التنظيف السريع
            </AppText>
            <AppText style={styles.PromoCode}>20 ج</AppText>
          </View>
        )}
        {!!usePromoCode && (
          <View style={styles.total}>
            <AppText style={styles.totalPromoCode}>خصم البروموكود</AppText>
            <AppText style={styles.PromoCode}>
              {totalPromoCodeDiscount} ج
            </AppText>
          </View>
        )}
        {!!usePromoCode && (
          <View style={styles.total}>
            <AppText style={styles.totalPriceText}>القيمة بعد الخصم</AppText>
            <AppText style={styles.priceText}>
              {totalPrice - totalPromoCodeDiscount}ج
            </AppText>
          </View>
        )}

        <View style={styles.orderButton}>
          {loading ? (
            <ActivityIndicator
              color={COLORS.main}
              style={{marginVertical: calcHeight(20), alignSelf: 'center'}}
              size={calcFont(30)}
            />
          ) : (
            <Button
              title={'تنفيذ الطلب'}
              onPress={() => setOrder()}
              titleStyle={styles.completeOrder}
              style={styles.button}
            />
          )}
        </View>
      </ScrollView>
      {show && (
        <View
          style={{
            position: Platform.OS === 'ios' ? 'absolute' : null,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: COLORS.lightGray,
          }}>
          <Button
            onPress={() => setShow(false)}
            style={{alignSelf: 'flex-end'}}
            title={'تاكيد'}
            titleStyle={{color: COLORS.main}}
          />
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            minimumDate={Date.now()}
            textColor={'#000'}
          />
        </View>
      )}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    totalPromoCodeDiscount: state.cart.totalPromoCodeDiscount,
    error: state.cart.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getProducts}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
