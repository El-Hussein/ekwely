import React from 'react';
import {View, Image, TouchableOpacity, Linking} from 'react-native';

import styles from './styles';
import COLORS from '../../common/colors';
import IMAGES from '../../common/images';
import AppText from '../../components/atoms/AppText';
import {Line} from '../../components/atoms/Line';
import {calcWidth} from '../../common/styles';
import Header from '../../components/atoms/Header';
const Raw = ({title, text}) => {
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
      <Header />
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}>للتواصل معنا</AppText>
      </View>
      <View>
        <AppText style={styles.branch}>الفرع الرئيسي</AppText>
        <Line width={calcWidth(345)} color={COLORS.midGray} />
        <Raw
          title="العنوان"
          text="9 عمارات مصر للتعمير - زهراء المعادي - القاهرة"
        />
        <Raw title="الهاتف" text="01060077186" />
        <Raw title="البريد الالكترونى" text="ekwelyekwely@gmail.com" />
        <Line width={calcWidth(345)} color={COLORS.midGray} />
      </View>
      <View>
        <AppText style={styles.branch}>فرع مدينة 6 اكتوبر</AppText>
        <Line width={calcWidth(345)} color={COLORS.midGray} />
        <Raw title="العنوان" text="مجمع علي الدين بعد ميدان ڤوداڤون" />
        <Raw title="الهاتف" text="01060077186" />
        <Line width={calcWidth(345)} color={COLORS.midGray} />
        <Raw title="تابعونا على" />
      </View>
      <View style={styles.media}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('http://facebook.com/Ekwely');
          }}>
          <Image source={IMAGES.facebook} style={styles.mediaImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('instagram://user?username=ekwely').catch(() => {
              Linking.openURL('https://www.instagram.com/ekwely');
            });
          }}>
          <Image source={IMAGES.instagram} style={styles.mediaImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactUs;
