import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccountScreen from '../../screens/Account/MyAccount';
import {headerOptions} from '../headerOptions';

const Profile = createStackNavigator();

const ProfileStack = () => (
  <Profile.Navigator initialRouteName="Profile">
    <Profile.Screen
      options={headerOptions}
      name="Profile"
      component={MyAccountScreen}
    />
  </Profile.Navigator>
);

export default ProfileStack;
