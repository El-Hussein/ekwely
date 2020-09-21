import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';
import IMAGES from '../../../common/images';
import {makePostRequest} from '../../../utils/api.helpers';
import {USER_DATA} from '../../../common/constants';
import {validateEmail, validatePassword} from '../../../common/Validation';
import {SIGN_IN} from '../../../redux/actions/types';

const Login = () => {
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
    console.log('hhhhhhhh', {emailError, passwordError});
    return emailErr || passwordErr;
  };
  const login = () => {
    if (_validate()) return;
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
        console.log('kkkkkkkkeeeeeeeeee' ,response)

        if (response?.data?.status !== '200') {
          setServerError('اسم المستخدم او كلمة المرور خاطئة');
        } else if (response?.data?.data) {
          // save user data in AsyncStorage
          AsyncStorage.setItem(USER_DATA, JSON.stringify(response.data.data));
          // save user data in the redux
          dispatch({type: SIGN_IN, payload: response.data.data});
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
          error={emailError}
          value={loginData.email}
          onChangeText={(email) => {
            setLoginData({...loginData, email});
          }}
          onEndEditing={() => {
            setEmailError(validateEmail(loginData.email));
          }}
          placeholder={'بريد الالكترونى أو أسم المستخدم'}
        />
        <AppInput
          error={passwordError || serverError}
          value={loginData.password}
          onChangeText={(password) => {
            setLoginData({...loginData, password});
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
