import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavoriteScreen from '../../screens/Favorite';
import {headerOptions} from '../headerOptions';

const Favorite = createStackNavigator();

const FavoriteStack = () => (
  <Favorite.Navigator initialRouteName="Favorite">
    <Favorite.Screen
      options={headerOptions}
      name="Favorite"
      component={FavoriteScreen}
    />
  </Favorite.Navigator>
);

export default FavoriteStack;
