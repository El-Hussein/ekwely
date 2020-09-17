import React, {useState, useRef} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import Button from '../../components/atoms/Button';
import IMAGES from '../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import {useNavigation} from '@react-navigation/native';

const Raw = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <AppText style={styles.text}>{title}</AppText>
      <Line width={calcWidth(200)} color="#cccccc33" />
    </TouchableOpacity>
  );
};
const Drawer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{marginVertical: calcHeight(15), width: calcWidth(220)}}>
        <TouchableOpacity>
          <Image source={IMAGES.back} style={styles.backImage} />
        </TouchableOpacity>
        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>
      </View>
      <View>
        <AppText style={styles.titleText}>Mahmoud Mohamed</AppText>
        <Line width={calcWidth(200)} color={COLORS.white} />
      </View>
      <View style={styles.menu}>
        <Raw title="حسابي" onPress={() => navigation.navigate('Profile')} />
        <Raw title="طلباتي" onPress={() => navigation.navigate('MyOrders')} />
        <Raw title="أسئلة شائعة" onPress={() => navigation.navigate('FAQ')} />
        <Raw
          title="الدعم والمساعدة"
          onPress={() => navigation.navigate('Support')}
        />
        <Raw
          title="سياسة الاستخدام"
          onPress={() => navigation.navigate('Login')}
        />
        <Raw
          title="للتواصل معنا"
          onPress={() => navigation.navigate('Contact')}
        />
        <Raw title="تسجيل خروج" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default Drawer;
