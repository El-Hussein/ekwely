import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import DropDown from '../../components/atoms/DropDown';
import Button from '../../components/atoms/Button';
import IMAGES from '../../common/images';
import CheckBox from '../../components/atoms/CheckBox';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';

const Wash = () => {
  const [value, onChangeText] = useState('');
  const [favorite, setFavorite] = useState(true);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const products = [
    {
      id: '1',
      name: 'قميص',
      isFav: true,
      washPrice: '10ج',
      washIronPrice: '10ج',
    },
    {
      id: '2',
      name: 'بدله قطعتين',
      isFav: false,
      washPrice: '10ج',
      washIronPrice: '10ج',
    },
  ];
  const _renderProductItem = ({item}) => {
    return (
      <View>
        <View style={styles.washItem}>
          <View style={styles.pieces}>
            <TouchableOpacity
              style={
                item.isFav
                  ? styles.favoriteOut
                  : [styles.favoriteOut, {backgroundColor: COLORS.midGrayo}]
              }>
              <Image source={IMAGES.favorite} style={styles.favoriteImage} />
            </TouchableOpacity>

            <AppText style={styles.col1}>{item.name}</AppText>
          </View>

          <AppText style={styles.col2}>{item.washPrice}</AppText>
          <AppText style={styles.col3}>{item.washIronPrice}</AppText>
        </View>
        <Line width={calcWidth(345)} color={COLORS.midGray} />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => onChangeText(text)}
            placeholder="ابحث عن ..."
            placeholderTextColor={COLORS.mainText}
            value={value}
          />
          <Image source={IMAGES.search} style={styles.searchImage} />
        </View>
        <View style={styles.titles}>
          <View style={styles.pieces}>
            <View
              style={[styles.favoriteOut, {backgroundColor: COLORS.yallow}]}>
              <Image
                source={IMAGES.favorite}
                style={[
                  styles.favoriteImage,
                  {tintColor: COLORS.yallow},
                ]}
              />
            </View>

            <AppText style={styles.col1Title}>القطع</AppText>
          </View>
          <AppText style={styles.col2Title}>مكوى</AppText>
          <AppText style={styles.col3Title}>غسيل ومكوى</AppText>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        data={products}
        renderItem={_renderProductItem}
        keyExtractor={(item, index) => `${index}`}
        ListEmptyComponent={
          <AppText style={styles.EmptyComponent}>لا توجد طلبات</AppText>
        }
      />
    </>
  );
};

export default Wash;
