import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../../components/atoms/AppText';
import Button from '../../../components/atoms/Button';
import IMAGES from '../../../common/images';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';
import {Line} from '../../../components/atoms/Line';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {makePostRequest} from '../../../utils/api.helpers';
const MyAccount = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [addressData, setAddressData] = useState({});
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
  console.log(addressData);
  useEffect(() => {
    console.log('entered effect');
    if (addressData.streetAddress) {
      saveAddress();
    }
  }, [addressData.streetAddress]);

  const saveAddress = () => {
    console.log('entered save address');
    setServerError('');
    setLoading(true);
    try {
      makePostRequest({
        url: 'Users/EditUserProfile',
        data: {
          Data: {
            Address: addressData.streetAddress,
            Lang: addressData.longitude,
            Lat: addressData.latitude,
          },
        },
      })
        .then((response) => {
          console.log('entered success addresss', response);
          if (response?.data?.status !== '200') {
            setServerError('حدث خطأ ما من فضلك حاول مره أخري');
            setLoading(false);
          } else if (response?.data?.data) {
            // 'تم تغييير العن,ان بن[اح'
            Toast.show('تم تغيير العنوان بنجاح');
          }
          setLoading(false);
          setAddressData({});
        })
        .catch((error) => {
          console.log('entered failed addresss', error.response);
          setServerError(error?.response?.data?.message);
          setLoading(false);
          setAddressData({});
        });
    } catch (error) {
      console.log('entered error addresss', error);
      setAddressData({});
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
          {/* <Icon
            name="map-marker-alt"
            size={calcFont(22)}
            color={COLORS.white}
          /> */}
          <Button
            title={'تغيير العنوان'}
            onPress={() => changeAddress()}
            titleStyle={styles.changeAddressText}
          />
          {loading ? (
            <ActivityIndicator
              color={COLORS.main}
              style={{marginVertical: calcHeight(20), alignSelf: 'center'}}
              size={calcFont(20)}
            />
          ) : null}
        </View>
        <View style={styles.addressVeiw}>
          {!!serverError && (
            <AppText style={styles.error}>{serverError}</AppText>
          )}
        </View>

        <View style={styles.changeAddress}>
          <Image source={IMAGES.map} style={styles.mapImage} />
          {/* <Icon
            name="lock-outline"
            size={calcFont(22)}
            color={COLORS.white}
          /> */}
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
