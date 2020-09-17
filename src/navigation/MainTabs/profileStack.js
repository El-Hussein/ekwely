import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccountScreen from '../../screens/Account/MyAccount';
import EditAccountScreen from '../../screens/Account/EditAccount';
import EditPasswordScreen from '../../screens/Account/EditPassword';
import {headerOptions} from '../headerOptions';

const Profile = createStackNavigator();

const ProfileStack = () => (
  <Profile.Navigator initialRouteName="Profile">
    <Profile.Screen
      options={headerOptions}
      name="Profile"
      component={MyAccountScreen}
    />
    <Profile.Screen
      options={headerOptions}
      name="EditPassword"
      component={EditPasswordScreen}
    />
    <Profile.Screen
      options={headerOptions}
      name="EditAccount"
      component={EditAccountScreen}
    />
  </Profile.Navigator>
);

export default ProfileStack;
