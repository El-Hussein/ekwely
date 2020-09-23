import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Button from '../../components/atoms/Button';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import DropDown from '../../components/atoms/DropDown';
import {useNavigation} from '@react-navigation/native';

import CheckBox from '../../components/atoms/CheckBox';

const Product = () => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(true);
  const [pieces, setPieces] = useState(false);
  const [counter, setCounter] = useState(1);

  const toggleFavorite = () => {
    if (favorite == false) {
      setFavorite(!favorite);
      setPieces(!pieces);
    }
  };
  const togglePieces = () => {
    if (pieces == false) {
      setFavorite(!favorite);
      setPieces(!pieces);
    }
  };
  const changeCounter = (type) => {
    if (type == 'increase') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.orderTime}>
        <TouchableOpacity onPress={toggleFavorite}>
          <CheckBox selected={favorite} />
        </TouchableOpacity>
        <AppText style={styles.orderTimeText}>اختر من المفضلة</AppText>
      </View>
      <DropDown placeholder="اختر من المفضلة" />
      <View style={styles.orderTime}>
        <TouchableOpacity onPress={togglePieces}>
          <CheckBox selected={pieces} />
        </TouchableOpacity>
        <AppText style={styles.orderTimeText}>اختر المنتج</AppText>
      </View>
      <DropDown placeholder="اختر المنتج" />

      <View style={styles.addToCart}>
        <Button
          title={'اضف الى السلة'}
          onPress={() => console.log('pressed')}
          titleStyle={styles.addToCartText}
          style={styles.addToCartButton}
        />

        <View style={styles.counter}>
          <Button
            title={'+'}
            onPress={() => changeCounter('increase')}
            titleStyle={styles.counterButtonText}
            style={styles.counterButton}
          />
          <AppText style={styles.counterText}>{counter}</AppText>
          <Button
            title={'-'}
            onPress={() => changeCounter('decrease')}
            titleStyle={styles.counterButtonText}
            style={styles.counterButton}
            disabled={counter < 2}
          />
        </View>
      </View>

      <View style={styles.confirmOrderButton}>
        <Button
          title={'تأكيد الطلب'}
          onPress={() => {
            navigation.popToTop();
            navigation.navigate('Cart');
          }}
          titleStyle={styles.confirmOrder}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default Product;
