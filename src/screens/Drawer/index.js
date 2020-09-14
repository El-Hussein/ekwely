import React, {useState, useRef} from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import Button from '../../components/atoms/Button';
import IMAGES from '../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
const Raw = ({title}) => {
  return (
    <View style={styles.row}>
      <AppText style={styles.text}>{title}</AppText>
      <Line width={calcWidth(200)} color="#cccccc33" />
    </View>
  );
};
const Drawer = () => {
  return (
    <View style={styles.container}>
      <View
        style={{marginVertical: calcHeight(15),width:calcWidth(220)}}>
        <Image source={IMAGES.back} style={styles.backImage} />
        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>
      </View>
      <View >
        <AppText style={styles.titleText}>Mahmoud Mohamed</AppText>
        <Line width={calcWidth(200)} color={COLORS.white} />
      </View>
      <View style={styles.menu}>
        <Raw title="حسابي" />
        <Raw title="طلباتي" />
        <Raw title="أسئلة شائعة" />
        <Raw title="الدعم والمساعدة" />
        <Raw title="سياسة الاستخدام" />
        <Raw title="للتواصل معنا" />
        <Raw title="تسجيل خروج" />
      </View>
    </View>
  );
};

export default Drawer;
