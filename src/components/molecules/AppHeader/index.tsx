import React, {FC} from 'react';
import {View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import ICONS from '../../../common/icons';
import AppIcon from '../../atoms/AppIcon';
import styles from './styles';
import AppText from '../../atoms/AppText';

interface Props {
  title?: string;
  back?: boolean;
}
const AppHeader: FC<Props> = ({title, back}) => {
  const naviagtion = useNavigation();
  return (
    <View style={styles.container}>
      <AppIcon
        name={ICONS.menu}
        onPress={() => naviagtion.dispatch(DrawerActions.openDrawer())}
      />
      <AppText style={styles.titleText}>{title}</AppText>
      {back && (
        <AppIcon name={ICONS.settings} onPress={() => naviagtion.goBack()} />
      )}
    </View>
  );
};

export default React.memo(AppHeader);
