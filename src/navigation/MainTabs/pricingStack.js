import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PricingScreen from '../../screens/Pricing';
import {headerOptions} from '../headerOptions';

const Pricing = createStackNavigator();

const PricingStack = () => (
  <Pricing.Navigator initialRouteName="Pricing">
    <Pricing.Screen
      options={headerOptions}
      name="Pricing"
      component={PricingScreen}
    />
  </Pricing.Navigator>
);

export default PricingStack;
