import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import AppInput from '../../../components/atoms/AppInput';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../../components/atoms/AppText';
import DropDown from '../../../components/atoms/DropDown';
import Button from '../../../components/atoms/Button';
import ImagesSlider from '../../../components/atoms/ImageSlider';
import IMAGES from '../../../common/images';
import {useNavigation} from '@react-navigation/native';
import {makePostRequest} from '../../../utils/api.helpers';
import {USER_DATA} from '../../../common/constants';
import {useSelector} from 'react-redux';
import {
  validatePassword,
  validatePasswordAndConfirm,
  validatePasswordConfirm,
} from '../../../common/Validation';
const EditAccount = () => {
  const navigation = useNavigation();
  const {user} = useSelector((state) => {
    return {
      user: state.auth.user,
    };
  });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('');
  const _validate = () => {
    let oldPasswordErr = validatePassword(passwordData.oldPassword);
    let newPasswordErr = validatePassword(passwordData.newPassword);
    let confirmNewPasswordErr = validatePassword(
      passwordData.confirmNewPassword,
    );

    let passwordAndConfirmErr = validatePasswordAndConfirm(
      passwordData.newPassword,
      passwordData.confirmNewPassword,
    );

    setOldPasswordError(oldPasswordErr);
    setNewPasswordError(newPasswordErr);
    setConfirmNewPasswordError(confirmNewPasswordErr || passwordAndConfirmErr);
    return (
      oldPasswordErr ||
      newPasswordErr ||
      confirmNewPasswordErr ||
      passwordAndConfirmErr
    );
  };
  const changeAddress = () => {
    if (_validate()) return;
    setServerError('');
    setLoading(true);
    try {
      makePostRequest({
        url: 'Users/auth_ChangePassword',
        data: {
          Data: {
            UserName: user.userName,
            StrPaassword: passwordData.oldPassword,
            NewPassword: passwordData.newPassword,
            UserType: 1,
          },
        },
      })
        .then((response) => {
          console.log('bebbebe', response.data);
          if (response?.data?.status !== '200') {
            setServerError(response.data.message);
            setLoading(false);
            console.log('حدث خطأ ما من فضلك حاول مره أخري')
          } else if (response?.data?.data) {
            Toast.show(response.data.message);
            console.log('succsess',response.data.message);
            navigation.popToTop();
            navigation.navigate('Home');
            setPasswordData({oldPassword: '' ,newPassword:'' ,confirmNewPassword:''})
            navigation.navigate('Auth');
          }
          setLoading(false);
        })
        .catch((error) => {
          setServerError(error?.response?.data?.message);
          setLoading(false);
          console.log('serverError', error.response.data.message)

        });
    } catch (error) {
      console.log('error')
      setLoading(false);
    }
  };
  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>تغيير رمز المرور</AppText>
          <Button
            title={'حفظ'}
            onPress={() => {
              changeAddress();
              // navigation.popToTop();
              // navigation.navigate('Home');
            }}
            loading={loading}
            disabled={loading}
            titleStyle={styles.saveText}
            style={styles.saveButton}
          />
        </View>

        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>رمز المرور الحالي</AppText>

          <AppInput
            inputStyle={styles.promoCodeInput}
            value={passwordData.oldPassword}
            error={oldPasswordError}
            password
            secureTextEntry={true}
            onChangeText={(oldPassword) => {
              setPasswordData({...passwordData, oldPassword});
            }}
            onEndEditing={() => {
              setOldPasswordError(validatePassword(passwordData.oldPassword));
            }}
          />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>رمز المرور الجديد</AppText>

          <AppInput
            inputStyle={styles.promoCodeInput}
            value={passwordData.newPassword}
            error={newPasswordError}
            password
            secureTextEntry={true}
            onChangeText={(newPassword) => {
              setPasswordData({...passwordData, newPassword});
            }}
            onEndEditing={() => {
              setNewPasswordError(validatePassword(passwordData.newPassword));
            }}
          />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>تأكيد رمز المرور</AppText>

          <AppInput
            inputStyle={styles.promoCodeInput}
            value={passwordData.confirmNewPassword}
            error={confirmNewPasswordError || serverError}
            password
            secureTextEntry={true}
            onChangeText={(confirmNewPassword) => {
              setPasswordData({...passwordData, confirmNewPassword});
            }}
            onEndEditing={() => {
              setConfirmNewPasswordError(
                validatePassword(passwordData.confirmNewPassword),
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditAccount;
