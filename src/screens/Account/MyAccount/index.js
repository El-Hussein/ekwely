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
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../../components/atoms/AppText';
import DropDown from '../../../components/atoms/DropDown';
import Button from '../../../components/atoms/Button';
import ImagesSlider from '../../../components/atoms/ImageSlider';
import IMAGES from '../../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';
import {Line} from '../../../components/atoms/Line';
import CheckBox from '../../../components/atoms/CheckBox';
import {useNavigation} from '@react-navigation/native';

const MyAccount = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>حسابي</AppText>
          <Button
            title={'تعديل'}
            onPress={() => navigation.navigate('EditAccount')}
            titleStyle={styles.addToCartText}
            style={styles.addToCartButton}
          />
        </View>

        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>اسم المستخدم</AppText>
          <AppText style={styles.text}>Mahmoud Mohamed</AppText>
          <Line width={calcWidth(345)} color={COLORS.lightGray} />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>الهاتف</AppText>
          <AppText style={styles.text}>01112563214</AppText>
          <Line width={calcWidth(345)} color={COLORS.lightGray} />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>البريد الالكترونى</AppText>
          <AppText style={styles.text}>Mahmoud@gmmm.com</AppText>
          <Line width={calcWidth(345)} color={COLORS.lightGray} />
        </View>

        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />

          <Button
            title={'تغيير العنوان'}
            onPress={() => console.log('pressed')}
            titleStyle={styles.changeAddressText}
          />
        </View>

        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />

          <Button
            title={'تغيير رمز المرور'}
            onPress={() => navigation.navigate('EditPassword')}
            titleStyle={styles.changeAddressText}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyAccount;
