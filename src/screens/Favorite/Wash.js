import React from 'react';
import {View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './styles';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import AppText from '../../components/atoms/AppText';
import {calcFont, calcHeight, calcWidth} from '../../common/styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import COLORS from '../../common/colors';
import {getProducts} from '../../redux/actions/Products';
import {deleteFavorite} from '../../redux/actions/Favorite';
import {Line} from '../../components/atoms/Line';
const Wash = ({products, loading, getProducts, deleteFavorite}) => {
  const dryCleanFavorite = products.filter((item) => item.isFavourite === true);
  const _renderFavoriteItem = ({item}) => {
    return (
      <View>
        <View style={styles.item}>
          <AppText style={styles.product} numberOfLines={1}>
            {item.arName}
          </AppText>

          <TouchableOpacity onPress={()=>{deleteFavorite(item.id); getProducts(true)}}>
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
          data={dryCleanFavorite}
          renderItem={_renderFavoriteItem}
          contentContainerStyle={{
            marginVertical: calcHeight(10),
            width: calcWidth(375),
          }}
          keyExtractor={(item, index) => `${Math.random()*100}`}
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
    products: state.products.dryClean,
    error: state.products.error,
    loading: state.products.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getProducts, deleteFavorite}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wash);
