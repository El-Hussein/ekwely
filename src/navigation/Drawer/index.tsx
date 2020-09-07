import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Drawer from '../../screens/Drawer';
import {MainTabs} from '../MainTabs';

const DrawerNavigator = createDrawerNavigator();

const DrawerNavigation = () => (
  <DrawerNavigator.Navigator
    initialRouteName="Home"
    // drawerContent={() => <Drawer />}
  >
    <DrawerNavigator.Screen component={MainTabs} name="Main" />
  </DrawerNavigator.Navigator>
);

export default DrawerNavigation;
