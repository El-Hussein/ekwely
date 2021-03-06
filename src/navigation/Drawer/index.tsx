import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from '../../screens/Drawer';
import {MainTabs} from '../MainTabs';
import MyOrder from '../../screens/MyOrder';
import Faq from '../../screens/Faq';
import Support from '../../screens/Support';
import ContactUs from '../../screens/ContactUs';
import SelectLocationScreen from '../../screens/select-location/select-location-screen';
import {headerOptions} from '../headerOptions';
import Terms from '../../screens/Terms';

const DrawerNavigator = createDrawerNavigator();

const DrawerNavigation = (props) => {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigation.goBack();
  };
  return (
    <DrawerNavigator.Navigator
      initialRouteName="Main"
      drawerContent={() => <Drawer toggleDrawer={toggleDrawer} />}
      drawerPosition="right"
      openByDefault={false}
      drawerStyle={{
        width: '80%',
      }}>
      <DrawerNavigator.Screen component={MainTabs} name="Main" />
      <DrawerNavigator.Screen component={MyOrder} name="MyOrders" />
      <DrawerNavigator.Screen component={Faq} name="FAQ" />
      <DrawerNavigator.Screen component={Terms} name="Terms" />
      <DrawerNavigator.Screen component={Support} name="Support" />
      <DrawerNavigator.Screen component={ContactUs} name="Contact" />
      <DrawerNavigator.Screen
        options={headerOptions}
        name="SelectLocation"
        component={SelectLocationScreen}
      />
    </DrawerNavigator.Navigator>
  );
};

export default DrawerNavigation;
