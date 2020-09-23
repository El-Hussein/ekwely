import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../../../common/colors';
import { calcFont } from '../../../common/styles';
import AppText from '../AppText';
import styles from './styles';

const AnimatedList = ({listTitle, children}) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const openCloseSection = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <View style={styles.animatedContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openCloseSection}
        style={styles.animatedHeader}>
        <AppText style={styles.animatedTitle}>{listTitle}</AppText>
        <IconF name={isOpen ? 'chevron-up' : 'chevron-down'}  color={COLORS.drop} size={calcFont(18)}/>
      </TouchableOpacity>
      {isOpen && children}
    </View>
  );
};

export default AnimatedList;
