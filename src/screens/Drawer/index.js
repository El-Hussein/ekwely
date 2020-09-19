import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import IMAGES from '../../common/images';
import {calcHeight, calcWidth} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import {useNavigation} from '@react-navigation/native';
import {USER_DATA} from '../../common/constants';
import {useSelector} from 'react-redux';

const Raw = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <AppText style={styles.text}>{title}</AppText>
      <Line width={calcWidth(200)} color="#cccccc33" />
    </TouchableOpacity>
  );
};
const Drawer = () => {
  const {user} = useSelector((state) => {
    return {
      user: state.auth.user,
    };
  });
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{marginVertical: calcHeight(15), width: calcWidth(220)}}>
        <TouchableOpacity>
          <Image source={IMAGES.back} style={styles.backImage} />
        </TouchableOpacity>
        <View style={styles.userOut}>
          <Image source={IMAGES.userImage} style={styles.userImage} />
        </View>
      </View>
      <View>
        <AppText style={styles.titleText}>{user?.firstName}</AppText>
        <Line width={calcWidth(200)} color={COLORS.white} />
      </View>
      <View style={styles.menu}>
        <Raw title="حسابي" onPress={() => navigation.navigate('Profile')} />
        <Raw title="طلباتي" onPress={() => navigation.navigate('MyOrders')} />
        <Raw title="أسئلة شائعة" onPress={() => navigation.navigate('FAQ')} />
        <Raw
          title="الدعم والمساعدة"
          onPress={() => navigation.navigate('Support')}
        />
        <Raw
          title="سياسة الاستخدام"
          onPress={() => navigation.navigate('Support')}
        />
        <Raw
          title="للتواصل معنا"
          onPress={() => navigation.navigate('Contact')}
        />
        <Raw
          title="تسجيل خروج"
          onPress={() => {
            AsyncStorage.removeItem(USER_DATA)
              .then((response) => {
                // remove user from redux
                navigation.navigate('Auth');
              })
              .catch((error) => {
                console.log('error deleting user from storage -> ', error);
              });
          }}
        />
      </View>
    </View>
  );
};

export default Drawer;
