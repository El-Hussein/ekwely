import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import Button from '../../components/atoms/Button';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCart, deleteCart, setCart} from '../../redux/actions/Cart';
import Loader from '../../components/atoms/Loader';

const serviceTypeMap = {
  0: 'غسيل',
  1: 'مكوي',
  2: 'غسيل ومكوي',
  3: 'تصليح',
};

const PlaceOrder = ({
  getCart,
  cart,
  loading,
  totalPrice,
  deleteCart,
  setCart,
}) => {
  useFocusEffect(
    useCallback(() => {
      if (cart.length === 0) getCart();
    }, []),
  );
  const navigation = useNavigation();
  const [localeLoading, setLocaleLoading] = useState(false);

  const _renderCartItem = ({item}) => {
    return (
      <View>
        <View style={styles.item}>
          <View style={styles.name}>
            <AppText numberOfLines={1} style={styles.product}>
              {item.itemName}
            </AppText>
            <AppText style={styles.type}>
              {item.serviceType === null
                ? 'منتج'
                : serviceTypeMap[item.serviceType]}
            </AppText>
          </View>
          <View style={styles.counter}>
            <Button
              title={'+'}
              onPress={() => {
                setLocaleLoading(true);
                setCart(
                  item.itemId,
                  item.quantity + 1,
                  item.serviceType,
                  item.isProduct,
                  item.id,
                );
                setTimeout(() => {
                  getCart(true);
                  setLocaleLoading(false);
                }, 1000);
              }}
              titleStyle={styles.counterButtonText}
              style={styles.counterButton}
            />
            <AppText style={styles.counterText}>{item.quantity}</AppText>
            <Button
              title={'-'}
              onPress={() => {
                setLocaleLoading(true);
                setCart(
                  item.itemId,
                  item.quantity - 1,
                  item.serviceType,
                  item.isProduct,
                  item.id,
                );
                setTimeout(() => {
                  getCart(true);
                  setLocaleLoading(false);
                }, 1000);
              }}
              titleStyle={styles.counterButtonText}
              style={styles.counterButton}
              disabled={item.quantity < 2}
            />
          </View>
          <AppText style={styles.price}>{item.price} ج</AppText>
          <TouchableOpacity
            onPress={() => {
              setLocaleLoading(true);
              deleteCart(item.id, false);
              setTimeout(() => {
                getCart(true);
                setLocaleLoading(false);
              }, 1000);
            }}>
            <IconIonicons name="close-circle-outline" size={calcWidth(25)} />
          </TouchableOpacity>
        </View>
        <Line width={calcWidth(345)} color={COLORS.lightGray} />
      </View>
    );
  };
  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={localeLoading} />
      <View style={styles.container}>
        <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>السلة</AppText>
        </View>
        {loading ? (
          <ActivityIndicator
            color={COLORS.main}
            style={{marginVertical: calcHeight(20), alignSelf: 'center'}}
            size={calcFont(30)}
          />
        ) : (
          <FlatList
            data={cart}
            renderItem={_renderCartItem}
            contentContainerStyle={{
              width: calcWidth(375),
            }}
            keyExtractor={(item, index) => `${item.id}`}
            ListEmptyComponent={
              <AppText style={styles.EmptyComponent}>لا توجد منتجات</AppText>
            }
            ListFooterComponent={
              cart.length > 0 && (
                <>
                  <View style={styles.total}>
                    <AppText style={styles.totalPriceText}>
                      اجمالي القيمه
                    </AppText>
                    <AppText style={styles.priceText}>{totalPrice} ج</AppText>
                  </View>

                  <View style={styles.orderButton}>
                    <Button
                      title={'أستكمال الطلب'}
                      onPress={() => navigation.navigate('PlaceOrder')}
                      titleStyle={styles.completeOrder}
                      style={styles.button}
                    />
                  </View>
                </>
              )
            }
          />
        )}
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    error: state.cart.error,
    loading: state.cart.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getCart, deleteCart, setCart}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
