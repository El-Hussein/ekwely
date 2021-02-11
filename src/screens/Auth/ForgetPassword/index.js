import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import Button from '../../../components/atoms/Button';
import IMAGES from '../../../common/images';
import {makePostRequest} from '../../../utils/api.helpers';
import {validateEmail} from '../../../common/Validation';
import Toast from 'react-native-simple-toast';

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const _validate = () => {
    let emailErr = validateEmail(email);
    setEmailError(emailErr);
    return emailErr;
  };

  const sendNewPassword = () => {
    if (_validate()) {
      return;
    }
    setServerError('');
    setLoading(true);
    try {
      makePostRequest({
        url: 'Users/ForgetPassword',
        data: {
          Data: {
            UserName: email,
            UserType: 1,
          },
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            setServerError('حدث شئ ما خطأ من فضلك حاول مرة اخري');
          } else if (response?.data?.data) {
            Toast.show(response.data.message);
            setEmail('');
            navigation.navigate('Login');
          }
          setLoading(false);
        })
        .catch((error) => {
          setServerError('حدث شئ ما خطأ من فضلك حاول مرة اخري');
          setLoading(false);
        });
    } catch (error) {
      setServerError('حدث شئ ما خطأ من فضلك حاول مرة اخري');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <Image source={IMAGES.loginBg} style={styles.loginBg} />
        <AppInput
          error={emailError || serverError}
          value={email}
          inputStyle={styles.input}
          onChangeText={(emailInput) => {
            setEmail(emailInput);
          }}
          onEndEditing={() => {
            setEmailError(validateEmail(email));
          }}
          placeholder={'بريد الالكترونى'}
        />
        <View style={styles.loginButton}>
          <Button
            title={'اعادة كلمة المرور'}
            onPress={sendNewPassword}
            titleStyle={styles.loginTitle}
            style={styles.button}
            loading={loading}
            disabled={loading}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgetPassword;
