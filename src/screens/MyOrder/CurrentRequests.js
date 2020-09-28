import React, {useEffect, useRef} from 'react';
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

const Product = ({getCurrentOrder, order, loading}) => {
  useEffect(() => {
    getCurrentOrder();
  }, []);
  const _renderOrderItem = ({item}) => {
    return <Order item={item} type="قيد التنفيذ" />;
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          color={COLORS.main}
          style={{marginVertical: calcHeight(20), alignSelf: 'center'}}
          size={calcFont (30)}
        />
      ) : (
        <FlatList
          data={order}
          renderItem={_renderOrderItem}
          contentContainerStyle={{
            marginVertical: calcHeight(10),
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
    order: state.order.currentOrder,
    error: state.order.error,
    loading: state.order.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getCurrentOrder}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
