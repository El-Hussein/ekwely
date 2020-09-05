import React, {useState} from 'react';
import {View, Image} from 'react-native';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';
import AppText from '../../../components/atoms/AppText';
import IMAGES from '../../../common/images';
import {color} from 'react-native-reanimated';
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // const [loginData, setLoginData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   confirmPassword: '',
  //   password: '',
  // });
  // const [errors, setErrors] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   confirmPassword: '',
  //   password: '',
  // });
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Image source={IMAGES.loginBg} style={styles.loginBg} />

        {/* //login */}
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

        {/*
              <AppText style={styles.rTitle}>انشاء حساب جديد</AppText>

        <AppInput
          error={errors.name}
          value={loginData.name}
          onChangeText={(name) => {
            setLoginData({...loginData, name});
          }}
          onEndEditing={() => {
            if (loginData.name.length === 0) {
              setErrors({...errors, name: 'هذا الحقل مطلوب'});
            } else {
              setErrors({...errors, name: ''});
            }
          }}
          placeholder={'أسم المستخدم'}
        />
        <AppInput
          error={errors.email}
          value={loginData.email}
          keyboardType="email-address"
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
          placeholder={'البريد الالكتروني'}
        />
        <AppInput
          error={errors.phone}
          value={loginData.phone}
          onChangeText={(phone) => {
            setLoginData({...loginData, phone});
          }}
          keyboardType="numeric"
          onEndEditing={() => {
            if (loginData.phone.length === 0) {
              setErrors({...errors, phone: 'هذا الحقل مطلوب'});
            } else if (loginData.phone.length < 11) {
              setErrors({
                ...errors,
                phone: 'يجب الا يقل رمز المرور عن 11 احرف',
              });
            } else {
              setErrors({...errors, phone: ''});
            }
          }}
          placeholder={'رقم الهاتف'}
        />
        <AppInput
          error={errors.password}
          value={loginData.password}
          password
          secureTextEntry={true}
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
        <AppInput
          error={errors.confirmPassword}
          value={loginData.confirmPassword}
          password
          onChangeText={(confirmPassword) => {
            setLoginData({...loginData, confirmPassword});
          }}
          onEndEditing={() => {
            if (loginData.confirmPassword.length === 0) {
              setErrors({...errors, confirmPassword: 'هذا الحقل مطلوب'});
            } else if (loginData.confirmPassword.length < 6) {
              setErrors({
                ...errors,
                confirmPassword: 'يجب الا يقل رمز المرور عن 6 احرف',
              });
            } else {
              setErrors({...errors, confirmPassword: ''});
            }
          }}
          placeholder={'تأكيد رمز المرور'}
        /> */}
      </View>
    </View>
  );
};

export default Login;
