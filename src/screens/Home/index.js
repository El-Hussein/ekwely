import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';

const Home = () => {
  return (
    <View style={styles.container}>
      <AppText>الرئيسية</AppText>
    </View>
  );
};

export default Home;
