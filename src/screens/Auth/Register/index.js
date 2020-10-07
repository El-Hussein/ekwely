import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';
import AppText from '../../../components/atoms/AppText';
import IMAGES from '../../../common/images';
import {makePostRequest} from '../../../utils/api.helpers';
import {USER_DATA} from '../../../common/constants';
import {useDispatch} from 'react-redux';
import {SIGN_IN} from '../../../redux/actions/types';
import Toast from 'react-native-simple-toast';

import {
  validateUserName,
  validateEmail,
  validatePhone,
  validatePassword,
  validatePasswordAndConfirm,
  validatePasswordConfirm,
} from '../../../common/Validation';

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [addressData, setAddressData] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [registerData, setRegisterData] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const _validate = () => {
    let nameErr = validateUserName(registerData.userName);
    let emailErr = validateEmail(registerData.email);
    let phoneErr = validatePhone(registerData.phone);
    let passwordErr = validatePassword(registerData.password);
    let passwordConfirmErr = validatePasswordConfirm(
      registerData.passwordConfirm,
    );
    let passwordAndConfirmErr = validatePasswordAndConfirm(
      registerData.password,
      registerData.passwordConfirm,
    );
    let addressErr = false;

    setUserNameError(nameErr);
    setEmailError(emailErr);
    setPhoneError(phoneErr);
    setPasswordError(passwordErr);
    setPasswordConfirmError(passwordConfirmErr || passwordAndConfirmErr);
    const {streetAddress, latitude, longitude} = addressData;
    if (!streetAddress || !latitude || !longitude) {
      setAddressError(true);
      addressErr = true;
    }

    return (
      nameErr ||
      emailErr ||
      phoneErr ||
      passwordErr ||
      passwordAndConfirmErr ||
      passwordConfirmErr ||
      addressErr
    );
  };
  const register = () => {
    if (_validate()) return;
    setServerError('');
    setLoading(true);
    try {
      makePostRequest({
        url: '/Users/customerregister',
        data: {
          Data: {
            UserName: registerData.userName,
            Email: registerData.email,
            Phone: registerData.phone,
            StrPassword: registerData.password,
            userType: 1,
            Address: addressData.streetAddress,
            Lang: addressData.longitude,
            Lat: addressData.latitude,
          },
        },
      })
        .then((response) => {
          console.log('resss', response);
          if (response?.data?.status !== '200') {
            setServerError('حدث خطأ ما من فضلك حاول مره أخري');
            setLoading(false);
          } else if (response?.data?.data) {
            // save user data in AsyncStorage
            Toast.show('تم التسجيل بنجاح من فضلك قم بتسجيل الدخول');
            // AsyncStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
            // save user data in the redux
            // dispatch({type: SIGN_IN, payload: response.data.data});
            // navigate to home screen
            navigation.navigate('Login');
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log('erroo', error, error?.response);
          setServerError(error?.response?.data?.message);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>
        <AppText style={styles.registerTitle}>انشاء حساب جديد</AppText>
        <View style={styles.registerForm}>
          <AppInput
            error={userNameError}
            value={registerData.userName}
            inputStyle={styles.input}
            onChangeText={(userName) => {
              setRegisterData({...registerData, userName});
            }}
            onEndEditing={() => {
              setUserNameError(validateUserName(registerData.userName));
            }}
            placeholder={'أسم المستخدم'}
          />
          <AppInput
            error={emailError}
            inputStyle={styles.input}
            value={registerData.email}
            keyboardType="email-address"
            onChangeText={(email) => {
              setRegisterData({...registerData, email});
            }}
            onEndEditing={() => {
              setEmailError(validateEmail(registerData.email));
            }}
            placeholder={'البريد الالكتروني'}
          />
          <AppInput
            error={phoneError}
            inputStyle={styles.input}
            value={registerData.phone}
            onChangeText={(phone) => {
              setRegisterData({...registerData, phone});
            }}
            keyboardType="numeric"
            onEndEditing={() => {
              setPhoneError(validatePhone(registerData.phone));
            }}
            placeholder={'رقم الهاتف'}
          />
          <AppInput
            error={passwordError}
            value={registerData.password}
            password
            secureTextEntry={true}
            inputStyle={styles.input}
            onChangeText={(password) => {
              setRegisterData({...registerData, password});
            }}
            onEndEditing={() => {
              setPasswordError(validatePassword(registerData.password));
            }}
            placeholder={'رمز المرور'}
          />
          <AppInput
            error={passwordConfirmError || serverError}
            value={registerData.passwordConfirm}
            password
            secureTextEntry={true}
            inputStyle={styles.input}
            onChangeText={(passwordConfirm) => {
              setRegisterData({...registerData, passwordConfirm});
            }}
            onEndEditing={() => {
              setPasswordConfirmError(
                validatePasswordConfirm(registerData.passwordConfirm) ||
                  validatePasswordAndConfirm(
                    registerData.password,
                    registerData.passwordConfirm,
                  ),
              );
            }}
            placeholder={'تأكيد رمز المرور'}
          />
        </View>

        <View style={styles.addressVeiw}>
          <Image source={IMAGES.map} style={styles.mapImage} />
          <AppText numberOfLines={1} style={styles.mapText}>
            {addressData?.streetAddress || 'لادخال العنوان'}
          </AppText>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectLocation', {
                onGoBack: (address) => {
                  setAddressData({
                    ...addressData,
                    ...address.coordinates,
                    streetAddress: address.formattedAddress,
                  });
                },
              });
              setAddressError(false);
            }}>
            <AppText style={styles.pressTitle}>
              {addressData?.streetAddress ? 'تعديل' : 'اضغط هنا'}
            </AppText>
          </TouchableOpacity>
        </View>
        <View style={styles.addressVeiw}>
          {addressError && (
            <AppText style={styles.error}>من فضلك ادخل العنوان</AppText>
          )}
        </View>
        <View style={styles.loginButton}>
          <Button
            title={'تسجيل'}
            onPress={register}
            titleStyle={styles.loginTitle}
            style={styles.button}
            loading={loading}
            disabled={loading}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
