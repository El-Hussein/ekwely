import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionic from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './homeStack';
import COLORS from '../../common/colors';
import {calcFont} from '../../common/styles';
import AppText from '../../components/atoms/AppText';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AppTabs = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: COLORS.main,
      inactiveTintColor: COLORS.gray,
      style: {paddingTop: calcFont(2)},
    }}>
    <Tabs.Screen
      name="Home"
      options={{
        tabBarIcon: ({color}) => (
          <Ionic name="md-home" size={calcFont(24)} color={color} />
        ),
      }}
      component={HomeStack}
    />
    <Tabs.Screen
      options={{
        tabBarIcon: ({color}) => (
          <Ionic name="ios-albums" size={calcFont(24)} color={color} />
        ),
      }}
      name="Categories"
      component={HomeStack}
    />
    <Tabs.Screen
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunity
            name="message-text"
            size={calcFont(24)}
            color={color}
          />
        ),
      }}
      name="Messages"
      component={HomeStack}
    />
    <Tabs.Screen
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunity
            name="account-circle"
            size={calcFont(23)}
            color={color}
          />
        ),
      }}
      name="Cart"
      component={HomeStack}
    />
    <Tabs.Screen
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunity
            name="account-circle"
            size={calcFont(23)}
            color={color}
          />
        ),
      }}
      name="Account"
      component={HomeStack}
    />
  </Tabs.Navigator>
);

export const MainTabs = () => (
  <Stack.Navigator initialRouteName="AppTabs" headerMode="none" mode="modal">
    <Stack.Screen name="AppTabs" component={AppTabs} />
  </Stack.Navigator>
);
