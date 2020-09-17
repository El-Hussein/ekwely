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

const EditAccount = () => {
  const navigation = useNavigation();

  const [value, onChangeText] = useState('');
  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>حسابي</AppText>
          <Button
            title={'حفظ'}
            onPress={() => {
              navigation.popToTop();
              navigation.navigate('Home');
            }}
            titleStyle={styles.saveText}
            style={styles.saveButton}
          />
        </View>

        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
          <Button
            title={'حمل الصوره'}
            onPress={() => console.log('pressed')}
            titleStyle={styles.addToCartText}
            style={styles.addToCartButton}
          />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>اسم المستخدم</AppText>
          <View style={styles.promoCode}>
            <TextInput
              style={styles.promoCodeInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="Mahmoud Mohamed"
              placeholderTextColor={COLORS.lightTextGray}
            />
          </View>
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>الهاتف</AppText>
          <View style={styles.promoCode}>
            <TextInput
              style={styles.promoCodeInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="01112563214"
              placeholderTextColor={COLORS.lightTextGray}
            />
          </View>
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>البريد الالكترونى</AppText>
          <View style={styles.promoCode}>
            <TextInput
              style={styles.promoCodeInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder="Mahmoud@gmmm.com"
              placeholderTextColor={COLORS.lightTextGray}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditAccount;
