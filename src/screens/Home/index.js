import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import Button from '../../components/atoms/Button';
import ImagesSlider from '../../components/atoms/ImageSlider';
import IMAGES from '../../common/images';
import COLORS from '../../common/colors';

const Home = () => {
  const data = [
    {id: '1', image_path: IMAGES.slider},
    {id: '2', image_path: IMAGES.slider1},
    {id: '3', image_path: IMAGES.slider2},
    {id: '4', image_path: IMAGES.slider3},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.orderButton}>
        <Button
          title={'اطلب الان'}
          onPress={() => console.log('pressed')}
          titleStyle={styles.orderTitle}
          style={styles.button}
        />
      </View>
      <ImagesSlider slides={data}/>
      <View >
        <Image source={IMAGES.promo} style={styles.promoImage} />
        <View style={styles.promoCode}>
          <AppText style={styles.promoCodeText}>كود الخصم</AppText>
          <AppText style={styles.promoCodeNum}>P78832</AppText>
        </View>
        
        <View style={styles.promoDiscount}>
          <AppText style={styles.promoDiscountText}>خصم</AppText>
          <AppText style={styles.promoDiscountNum}>20%</AppText>
        </View>
      </View>

      {/* <ImagesSlider slides={data} /> */}
    </View>
  );
};

export default Home;
