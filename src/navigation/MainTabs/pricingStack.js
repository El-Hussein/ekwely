import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PricingScreen from '../../screens/Pricing';

const Pricing = createStackNavigator();

const PricingStack = () => (
  <Pricing.Navigator initialRouteName="Pricing">
    <Pricing.Screen name="Pricing" component={PricingScreen} />
  </Pricing.Navigator>
);

export default PricingStack;
