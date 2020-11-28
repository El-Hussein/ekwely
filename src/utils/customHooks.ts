import {BackHandler} from 'react-native';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

export const useBackButton = (handler: () => boolean | null | undefined) => {
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handler);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handler);
      };
    }, [handler]),
  );
};
