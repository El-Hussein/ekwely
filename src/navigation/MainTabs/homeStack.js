import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import PlaceOrder from '../../screens/PlaceOrder';
import Order from '../../screens/Order';
import {headerOptions} from '../headerOptions';

const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator initialRouteName="Home">
    <Home.Screen options={headerOptions} name="Home" component={HomeScreen} />
    <Home.Screen
      options={headerOptions}
      name="PlaceOrder"
      component={PlaceOrder}
    />
    <Home.Screen
      options={headerOptions}
      name="Order"
      component={Order}
    />
  </Home.Navigator>
);

export default HomeStack;
