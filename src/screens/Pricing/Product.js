import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions/Products';
import {IMAGE_BASE_URL} from '../../common/constants';
import Favorite from '../../components/atoms/Favorite';
import Cart from '../../components/atoms/Cart';

const Product = ({getProducts, products, loading}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

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
              <Cart id={item.id} isCart={item.isItemBasket} />
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
            onChangeText={(text) => {
              setSearchTerm(text);
              if (text === '') {
                setFilteredData(null);
                return;
              }
              console.log(
                products.filter((item) => item.arName.includes(searchTerm, 0)),
              );
              if (text.length > 2)
                setFilteredData(
                  products.filter((item) =>
                    item.arName.includes(searchTerm, 0),
                  ),
                );
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
          columnWrapperStyle={{justifyContent: 'center', alignItems: 'center'}}
          data={filteredData || products || []}
          renderItem={_renderProductItem}
          numColumns={2}
          keyExtractor={(item, index) => `${Math.random() * 100}`}
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
    error: state.products.error,
    loading: state.products.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getProducts}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
