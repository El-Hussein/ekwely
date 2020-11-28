import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../../components/atoms/AppText';
import Button from '../../../components/atoms/Button';
import IMAGES from '../../../common/images';
import {calcWidth, calcFont} from '../../../common/styles';
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
  const [imageLoading, setImageLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [editData, setEditData] = useState({
    userName: user?.userName,
    email: user?.email,
    phone: user?.phone,
    Image: user?.image,
  });
  const [emailError, setEmailError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [userImage, setUserImage] = useState(
    user?.image ? {uri: IMAGE_BASE_URL + user.image} : IMAGES.userImage,
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
    if (_validate()) {
      return;
    }
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

  const handlePicker = () => {
    ImagePicker.showImagePicker(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 200,
        maxWidith: 200,
        quality: 0.9,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          setUserImage({uri: response.uri});
          setImageLoading(true);
          upload(response)
            .then((res) => {
              if (res.status === '200') {
                setEditData({...editData, Image: res.data});
                setUserImage({uri: IMAGE_BASE_URL + res.data});
                setImageLoading(false);
              }
            })
            .catch((error) => {
              setImageLoading(false);
              console.log('upload error', error);
            });
        }
      },
    );
  };

  const upload = async (imageObj) => {
    try {
      const ret = await fetch(API_BASE_URL + 'UploadDownload/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: createFormData(imageObj),
      });
      const out = await ret.json();
      return out;
    } catch (error) {
      console.log('CATCH ERROR', error);
    }
  };

  const createFormData = (photo) => {
    const data = new FormData();

    data.append('photo', {
      name: photo.fileName
        ? photo.fileName
        : `photo-${new Date().getTime()}.jpg`,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });

    Object.keys(photo).forEach((key) => {
      data.append(key, photo[key]);
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
              disabled={imageLoading}
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
          {imageLoading ? (
            <ActivityIndicator
              color={COLORS.white}
              style={{
                ...styles.addToCartButton,
                padding: calcWidth(10),
                backgroundColor: '#00000088',
              }}
            />
          ) : (
            <Button
              title={'حمل الصوره'}
              onPress={handlePicker}
              titleStyle={styles.addToCartText}
              style={styles.addToCartButton}
            />
          )}
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
