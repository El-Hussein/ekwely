import React, {useEffect} from 'react';
import {View, Image, ScrollView, BackHandler, Alert} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import Button from '../../components/atoms/Button';
import ImagesSlider from '../../components/atoms/ImageSlider';
import IMAGES from '../../common/images';
import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';
import {getCurrentOrder} from '../../redux/actions/Order';
import {bindActionCreators} from 'redux';
import {useBackButton} from '../../utils/customHooks';

const Home = ({getCurrentOrder}) => {
  const navigation = useNavigation();
  const data = [
    {id: '1', image_path: IMAGES.slider},
    {id: '2', image_path: IMAGES.slider1},
    {id: '3', image_path: IMAGES.slider2},
    {id: '4', image_path: IMAGES.slider3},
  ];
  const {user} = useSelector((state) => {
    return {
      user: state.auth.user,
    };
  });
  useEffect(() => {
    if (user) {
      getCurrentOrder(false, 0);
    }
  }, []);

  useBackButton(() => {
    if (navigation.isFocused()) {
      Alert.alert('انتظر!', 'هل تريد الخروج من التطبيق؟', [
        {
          text: 'الغاء',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'خروج', onPress: BackHandler.exitApp},
      ]);
      return true;
    }
    return false;
  });

  const orderNow = () => {
    if (user) {
      navigation.navigate('Order');
    } else {
      navigation.navigate('Auth');
    }
  };

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.orderButton}>
          <Button
            title={'اطلب الان'}
            onPress={orderNow}
            titleStyle={styles.orderTitle}
            style={styles.button}
          />
        </View>
        <ImagesSlider slides={data} />
        <View>
          <Image source={IMAGES.promo} style={styles.promoImage} />
          <View style={styles.promoCode}>
            <AppText style={styles.promoCodeText}>كود الخصم</AppText>
            <AppText style={styles.promoCodeNum}>
              {user?.userPromoCode || 'لا يوجد'}
            </AppText>
          </View>

          <View style={styles.promoDiscount}>
            <AppText style={styles.promoDiscountText}>خصم</AppText>
            <AppText style={styles.promoDiscountNum}>
              {user?.isPercent
                ? user?.promoCodePercent + '%'
                : user?.promoCodeValue}
            </AppText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getCurrentOrder}, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Home);
