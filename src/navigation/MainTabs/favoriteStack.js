import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PlaceOrderScreen from '../../screens/PlaceOrder';

const Favorite = createStackNavigator();

const FavoriteStack = () => (
  <Favorite.Navigator initialRouteName="Favorite">
    <Favorite.Screen name="Favorite" component={PlaceOrderScreen} />
  </Favorite.Navigator>
);

export default FavoriteStack;
