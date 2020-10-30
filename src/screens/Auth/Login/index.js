import React, { useState } from 'react';
import { View, Image, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';
import IMAGES from '../../../common/images';
import { makePostRequest } from '../../../utils/api.helpers';
import { USER_DATA } from '../../../common/constants';
import { validateEmail, validatePassword } from '../../../common/Validation';
import { SIGN_IN } from '../../../redux/actions/types';
import Toast from 'react-native-simple-toast';
import { useBackButton } from '../../../utils/customHooks';

const Login = () => {
  useBackButton(() => {
    if (navigation.isFocused()) {
      Alert.alert('انتظر!', 'هل تريد الخروج من التطبيق؟', [
        {
          text: 'الغاء',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'خروج', onPress: BackHandler.exitApp },
      ]);
      return true;
    }
    return false;
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const _validate = () => {
    let emailErr = validateEmail(loginData.email);
    let passwordErr = validatePassword(loginData.password);
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    return emailErr || passwordErr;
  };
  const login = () => {
    if (_validate()) return;
    setServerError('');
    setLoading(true);
    try {
      makePostRequest({
        url: 'Users/login',
        data: {
          Data: {
            UserName: loginData.email,
            email: loginData.email,
            Password: loginData.password,
            UserType: 1,
          },
        },
      }).then((response) => {
        if (response?.data?.status !== '200') {
          setServerError('اسم المستخدم او كلمة المرور خاطئة');
        } else if (response?.data?.data) {
          Toast.show(response.data.message);
          // save user data in AsyncStorage
          setLoginData({
            email: '',
            password: '',
          });
          console.log(response);
          AsyncStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
          // save user data in the redux
          dispatch({ type: SIGN_IN, payload: response.data.data });
          // navigate to home screen
          navigation.navigate('Drawer');
        }
        setLoading(false);
      });
    } catch (error) {
       setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Image source={IMAGES.loginBg} style={styles.loginBg} />
        <AppInput
          error={emailError}
          value={loginData.email}
          inputStyle={styles.input}
          onChangeText={(email) => {
            setLoginData({ ...loginData, email });
          }}
          onEndEditing={() => {
            setEmailError(validateEmail(loginData.email));
          }}
          placeholder={'بريد الالكترونى أو أسم المستخدم'}
        />
        <AppInput
          error={passwordError || serverError}
          value={loginData.password}
          inputStyle={styles.input}
          onChangeText={(password) => {
            setLoginData({ ...loginData, password });
          }}
          onEndEditing={() => {
            setPasswordError(validatePassword(loginData.password));
          }}
          placeholder={'رمز المرور'}
          secureTextEntry={true}
        />
        <View style={styles.loginButton}>
          <Button
            title={'دخول'}
            onPress={login}
            // onPress={() => navigation.navigate('Drawer')}
            titleStyle={styles.loginTitle}
            style={styles.button}
            loading={loading}
            disabled={loading}
          />
        </View>

        <Button
          title={'انشاء حساب جديد'}
          onPress={() => navigation.navigate('Register')}
          style={styles.rTitle}
        />
      </View>
    </View>
  );
};

export default Login;
