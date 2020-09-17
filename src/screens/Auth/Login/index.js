import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';
import AppText from '../../../components/atoms/AppText';
import IMAGES from '../../../common/images';
import {color} from 'react-native-reanimated';
import {makePostRequest} from '../../../utils/api.helpers';
import {USER_DATA} from '../../../common/constants';

const Login = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const login = () => {
    setServerError('');
    setLoading(true);
    try {
      console.log('what?');
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
          // save user data in AsyncStorage
          AsyncStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
          // save user data in the redux

          // navigate to home screen
          navigation.navigate('Drawer');
        }
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log('error saving user in storage -> ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Image source={IMAGES.loginBg} style={styles.loginBg} />
        <AppInput
          error={errors.email}
          value={loginData.email}
          onChangeText={(email) => {
            setLoginData({...loginData, email});
          }}
          onEndEditing={() => {
            if (loginData.email.length === 0) {
              setErrors({...errors, email: 'هذا الحقل مطلوب'});
            } else if (
              !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                loginData.email,
              )
            ) {
              setErrors({...errors, email: 'البريد الالكتروني غير صحيح'});
            } else {
              setErrors({...errors, email: ''});
            }
          }}
          placeholder={'بريد الالكترونى أو أسم المستخدم'}
        />
        <AppInput
          error={errors.password || serverError}
          value={loginData.password}
          onChangeText={(password) => {
            setLoginData({...loginData, password});
          }}
          onEndEditing={() => {
            if (loginData.password.length === 0) {
              setErrors({...errors, password: 'هذا الحقل مطلوب'});
            } else if (loginData.password.length < 6) {
              setErrors({
                ...errors,
                password: 'يجب الا يقل رمز المرور عن 6 احرف',
              });
            } else {
              setErrors({...errors, password: ''});
            }
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
