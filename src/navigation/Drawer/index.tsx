import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from '../../screens/Drawer';
import {MainTabs} from '../MainTabs';
import COLORS from '../../common/colors';
import MyOrder from '../../screens/MyOrder';
import Faq from '../../screens/Faq';
import Support from '../../screens/Support';
import ContactUs from '../../screens/ContactUs';
import SelectLocationScreen from '../../screens/select-location/select-location-screen';
import {headerOptions} from '../headerOptions';

const DrawerNavigator = createDrawerNavigator();

const DrawerNavigation = () => (
  <DrawerNavigator.Navigator
    initialRouteName="Home"
    drawerContent={() => <Drawer />}
    drawerPosition="right"
    openByDefault={false}
    drawerStyle={{
      width: '80%',
    }}>
    <DrawerNavigator.Screen
      component={MainTabs}
      name="Main"
      options={headerOptions}
    />
    <DrawerNavigator.Screen
      component={MyOrder}
      name="MyOrders"
      options={headerOptions}
    />
    <DrawerNavigator.Screen
      component={Faq}
      name="FAQ"
      options={headerOptions}
    />
    <DrawerNavigator.Screen
      component={Support}
      name="Support"
      options={headerOptions}
    />
    <DrawerNavigator.Screen
      component={ContactUs}
      name="Contact"
      options={headerOptions}
    />
  </DrawerNavigator.Navigator>
);

export default DrawerNavigation;
