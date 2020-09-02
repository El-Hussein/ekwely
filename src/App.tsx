/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation';
import {NetStatus} from './components/molecules/NetStatus';
import COLORS from './common/colors';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary}}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
        {/* <NetStatus /> */}
      </SafeAreaView>
    </>
  );
};
export default React.memo(App);
