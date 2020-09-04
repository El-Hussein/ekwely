import React, {useState} from 'react';
import {View} from 'react-native';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';

const Login = () => {
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
            onPress={() => console.log('pressed')}
            titleStyle={styles.loginTitle}
            style={styles.button}
          />
        </View>

        <Button
          title={'انشاء حساب جديد'}
          onPress={() => console.log('pressed')}
          
        />
      </View>
    </View>
  );
};

export default Login;
