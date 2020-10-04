import React, { useCallback} from 'react';
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
import {getCart ,deleteCart} from '../../redux/actions/Cart';

const serviceTypeMap = { 
  0: 'غسيل',
  1: 'مكوي',
  2: 'غسيل ومكوي',
  3: 'تصليح',
};

const PlaceOrder = ({getCart, cart, loading, totalPrice ,deleteCart }) => {
  useFocusEffect(
    useCallback(() => {
      getCart();
    }, []),
  );
  const navigation = useNavigation();
  // const [quickCleaning, setQuickCleaning] = useState(true);
  // const [cashPayment, setCashPayment] = useState(false);

  // const toggleQuickCleaning = () => {
  //   setQuickCleaning(!quickCleaning);
  // };
  // const toggleCashPayment = () => {
  //   setCashPayment(!cashPayment);
  // };



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
              // onPress={() => setCart(item.itemId, item.quantity+1)}
              titleStyle={styles.counterButtonText}
              style={styles.counterButton}
            />
            <AppText style={styles.counterText}>{item.quantity}</AppText>
            <Button
              title={'-'}
              // onPress={() => setCart(item.itemId, item.quantity-1)}
              titleStyle={styles.counterButtonText}
              style={styles.counterButton}
              disabled={item.quantity < 2}
            />
          </View>
          <AppText style={styles.price}>{item.price} ج</AppText>
          <TouchableOpacity onPress={() => {
            console.log('item',item.id)
              deleteCart(item.id); 
              getCart(true);
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
            keyExtractor={(item, index) => `${Math.random() * 100}`}
            ListEmptyComponent={
              <AppText style={styles.EmptyComponent}>لا توجد منتجات</AppText>
            }
            ListFooterComponent={
              <>
                {/* <TouchableOpacity
                onPress={toggleQuickCleaning}
                style={styles.checkBoxContainer}>
                <AppText style={styles.checkboxText}>
                  خدمة التنظيف السريع (تسليم خلال 24 ساعه)
                </AppText>
                <IconIonicons
                  name={quickCleaning ? 'md-checkbox' : 'square-outline'}
                  size={calcFont(25)}
                  color={quickCleaning ? COLORS.darkMain : COLORS.midLightGray}
                />
              </TouchableOpacity> */}

                <View style={styles.total}>
                  <AppText style={styles.totalPriceText}>اجمالي القيمه</AppText>
                  <AppText style={styles.priceText}>{totalPrice} ج</AppText>
                </View>
                {/* <View style={styles.total}>
                <AppText style={styles.totalPromoCode}>خصم البروموكود</AppText>
                <AppText style={styles.PromoCode}>40 ج</AppText>
              </View>
              <View style={styles.total}>
                <AppText style={styles.totalPriceText}>
                  القيمة بعد الخصم
                </AppText>
                <AppText style={styles.priceText}>160 ج</AppText>
              </View> */}
                {/* <TouchableOpacity
                // onPress={toggleCashPayment}
                style={styles.checkBoxContainer}>
                <AppText style={styles.checkboxText}>الدفع نقدى</AppText>
                <IconIonicons
                  name={cashPayment ? 'md-checkbox' : 'square-outline'}
                  size={calcFont(25)}
                  color={cashPayment ? COLORS.darkMain : COLORS.midLightGray}
                />
              </TouchableOpacity> */}

                <View style={styles.orderButton}>
                  <Button
                    title={'أستكمال الطلب'}
                    onPress={() => navigation.navigate('PlaceOrder')}
                    titleStyle={styles.completeOrder}
                    style={styles.button}
                  />
                </View>
              </>
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
    ...bindActionCreators({getCart ,deleteCart}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
