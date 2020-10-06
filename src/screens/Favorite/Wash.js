import React, { useCallback } from 'react';
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
import COLORS from '../../common/colors';
import {getProducts} from '../../redux/actions/Products';
import {Line} from '../../components/atoms/Line';
import {
  getProductsFavorite,
  getWashFavorite,
  deleteFavorite,
} from '../../redux/actions/Favorite';
import { useFocusEffect } from '@react-navigation/native';
const Wash = ({washFav, loading, getWashFavorite, deleteFavorite}) => {
  useFocusEffect(
    useCallback(() => {
      if (washFav.length === 0) {
        getWashFavorite();
      }
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
              getWashFavorite(true);
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
          data={washFav}
          renderItem={_renderFavoriteItem}
          contentContainerStyle={{
            marginVertical: calcHeight(10),
            width: calcWidth(375),
          }}
          keyExtractor={(item, index) => `${Math.random() * 100}`}
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
    washFav: state.favorite.wash,
    loading: state.favorite.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getWashFavorite, deleteFavorite}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wash);
