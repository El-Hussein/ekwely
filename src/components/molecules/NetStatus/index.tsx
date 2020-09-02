import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import AppText from '../../atoms/AppText';
import {calcFont, calcHeight} from '../../../common/styles';
import { Trans } from '../../../i18n';

export const NetStatus = () => {
  const [isReady, setIsReady] = useState(false);

  const netInfo = useNetInfo();

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 100);
  }, [isReady]);

  if (!isReady) return null;
  return netInfo.isConnected ? null : (
    <View style={styles.container}>
      <View style={styles.connection}>
        <AppText style={styles.text}>{Trans('internetStatus')}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  connection: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: calcHeight(40),
    flexDirection: 'row',
    backgroundColor: 'rgb(221,75,60)',
    paddingTop: calcFont(10),
    justifyContent: 'center',
  },
  text: {
    ...FONTS.cairoLight,
    color: COLORS.white,
    textAlign: 'center',
    marginRight: calcFont(10),
    fontSize: calcFont(12),
  },
});
