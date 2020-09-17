import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from '../../screens/Drawer';
import {MainTabs} from '../MainTabs';
import MyOrder from '../../screens/MyOrder';
import Faq from '../../screens/Faq';
import Support from '../../screens/Support';
import ContactUs from '../../screens/ContactUs';

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
    <DrawerNavigator.Screen component={MainTabs} name="Main" />
    <DrawerNavigator.Screen component={MyOrder} name="MyOrders" />
    <DrawerNavigator.Screen component={Faq} name="FAQ" />
    <DrawerNavigator.Screen component={Support} name="Support" />
    <DrawerNavigator.Screen component={ContactUs} name="Contact" />
  </DrawerNavigator.Navigator>
);

export default DrawerNavigation;
