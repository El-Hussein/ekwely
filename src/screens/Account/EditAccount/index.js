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
import {makePostRequest, API_BASE_URL} from '../../../utils/api.helpers';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import AppInput from '../../../components/atoms/AppInput';
import {IMAGE_BASE_URL, USER_DATA} from '../../../common/constants';

import {
  validateUserName,
  validateEmail,
  validatePhone,
} from '../../../common/Validation';
import AsyncStorage from '@react-native-community/async-storage';
import {SIGN_IN} from '../../../redux/actions/types';
const EditAccount = () => {
  const {user} = useSelector((state) => {
    return {
      user: state.auth.user,
    };
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [editData, setEditData] = useState({
    userName: user.userName,
    email: user.email,
    phone: user.phone,
    Image: user.image,
  });
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [userImage, setUserImage] = useState(
    user.image ? {uri: IMAGE_BASE_URL + user.image} : IMAGES.userImage,
  );

  const _validate = () => {
    let nameErr = validateUserName(editData.userName);
    let emailErr = validateEmail(editData.email);
    let phoneErr = validatePhone(editData.phone);

    setUserNameError(nameErr);
    setEmailError(emailErr);
    setPhoneError(phoneErr);

    return nameErr || emailErr || phoneErr;
  };

  const saveData = () => {
    if (_validate()) return;
    setServerError('');
    setLoading(true);
    try {
      makePostRequest({
        url: 'Users/EditUserProfile',
        data: {
          Data: editData,
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            setServerError('حدث خطأ ما من فضلك حاول مره أخري');
            setLoading(false);
          } else if (response?.data?.data) {
            console.log(response);
            Toast.show(response.data.message);
            AsyncStorage.setItem(
              USER_DATA,
              JSON.stringify({
                ...user,
                userName: response.data.data.userName,
                phone: response.data.data.phone,
                image: response.data.data.image,
              }),
            );
            dispatch({
              type: SIGN_IN,
              payload: {
                ...user,
                userName: response.data.data.userName,
                phone: response.data.data.phone,
                image: response.data.data.image,
              },
            });
            navigation.goBack();
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

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        upload(response).then((response) => {
          console.log(response);
          if (response.status === '200') {
            setEditData({...editData, Image: response.data});
            setUserImage({uri: IMAGE_BASE_URL + response.data});
          } else Toast.show('حدث خطأ ما من فضلك حاول مرة اخري');
        });
      }
    });
  };

  const upload = async (imageObj) => {
    try {
      var ret = await fetch(API_BASE_URL + 'UploadDownload/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: createFormData(imageObj),
      });

      var obj = await ret.json();
      return obj;
    } catch (error) {
      console.log('Catch', error);
    }
  };

  const createFormData = (photo) => {
    const data = new FormData();
    data.append('file', {
      name: photo.fileName ? photo.fileName : `photo-${new Date().getTime()}`,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });
    return data;
  };


  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>حسابي</AppText>
          {loading ? (
            <ActivityIndicator color={COLORS.main} size={calcFont(20)} />
          ) : (
            <Button
              title={'حفظ'}
              onPress={() => {
                saveData();
              }}
              titleStyle={styles.saveText}
              style={styles.saveButton}
            />
          )}
        </View>

        <View style={styles.userOut}>
          <Image
            source={userImage}
            style={userImage?.uri ? styles.userImage : styles.defaultImage}
          />
          <Button
            title={'حمل الصوره'}
            onPress={openGallery}
            titleStyle={styles.addToCartText}
            style={styles.addToCartButton}
          />
        </View>

        {/* <View style={styles.data}>
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
            disabled
          />
        </View> */}

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
