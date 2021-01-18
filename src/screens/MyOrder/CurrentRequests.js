import React, {useCallback, useEffect, useRef} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import Order from './Order';
import AppText from '../../components/atoms/AppText';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCurrentOrder} from '../../redux/actions/Order';
import COLORS from '../../common/colors';
import {useFocusEffect} from '@react-navigation/native';

const Product = ({getCurrentOrder, currentPage, length, order, loading}) => {
  useFocusEffect(
    useCallback(() => {
      getCurrentOrder(false, 0);
    }, []),
  );
  const _renderOrderItem = ({item}) => {
    return <Order item={item} type="قيد التنفيذ" />;
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
            if (order.length >= length) return;
            getCurrentOrder(true, currentPage);
          }}
          refreshing={loading}
          data={order}
          renderItem={_renderOrderItem}
          contentContainerStyle={{
            width: calcWidth(375),
            paddingVertical: calcHeight(10),
          }}
          keyExtractor={(item, index) => `${item.id}`}
          ListEmptyComponent={
            <AppText style={styles.EmptyComponent}>لا توجد طلبات</AppText>
          }
        />
      )}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    order: state.order.currentOrder,
    error: state.order.error,
    loading: state.order.loading,
    currentPage: state.order.currentPageCurrent,
    length: state.order.currentOrderLength,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getCurrentOrder}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
