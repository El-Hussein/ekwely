import React, {useState} from 'react';
import {View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';
import AppText from '../../../components/atoms/AppText';
import IMAGES from '../../../common/images';
import {color} from 'react-native-reanimated';

const Login = () => {
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

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
          error={errors.password}
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
        />
        <View style={styles.loginButton}>
          <Button
            title={'دخول'}
            onPress={() => navigation.navigate('Drawer')}
            titleStyle={styles.loginTitle}
            style={styles.button}
          />
        </View>

        <Button
          title={'انشاء حساب جديد'}
          onPress={() => navigation.navigate('Register')}
        />

      </View>
    </View>
  );
};

export default Login;