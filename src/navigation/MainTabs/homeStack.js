import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
 import Order from '../../screens/Order';
import {headerOptions} from '../headerOptions';

const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator initialRouteName="Home">
    <Home.Screen options={headerOptions} name="Home" component={HomeScreen} />
     
    <Home.Screen
      options={headerOptions}
      name="Order"
      component={Order}
    />
  </Home.Navigator>
);

export default HomeStack;
