import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation';
// import {NetStatus} from './components/molecules/NetStatus';
import COLORS from './common/colors';
import AsyncStorage from '@react-native-community/async-storage';
import {USER_DATA} from './common/constants';

const App = () => {
  const [initialRoute, setInitialRoute] = useState('Auth');
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem(USER_DATA)
      .then((response) => {
        if (response) {
          // set user in redux
          // take care data is returned as string to convert it into object use JSON.parse()
          setInitialRoute('Drawer');
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log('error getting user data from storage -> ', err);
      });
  }, []);

  if (loading) return <></>;
  console.log(initialRoute);

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary}}>
        <StatusBar backgroundColor={COLORS.main} barStyle="dark-content" />
        <AppNavigation initialRouteName={initialRoute} />
        {/* <NetStatus /> */}
      </SafeAreaView>
    </>
  );
};
export default React.memo(App);
