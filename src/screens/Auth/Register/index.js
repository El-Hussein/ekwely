import React, {useState, useRef} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';
import AppText from '../../../components/atoms/AppText';
import IMAGES from '../../../common/images';
import {color} from 'react-native-reanimated';
import {Line} from '../../../components/atoms/Line';
import {calcWidth, calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';
const Register = () => {
  const navigation = useNavigation();
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    confirmPassword: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    confirmPassword: '',
    password: '',
  });
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>
        <AppText style={styles.registerTitle}>انشاء حساب جديد</AppText>
        <View style={styles.registerForm}>
          <AppInput
            error={errors.name}
            value={registerData.name}
            onChangeText={(name) => {
              setRegisterData({...registerData, name});
            }}
            onEndEditing={() => {
              if (registerData.name.length === 0) {
                setErrors({...errors, name: 'هذا الحقل مطلوب'});
              } else {
                setErrors({...errors, name: ''});
              }
            }}
            placeholder={'أسم المستخدم'}
          />
          <AppInput
            error={errors.email}
            value={registerData.email}
            keyboardType="email-address"
            onChangeText={(email) => {
              setRegisterData({...registerData, email});
            }}
            onEndEditing={() => {
              if (registerData.email.length === 0) {
                setErrors({...errors, email: 'هذا الحقل مطلوب'});
              } else if (
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  registerData.email,
                )
              ) {
                setErrors({...errors, email: 'البريد الالكتروني غير صحيح'});
              } else {
                setErrors({...errors, email: ''});
              }
            }}
            placeholder={'البريد الالكتروني'}
          />
          <AppInput
            error={errors.phone}
            value={registerData.phone}
            onChangeText={(phone) => {
              setRegisterData({...registerData, phone});
            }}
            keyboardType="numeric"
            onEndEditing={() => {
              if (registerData.phone.length === 0) {
                setErrors({...errors, phone: 'هذا الحقل مطلوب'});
              } else if (registerData.phone.length < 11) {
                setErrors({
                  ...errors,
                  phone: 'رقم الهاتف غير صحيح',
                });
              } else {
                setErrors({...errors, phone: ''});
              }
            }}
            placeholder={'رقم الهاتف'}
          />
          <AppInput
            error={errors.password}
            value={registerData.password}
            password
            secureTextEntry={true}
            onChangeText={(password) => {
              setRegisterData({...registerData, password});
            }}
            onEndEditing={() => {
              if (registerData.password.length === 0) {
                setErrors({...errors, password: 'هذا الحقل مطلوب'});
              } else if (registerData.password.length < 6) {
                setErrors({
                  ...errors,
                  password: 'يجب الا يقل رمز المرور عن 6 احرف',
                });
              } else {
                setErrors({...errors, password: ''});
              }
            }}
            placeholder={'رمز المرور'}
          />
          <AppInput
            error={errors.confirmPassword}
            value={registerData.confirmPassword}
            password
            secureTextEntry={true}
            onChangeText={(confirmPassword) => {
              setRegisterData({...registerData, confirmPassword});
            }}
            onEndEditing={() => {
              if (registerData.confirmPassword.length === 0) {
                setErrors({...errors, confirmPassword: 'هذا الحقل مطلوب'});
              } else if (registerData.confirmPassword.length < 6) {
                setErrors({
                  ...errors,
                  confirmPassword: 'يجب الا يقل رمز المرور عن 6 احرف',
                });
              } else if (
                registerData.confirmPassword !== registerData.password
              ) {
                setErrors({
                  ...errors,
                  confirmPassword: 'رمز المرور غير متطابق',
                });
              } else {
                setErrors({...errors, confirmPassword: ''});
              }
            }}
            placeholder={'تأكيد رمز المرور'}
          />
        </View>

        <View style={styles.addressVeiw}>
          <Image source={IMAGES.map} style={styles.mapImage} />
          <AppText style={styles.mapText}>لادخال العنوان</AppText>
          <TouchableOpacity>
            <AppText style={styles.pressTitle}>اضغط هنا</AppText>
          </TouchableOpacity>
        </View>

        <View style={styles.loginButton}>
          <Button
            title={'تسجيل'}
            onPress={() => navigation.navigate('Drawer')}
            titleStyle={styles.loginTitle}
            style={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
