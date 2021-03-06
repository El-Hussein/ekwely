import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import IMAGES from '../../common/images';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts, getProductsNoUser} from '../../redux/actions/Products';
import {IMAGE_BASE_URL} from '../../common/constants';
import Favorite from '../../components/atoms/Favorite';
import Cart from '../../components/atoms/Cart';

const Product = ({
  getProducts,
  getProductsNoUser,
  products,
  productsLength,
  currentPage,
  loading,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const user = useSelector((state) => state.auth.user);

  useFocusEffect(
    useCallback(() => {
      if (user) {
        getProducts(false, 0, searchTerm);
        return;
      } else {
        getProductsNoUser(false, 0, searchTerm);
      }
    }, [user]),
  );

  const _renderProductItem = ({item}) => {
    return (
      <View>
        <View style={styles.item}>
          <Image
            source={{uri: IMAGE_BASE_URL + item.image}}
            style={styles.productImage}
          />
          <View
            style={{
              justifyContent: 'space-between',
              height: calcWidth(160),
              alignItems: 'center',
            }}>
            <View style={styles.cartFav}>
              <Favorite id={item.id} isFav={item.isFavourite} />
              <Cart
                id={item.id}
                isCart={item.isItemBasket}
                serviceType={item.serviceType}
                isProduct={item.isProduct}
              />
            </View>

            <View style={styles.namePrice}>
              <View style={styles.price}>
                <AppText numberOfLines={1} style={styles.priceText}>
                  {item.price}ج
                </AppText>
              </View>
              <AppText numberOfLines={2} style={styles.productName}>
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
            onChangeText={(text) => {
              setSearchTerm(text);
              if (user) {
                getProducts(false, 0, text);
                return;
              } else {
                getProductsNoUser(false, 0, text);
              }
            }}
            placeholder="ابحث عن ..."
            placeholderTextColor={COLORS.mainText}
            value={searchTerm}
          />
          <Image source={IMAGES.search} style={styles.searchImage} />
        </View>
      </View>
      {loading ? (
        <ActivityIndicator
          color={COLORS.main}
          style={{marginVertical: calcHeight(20), alignSelf: 'center'}}
          size={calcFont(30)}
        />
      ) : (
        <FlatList
          onEndReachedThreshold={0.7}
          onEndReached={() => {
            if (productsLength === products.length) return;
            if (user) {
              getProducts(true, currentPage, searchTerm);
              return;
            } else {
              getProductsNoUser(true, currentPage, searchTerm);
            }
          }}
          columnWrapperStyle={{justifyContent: 'center', alignItems: 'center'}}
          data={products || []}
          renderItem={_renderProductItem}
          numColumns={2}
          keyExtractor={(item, index) => `${item.id}`}
          refreshing={loading}
          ListEmptyComponent={
            <AppText style={styles.EmptyComponent}>لا توجد منتجات</AppText>
          }
        />
      )}
    </>
  );
};
function mapStateToProps(state) {
  return {
    products: state.products.products,
    currentPage: state.products.currentPageProducts,
    productsLength: state.products.productsLength,
    error: state.products.error,
    loading: state.products.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getProducts, getProductsNoUser}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
