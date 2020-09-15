import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccountScreen from '../../screens/Account/MyAccount';

const Profile = createStackNavigator();

const ProfileStack = () => (
  <Profile.Navigator initialRouteName="Profile">
    <Profile.Screen name="Profile" component={MyAccountScreen} />
  </Profile.Navigator>
);

export default ProfileStack;
