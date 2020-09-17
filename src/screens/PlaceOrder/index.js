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
import {useNavigation} from '@react-navigation/native';

const PlaceOrder = () => {  const navigation = useNavigation();

  const [value, onChangeText] = useState('');
  const [morning, setMorning] = useState(true);
  const [evening, setEvening] = useState(false);
  const [morningDelivery, setMorningDelivery] = useState(true);
  const [eveningDelivery, setEveningDelivery] = useState(false);
  const Morning = () => {
    if (morning == false) {
      setMorning(!morning);
      setEvening(!evening);
    }
  };
  const Evening = () => {
    if (evening == false) {
      setMorning(!morning);
      setEvening(!evening);
    }
  };
  const MorningDelivery = () => {
    if (morningDelivery == false) {
      setMorningDelivery(!morningDelivery);
      setEveningDelivery(!eveningDelivery);
    }
  };
  const EveningDelivery = () => {
    if (eveningDelivery == false) {
      setMorningDelivery(!morningDelivery);
      setEveningDelivery(!eveningDelivery);
    }
  };

  const [date, setDate] = useState(new Date(1598051730000));
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>طلب جديد</AppText>
        </View>

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
            }}>
            اختر التاريخ
          </AppText>
          <IconFeather
            name="calendar"
            size={calcFont(30)}
            color={COLORS.midGray}
          />
        </TouchableOpacity>

        <View style={styles.checkBoxContainer}>
          <TouchableOpacity onPress={Morning} style={styles.checkbox1}>
            <AppText style={{color: COLORS.textGray}}> 9ص : 3م </AppText>
            <CheckBox selected={morning} />
          </TouchableOpacity>

          <TouchableOpacity onPress={Evening} style={styles.checkbox1}>
            <AppText style={{color: COLORS.textGray}}> 3م : 9م </AppText>
            <CheckBox selected={evening} />
          </TouchableOpacity>
        </View>

        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />
          <AppText style={styles.changeAddressText}>
            شارع محمد فوزى متفرع من عباس العقاد
          </AppText>
          <Button
            title={'تغيير'}
            onPress={() => console.log('pressed')}
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
          <TouchableOpacity onPress={MorningDelivery} style={styles.checkbox1}>
            <AppText style={{color: COLORS.textGray}}> 9ص - 3م </AppText>
            <CheckBox selected={morningDelivery} />
          </TouchableOpacity>

          <TouchableOpacity onPress={EveningDelivery} style={styles.checkbox1}>
            <AppText style={{color: COLORS.textGray}}> 3م - 9م </AppText>
            <CheckBox selected={eveningDelivery} />
          </TouchableOpacity>
        </View>

        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />
          <AppText style={styles.changeAddressText}>
            شارع محمد فوزى متفرع من عباس العقاد
          </AppText>
          <Button
            title={'تغيير'}
            onPress={() => console.log('pressed')}
            titleStyle={styles.pressText}
            style={styles.press}
          />
        </View>

        <View style={styles.promoCode}>
          <TextInput
            style={styles.promoCodeInput}
            onChangeText={(text) => onChangeText(text)}
            placeholder="ادخل كود الخصم"
            placeholderTextColor={COLORS.lightTextGray}
            value={value}
          />
          <Image source={IMAGES.promoIcon} style={styles.promoImage} />
        </View>

        <View style={styles.orderButton}>
          <Button
            title={'استكمال الطلب'}
            onPress={() => navigation.navigate('Order')}
            titleStyle={styles.completeOrder}
            style={styles.button}
          />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default PlaceOrder;
