import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';

import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import {Line} from '../../components/atoms/Line';
const Raw = (title, text) => {
  return (
    <View style={styles.row}>
      <AppText style={styles.title}>{title}</AppText>
      {text && <AppText style={styles.text}>{text}</AppText>}
    </View>
  );
};
const ContactUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}>للتواصل معنا</AppText>
      </View>
      <View>
        <AppText style={styles.branch}>الفرع الرئيسي</AppText>
        <Line width={calcWidth(345)} color={COLORS.midGray} />
        <Raw
          title="العنوان"
          text="عمارات مصر للتعمير - زهراء المعادي - القاهرة"
        />
        <Raw title="الهاتف" text="01112563214" />
        <Raw title="البريد الالكترونى" text="info@ekwely.com" />
        <Line width={calcWidth(345)} color={COLORS.midGray} />
      </View>
      <View>
        <AppText style={styles.branch}>فرع مدينة 6 اكتوبر</AppText>
        <Line width={calcWidth(345)} color={COLORS.midGray} />
        <Raw
          title="العنوان"
          text="عمارات مصر للتعمير - زهراء المعادي - القاهرة"
        />
        <Raw title="الهاتف" text="01112563214" />
        <Line width={calcWidth(345)} color={COLORS.midGray} />
      </View>
      <Raw title="تابعونا على" />
      <Image source={IMAGES.favorite} style={styles.mediaImage} />
      <Image source={IMAGES.favorite} style={styles.mediaImage} />
    </View>
  );
};

export default ContactUs;
