import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login';
// import RegisterScreen from '../../screens/Auth/Register';
import {Trans} from '../../i18n';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';

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

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="signIn">
    <AuthStack.Screen
      options={{
        title: Trans('signIn'),
        ...headerCustonStyle,
      }}
      name="Login"
      component={LoginScreen}
    />
    <AuthStack.Screen
      options={{
        title: Trans('signUp'),
        ...headerCustonStyle,
      }}
      name="Register"
      component={RegisterScreen}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
