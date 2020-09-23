import React from 'react';
import COLORS from '../common/colors';
import HeaderLeft from '../components/atoms/HeaderLeft';
import HeaderRight from '../components/atoms/HeaderRight';

export const headerOptions = {
  headerRight: () => <HeaderRight />,
  headerLeft: () => <HeaderLeft />,
  headerStyle: {backgroundColor: COLORS.main},
  title: '',
};
