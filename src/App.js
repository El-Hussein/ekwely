import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation';
// import {NetStatus} from './components/molecules/NetStatus';
import COLORS from './common/colors';
import AsyncStorage from '@react-native-community/async-storage';
import {USER_DATA} from './common/constants';
import {Provider, useDispatch} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SIGN_IN} from './redux/actions/types';
import store from './redux/store';

const App = () => {
  const [initialRoute, setInitialRoute] = useState('Auth');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem(USER_DATA)
      .then((response) => {
        if (response) {
          // set user in redux
          dispatch({type: SIGN_IN, payload: JSON.parse(response)});
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.secondary}}>
      <StatusBar backgroundColor={COLORS.main} barStyle="dark-content" />
      <AppNavigation initialRouteName={initialRoute} />
      {/* <NetStatus /> */}
    </SafeAreaView>
  );
};

const MainApp = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
export default React.memo(MainApp);
