import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';
import Button from '../../components/atoms/Button';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import AppInput from '../../components/atoms/AppInput';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/atoms/Header';
const Support = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}>الدعم والمساعدة</AppText>
      </View>
      <View style={{paddingHorizontal: calcWidth(10)}}>
        <View>
          <AppText style={styles.title}>عنوان الموضوع</AppText>
          <TextInput
            style={styles.comment}
            onChangeText={(text) => setAddress(text)}
            value={address}
            multiline={true}
          />
        </View>

        <View>
          <AppText style={styles.title}>الموضوع</AppText>
          <TextInput
            style={[styles.comment, {height: calcHeight(150)}]}
            onChangeText={(text) => setComment(text)}
            value={comment}
            multiline={true}
          />
        </View>
        <View style={{paddingVertical: calcHeight(20)}}>
          <Button
            title={'إرسال'}
            onPress={() => {
              navigation.navigate('Home');
            }}
            titleStyle={styles.addToCartText}
            style={styles.addToCartButton}
          />
        </View>
      </View>
    </View>
  );
};

export default Support;
