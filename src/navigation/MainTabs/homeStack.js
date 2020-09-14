import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import OrderScreen from '../../screens/Order';
import MyOrderScreen from '../../screens/MyOrder';
import PlaceOrderScreen from '../../screens/PlaceOrder';
import MyAccountScreen from '../../screens/Account/MyAccount';
import EditAccountScreen from '../../screens/Account/EditAccount';
import EditPasswordScreen from '../../screens/Account/EditPassword';
import OrderListScreen from '../../screens/OrderList';
import PricingScreen from '../../screens/Pricing';
import ContactUsScreen from '../../screens/ContactUs';

const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator initialRouteName="signIn">
    <Home.Screen name="Home" component={ContactUsScreen} />
  </Home.Navigator>
);

export default HomeStack;
