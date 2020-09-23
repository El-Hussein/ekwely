import React, {useState, useEffect} from 'react';
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
import IMAGES from '../../common/images';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions/Products';

const Product = (
  getProducts,
  products,
  error,
  errorMsg,
  loading,
) => {
  const navigation = useNavigation();
  const {user} = useSelector((state) => {
    return {
      user: state.auth.user,
    };
  });

  const [value, onChangeText] = useState('');
  const [favorite, setFavorite] = useState(true);
  const [cart, setCart] = useState(true);

  useEffect(() => {
    getProducts(user.id);
  }, []);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  const toggleCart = () => {
    setCart(!cart);
  };
  // const products = [
  //   {
  //     id: '1',
  //     image: IMAGES.p1,
  //     name: 'حفاظة جونيور مقاس 5 - 28 ق',
  //     isCart: false,
  //     isFav: true,
  //     price: '150ج',
  //   },
  //   {
  //     id: '2',
  //     image: IMAGES.p2,
  //     name: 'حفاظة جونيور مقاس 5 - 28 ق',
  //     isCart: true,
  //     isFav: false,
  //     price: '150ج',
  //   },
  //   {
  //     id: '3',
  //     image: IMAGES.p1,
  //     name: 'حفاظة جونيور مقاس 5 - 28 ق',
  //     isCart: false,
  //     isFav: false,
  //     price: '150ج',
  //   },
  //   {
  //     id: '4',
  //     image: IMAGES.p2,
  //     name: 'حفاظة جونيور مقاس 5 - 28 ق',
  //     isCart: true,
  //     isFav: true,
  //     price: '150ج',
  //   },
  //   {
  //     id: '1',
  //     image: IMAGES.p1,
  //     name: 'حفاظة جونيور مقاس 5 - 28 ق',
  //     isCart: false,
  //     isFav: true,
  //     price: '150ج',
  //   },
  //   {
  //     id: '2',
  //     image: IMAGES.p2,
  //     name: 'حفاظة جونيور مقاس 5 - 28 ق',
  //     isCart: true,
  //     isFav: false,
  //     price: '150ج',
  //   },
  //   {
  //     id: '3',
  //     image: IMAGES.p1,
  //     name: 'حفاظة جونيور مقاس 5 - 28 ق',
  //     isCart: false,
  //     isFav: false,
  //     price: '150ج',
  //   },
  //   {
  //     id: '4',
  //     image: IMAGES.p2,
  //     name: 'حفاظة جونيور مقاس 5 - 28 ق',
  //     isCart: true,
  //     isFav: true,
  //     price: '150ج',
  //   },
  // ];

  const _renderProductItem = ({item}) => {
    return (
      <View>
        <View style={styles.item}>
          <Image source={item.image} style={styles.productImage} />
          <View
            style={{
              justifyContent: 'space-between',
              height: calcWidth(160),
              alignItems: 'center',
            }}>
            <View style={styles.cartFav}>
              <TouchableOpacity
                style={
                  item.isFavourite
                    ? styles.favoriteOut
                    : [styles.favoriteOut, {backgroundColor: COLORS.midGrayo}]
                }>
                <Image source={IMAGES.favorite} style={styles.favoriteImage} />
              </TouchableOpacity>

              <TouchableOpacity
                style={
                  item.isItemBasket
                    ? styles.favoriteOut
                    : [styles.favoriteOut, {backgroundColor: COLORS.midGrayo}]
                }>
                <Image
                  source={IMAGES.cart}
                  style={
                    item.isItemBasket
                      ? styles.cartImage
                      : [styles.cartImage, {tintColor: COLORS.white}]
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={styles.namePrice}>
              <View style={styles.price}>
                <AppText numberOfLines={1} style={styles.priceText}>
                {item.price}ج
                </AppText>
              </View>
              <AppText numberOfLines={1} style={styles.productName}>
                {item.arName}
              </AppText>
            </View>
          </View>
        </View>
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
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'center', alignItems: 'center'}}
        data={products}
        renderItem={_renderProductItem}
        numColumns={2}
        keyExtractor={(item, index) => `${index}`}
        refreshing={loading}
        ListEmptyComponent={
          <AppText style={styles.EmptyComponent}>لا توجد منتجات</AppText>
        }
      />
    </>
  );
};
function mapStateToProps(state) {
  return {
    products: state.products.products,
    error: state.products.error,
    errorMsg: state.products.errorMsg,
    loading: state.loading.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getProducts}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
