import * as React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import COLORS from '../../../common/colors';

interface Props {
  headerContaent: {};
  detailsContent: {};
}

const Wrapper: React.FC<Props> = ({headerContaent, detailsContent}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        colors={COLORS.gradintColor}
        style={styles.linearGradientView}
      />

      <View style={styles.innerContainer}>
        <View style={styles.topView}>{headerContaent}</View>
        {detailsContent}
      </View>
    </View>
  );
};

export default React.memo(Wrapper);
