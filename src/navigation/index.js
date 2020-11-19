import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import DrawerNavigation from './Drawer';

const RootStack = createStackNavigator();

const AppNavigation = ({initialRouteName}) => (
  <NavigationContainer>
    <RootStack.Navigator
      // initialRouteName={initialRouteName}
      headerMode={'none'}>
      <RootStack.Screen name="Drawer" component={DrawerNavigation} />
      <RootStack.Screen name="Auth" component={AuthStack} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
