import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PlaceOrderScreen from '../../screens/PlaceOrder';
import { headerOptions } from '../headerOptions';

const Favorite = createStackNavigator();

const FavoriteStack = () => (
  <Favorite.Navigator initialRouteName="Favorite">
    <Favorite.Screen
      options={headerOptions}
      name="Favorite"
      component={PlaceOrderScreen}
    />
  </Favorite.Navigator>
);

export default FavoriteStack;
