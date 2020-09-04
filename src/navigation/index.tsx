import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import DrawerNavigation from './Drawer';

const RootStack = createStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Auth" component={AuthStack} />
      {/* <RootStack.Screen name="Drawer" component={DrawerNavigation} /> */}
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
