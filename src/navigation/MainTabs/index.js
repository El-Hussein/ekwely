import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeStack from './homeStack';
import COLORS from '../../common/colors';
import {calcFont, calcHeight, calcWidth} from '../../common/styles';
import FavoriteStack from './favoriteStack';
import ProfileStack from './profileStack';
import CartStack from './cartStack';
import PricingStack from './pricingStack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const AppTabs = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: COLORS.white,
        inactiveTintColor: COLORS.main,
        style: {
          backgroundColor: COLORS.backgroundColor,
          elevation: 0,
          height: calcHeight(70),
        },
        tabStyle: {borderRadius: calcWidth(5)},
        showLabel: false,
        activeBackgroundColor: COLORS.main,
      }}>
      <Tabs.Screen
        options={{
          tabBarIcon: ({color}) => (
            <SimpleLineIcons name="tag" size={calcFont(23)} color={color} />
          ),
        }}
        name="Pricing"
        component={PricingStack}
      />
      {user && (
        <Tabs.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Ionic name="heart-outline" size={calcFont(24)} color={color} />
            ),
          }}
          name="Favorite"
          component={FavoriteStack}
        />
      )}
      {user && (
        <Tabs.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Ionic name="person-outline" size={calcFont(24)} color={color} />
            ),
          }}
          name="Profile"
          component={ProfileStack}
        />
      )}
      {user && (
        <Tabs.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Ionic name="cart-outline" size={calcFont(23)} color={color} />
            ),
          }}
          name="Cart"
          component={CartStack}
        />
      )}
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={calcFont(24)} color={color} />
          ),
        }}
        component={HomeStack}
      />
    </Tabs.Navigator>
  );
};

export const MainTabs = () => (
  <Stack.Navigator initialRouteName="AppTabs" headerMode="none" mode="modal">
    <Stack.Screen name="AppTabs" component={AppTabs} />
  </Stack.Navigator>
);
