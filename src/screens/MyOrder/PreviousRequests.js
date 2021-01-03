import React, {useCallback, useEffect, useRef} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import Order from './Order';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import {useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getHistoryOrder} from '../../redux/actions/Order';

import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {useFocusEffect} from '@react-navigation/native';

const Product = ({getHistoryOrder, currentPage, length, order, loading}) => {
  useFocusEffect(
    useCallback(() => {
      getHistoryOrder(false, 0);
    }, []),
  );
  const _renderOrderItem = ({item}) => {
    return <Order item={item} type="تم التسليم" />;
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
          onEndReached={() => {
            if (order.length >= length) return;
            getHistoryOrder(true, currentPage);
          }}
          data={order}
          renderItem={_renderOrderItem}
          contentContainerStyle={{
            paddingVertical: calcHeight(10),
            width: calcWidth(375),
          }}
          keyExtractor={(item, index) => `${Math.random() * 100}`}
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
    order: state.order.historyOrder,
    error: state.order.error,
    loading: state.order.loading,
    currentPage: state.order.currentPageLength,
    length: state.order.historyOrderLength,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getHistoryOrder}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
