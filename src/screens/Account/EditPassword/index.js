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

const EditAccount = () => {
  const [value, onChangeText] = useState('');
  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>تغيير رمز المرور</AppText>
          <Button
            title={'حفظ'}
            onPress={() => console.log('pressed')}
            titleStyle={styles.saveText}
            style={styles.saveButton}
          />
        </View>

        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>رمز المرور الحالي</AppText>
          <View style={styles.promoCode}>
            <TextInput
              style={styles.promoCodeInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
          </View>
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>رمز المرور الجديد</AppText>
          <View style={styles.promoCode}>
            <TextInput
              style={styles.promoCodeInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
          </View>
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>تأكيد رمز المرور</AppText>
          <View style={styles.promoCode}>
            <TextInput
              style={styles.promoCodeInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditAccount;
