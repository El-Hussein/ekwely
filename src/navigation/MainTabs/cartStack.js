import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OrderListScreen from '../../screens/OrderList';
import {headerOptions} from '../headerOptions';

const Cart = createStackNavigator();

const CartStack = () => (
  <Cart.Navigator initialRouteName="Cart">
    <Cart.Screen
      options={headerOptions}
      name="Cart"
      component={OrderListScreen}
    />
  </Cart.Navigator>
);

export default CartStack;
