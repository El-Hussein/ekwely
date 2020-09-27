import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../../components/atoms/AppText';
import Button from '../../../components/atoms/Button';
import IMAGES from '../../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';
import {Line} from '../../../components/atoms/Line';
import {useNavigation} from '@react-navigation/native';
import {makePostRequest} from '../../../utils/api.helpers';
import {useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import AppInput from '../../../components/atoms/AppInput';

import {
  validateUserName,
  validateEmail,
  validatePhone,
} from '../../../common/Validation';
const EditAccount = () => {
  const {user} = useSelector((state) => {
    return {
      user: state.auth.user,
    };
  });
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [editData, setEditData] = useState({
    userName: user.userName,
    email: user.email,
    phone: user.phone,
  });
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const _validate = () => {
    let nameErr = validateUserName(editData.userName);
    let emailErr = validateEmail(editData.email);
    let phoneErr = validatePhone(editData.phone);

    setUserNameError(nameErr);
    setEmailError(emailErr);
    setPhoneError(phoneErr);

    return nameErr || emailErr || phoneErr;
  };
  const register = () => {
    if (_validate()) return;
    console.log(editData);
    setServerError('');
    setLoading(true);
    try {
      makePostRequest({
        url: 'Users/EditUserProfile',
        data: {
          Data: {
            userName: editData.userName,
            email: editData.email,
            phone: editData.phone,
          },
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            setServerError('حدث خطأ ما من فضلك حاول مره أخري');
            setLoading(false);
          } else if (response?.data?.data) {
            Toast.show(response.data.message);
            // navigation.navigate('Drawer');
          }
          setLoading(false);
        })
        .catch((error) => {
          setServerError(error?.response?.data?.message);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  };

  const imagePickerOptions = {
    title: 'Select Avatar',
  };
  const openGallery = () => {
    ImagePicker.showImagePicker(imagePickerOptions, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        const formData = new FormData();
        // formData.append('userType', 1);
        formData.append('formdata', {
          uri:
            Platform.OS === 'android' ? response.uri : 'file://' + response.uri,
          name: 'formdata',
          type: 'image/jpeg', // or your mime type what you want
        });
        makePostRequest({
          url: 'UploadDownload/upload',
          data: {
            formData,
          },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((response) => {
            console.log('response');
            console.log(response);
            console.log('response');
          })
          .catch((error) => {
            console.log('error.response');
            console.log(error.response);
            console.log('error.response');
          });
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        // this.setState({
        //   avatarSource: source,
        // });
      }
    });
  };

  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>حسابي</AppText>
          {loading ? (
            <ActivityIndicator
              color={COLORS.main}
              style={{marginVertical: calcHeight(20), alignSelf: 'center'}}
              size={calcFont(20)}
            />
          ) : (
            <Button
              title={'حفظ'}
              onPress={() => {
                register();
              }}
              titleStyle={styles.saveText}
              style={styles.saveButton}
            />
          )}
        </View>

        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
          <Button
            title={'حمل الصوره'}
            onPress={openGallery}
            titleStyle={styles.addToCartText}
            style={styles.addToCartButton}
          />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>اسم المستخدم</AppText>
          <AppInput
            inputStyle={styles.promoCodeInput}
            error={userNameError}
            value={editData.userName}
            onChangeText={(userName) => {
              setEditData({...editData, userName});
            }}
            onEndEditing={() => {
              setUserNameError(validateUserName(editData.userName));
            }}
            placeholder={editData.userName}
          />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>البريد الالكترونى</AppText>
          <AppInput
            error={emailError}
            inputStyle={styles.promoCodeInput}
            value={editData.email}
            keyboardType="email-address"
            onChangeText={(email) => {
              setEditData({...editData, email});
            }}
            onEndEditing={() => {
              setEmailError(validateEmail(editData.email));
            }}
            placeholder={editData.email}
          />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>الهاتف</AppText>
          <AppInput
            error={phoneError || serverError}
            inputStyle={styles.promoCodeInput}
            value={editData.phone}
            onChangeText={(phone) => {
              setEditData({...editData, phone});
            }}
            keyboardType="numeric"
            onEndEditing={() => {
              setPhoneError(validatePhone(editData.phone));
            }}
            placeholder={editData.phone}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditAccount;
