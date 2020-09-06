import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import OrderScreen from '../../screens/Order';

const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator initialRouteName="signIn">
    <Home.Screen name="Home" component={OrderScreen} />
  </Home.Navigator>
);

export default HomeStack;