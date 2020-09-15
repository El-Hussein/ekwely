import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator initialRouteName="Home">
    <Home.Screen name="Home" component={HomeScreen} />
  </Home.Navigator>
);

export default HomeStack;
