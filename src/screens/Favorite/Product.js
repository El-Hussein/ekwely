import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import AppText from '../../components/atoms/AppText';
import {calcFont, calcHeight, calcWidth} from '../../common/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions/Products';
import COLORS from '../../common/colors';
import {Line} from '../../components/atoms/Line';
import {
  getProductsFavorite,
  getWashFavorite,
  deleteFavorite,
} from '../../redux/actions/Favorite';
const Product = ({
  productsFav,
  loading,
  getProductsFavorite,
  deleteFavorite,
  currentPage,
  length,
}) => {
  useFocusEffect(
    useCallback(() => {
      // getProductsFavorite(false);
      getProductsFavorite(false, 0);
    }, []),
  );

  const _renderFavoriteItem = ({item}) => {
    return (
      <View>
        <View style={styles.item}>
          <AppText style={styles.product} numberOfLines={1}>
            {item.arName}
          </AppText>

          <TouchableOpacity
            onPress={() => {
              deleteFavorite(item.id);
              // getProductsFavorite(true);
              getProductsFavorite(true, 0);
            }}>
            <IconIonicons name="close-circle-outline" size={calcWidth(30)} />
          </TouchableOpacity>
        </View>
        <Line width={calcWidth(345)} color={COLORS.lightGray} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
            if (productsFav.length >= length) return;
            getProductsFavorite(true, currentPage);
          }}
          refreshing={loading}
          data={productsFav}
          renderItem={_renderFavoriteItem}
          contentContainerStyle={{
            marginVertical: calcHeight(10),
            width: calcWidth(375),
          }}
          keyExtractor={(item, index) => `${item.id}`}
          ListEmptyComponent={
            <AppText style={styles.EmptyComponent}>لا توجد مفضله</AppText>
          }
        />
      )}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    productsFav: state.favorite.products,
    loading: state.favorite.loading,
    currentPage: state.favorite.currentPageProducts,
    length: state.favorite.productsLength,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {getProductsFavorite, getWashFavorite, deleteFavorite},
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
