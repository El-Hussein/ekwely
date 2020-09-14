import React, { FC, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import AppText from '../AppText';


const AnimatedList = ({ listTitle, children }) => {
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
    <View style={[styles.animatedContainer]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openCloseSection}
        style={styles.animatedHeader}
      >
        <AppText
          weight={Platform.OS === 'ios' ? 'Regular' : 'Bold'}
          style={styles.animatedTitle}
        >
          {listTitle}
        </AppText>
        <IconF name={isOpen ? 'chevron-up' : 'chevron-down'} />
      </TouchableOpacity>
      {isOpen && children}
    </View>
  );
};

export default AnimatedList;