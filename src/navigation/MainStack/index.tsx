import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import PickTrip from '../../screens/PickTrip';
import TripsHistory from '../../screens/TripsHistory';
import Wallet from '../../screens/Wallet';
import AboutUs from '../../screens/AboutUs';
import ContactUs from '../../screens/ContactUs';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile';
import FONTS from '../../common/fonts';
import COLORS from '../../common/colors';
import TripDetails from '../../screens/TripDetails';

const headerCustonStyle = {
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    ...FONTS.cairoBold,
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: COLORS.main,
    elevation: 0,
    shadowOpacity: 0,
  },
};

const MainStack = createStackNavigator();

const MainNavigator = () => (
  <MainStack.Navigator
    initialRouteName="Home"
    screenOptions={{animationEnabled: true}}>
    <MainStack.Screen
      component={Home}
      name="Home"
      options={{headerShown: false}}
    />
    <MainStack.Screen
      component={PickTrip}
      name="PickTrip"
      options={{
        title: '',
        // header :()=>
        // headerLeft: () => <AppIcon name={ICONS.feed} />,
        ...headerCustonStyle,
      }}
    />
    <MainStack.Screen component={TripsHistory} name="TripsHistory" />
    <MainStack.Screen
      component={Wallet}
      name="Wallet"
      options={{headerShown: false}}
    />
    <MainStack.Screen component={AboutUs} name="AboutUs" />
    <MainStack.Screen component={ContactUs} name="ContactUs" />
    <MainStack.Screen component={Settings} name="Settings" />
    <MainStack.Screen component={Profile} name="Profile" />
    <MainStack.Screen component={TripDetails} name="TripDetails" />
  </MainStack.Navigator>
);

export default MainNavigator;
