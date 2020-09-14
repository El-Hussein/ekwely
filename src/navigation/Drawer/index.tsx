import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from '../../screens/Drawer';
import {MainTabs} from '../MainTabs';
import COLORS from '../../common/colors';

const DrawerNavigator = createDrawerNavigator();

const DrawerNavigation = () => (
  <DrawerNavigator.Navigator
    initialRouteName="Home"
    drawerContent={() => <Drawer />}
    drawerPosition="right"
    drawerStyle={{
    backgroundColor: COLORS.gray,
    width: '80%',
    }}
    >
    <DrawerNavigator.Screen
      component={MainTabs}
      name="Main"
    />
  </DrawerNavigator.Navigator>
);

export default DrawerNavigation;
