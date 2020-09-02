import React, {FC} from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';
import AppButton from '../../atoms/AppButton';
import styles from './styles';
import AppText from '../../atoms/AppText';

interface Props {
  title: string;
  modalTitle: string;
  onPress: (event?: TouchEvent) => void;
  disabled: boolean;
  visible: boolean;
  closeModal: () => void;
}
const AppModal: FC<Props> = ({
  title,
  onPress,
  disabled,
  visible,
  closeModal,
  modalTitle,
}) => (
  <>
    <Modal
      isVisible={visible}
      onBackButtonPress={closeModal}
      onSwipeComplete={closeModal}
      onBackdropPress={closeModal}
      onSwipeCancel={closeModal}
      swipeDirection="down"
      backdropOpacity={0.2}
      useNativeDriver
      hideModalContentWhileAnimating
      style={styles.modalStyle}
    >
      <View style={styles.innerContainer}>
        <View style={styles.topBorder} />
        <AppText style={styles.headerTitle}>{modalTitle}</AppText>
        <AppButton
          title={title}
          onPress={onPress}
          disabled={disabled}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </Modal>
  </>
);

export default React.memo(AppModal);
