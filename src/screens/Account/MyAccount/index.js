import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';

import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../../components/atoms/AppText';
import Button from '../../../components/atoms/Button';
import IMAGES from '../../../common/images';
import {calcWidth} from '../../../common/styles';
import {Line} from '../../../components/atoms/Line';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {makePostRequest} from '../../../utils/api.helpers';
const MyAccount = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [addressData, setAddressData] = useState(false);
  const {user} = useSelector((state) => {
    return {
      user: state.auth.user,
    };
  });
  const changeAddress = () => {
    navigation.navigate('SelectLocation', {
      onGoBack: (address) => {
        setAddressData({
          ...addressData,
          ...address.coordinates,
          streetAddress: address.formattedAddress,
        });
      },
    });
  };
  const saveAddress = () => {
    console.log('kkkkkkkkkkkkkk');
    changeAddress();
    console.log(addressData);
    setServerError('');
    setLoading(true);
    try {
      makePostRequest({
        url: '/Users/auth_UpdateUser',
        data: {
          Data: {
            UserName: registerData.userName,
            Address: addressData.streetAddress,
            Lang: addressData.longitude,
            Lat: addressData.latitude,
          },
        },
      })
        .then((response) => {
          if (response?.data?.status !== '200') {
            setServerError('حدث خطأ ما من فضلك حاول مره أخري');
            setLoading(false);
          } else if (response?.data?.data) {
            console.log('okkkkk');
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
  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>حسابي</AppText>
          <Button
            title={'تعديل'}
            onPress={() => navigation.navigate('EditAccount')}
            titleStyle={styles.addToCartText}
            style={styles.addToCartButton}
          />
        </View>

        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>اسم المستخدم</AppText>
          <AppText style={styles.text}>{user?.userName}</AppText>
          <Line width={calcWidth(345)} color={COLORS.lightGray} />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>الهاتف</AppText>
          <AppText style={styles.text}>{user?.phone}</AppText>
          <Line width={calcWidth(345)} color={COLORS.lightGray} />
        </View>

        <View style={styles.data}>
          <AppText style={styles.titleText}>البريد الالكترونى</AppText>
          <AppText style={styles.text}>{user?.email}</AppText>
          <Line width={calcWidth(345)} color={COLORS.lightGray} />
        </View>

        
        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />

          <Button
            title={'تغيير العنوان'}
            // onPress={() => navigation.navigate('EditPassword')}
            titleStyle={styles.changeAddressText}
          />
        </View>
        <View style={styles.addressVeiw}>
          {serverError ? (
            <AppText style={styles.error}>{serverError}</AppText>
          ) : null}
        </View>

        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />

          <Button
            title={'تغيير رمز المرور'}
            onPress={() => navigation.navigate('EditPassword')}
            titleStyle={styles.changeAddressText}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyAccount;
