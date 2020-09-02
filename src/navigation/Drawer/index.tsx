import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from '../../screens/Drawer';
import TripsHistory from '../../screens/TripsHistory';
import Wallet from '../../screens/Wallet';
import AboutUs from '../../screens/AboutUs';
import ContactUs from '../../screens/ContactUs';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile';
import TripDetails from '../../screens/TripDetails';
import MainStack from '../MainStack';

const DrawerNavigator = createDrawerNavigator();

const DrawerNavigation = () => (
  <DrawerNavigator.Navigator
    initialRouteName="Home"
    drawerContent={() => <Drawer />}>
    <DrawerNavigator.Screen component={MainStack} name="Main" />
  </DrawerNavigator.Navigator>
);

export default DrawerNavigation;
