import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList, Platform} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import COLORS from '../../../common/colors';
import AppText from '../AppText';
import {calcFont} from '../../../common/styles';
import ICONS from '../../../common/icons';

const DropDown = ({
  selected,
  data,
  visible,
  closeModal,
  title,
  onPress,
  onSelectItem,
}) => {
  const [androidSelected, setAndroidSelected] = useState(selected || {});
  return (
    <>
      {Platform.OS === 'ios' ? (
        <Modal
          isVisible={visible}
          onBackButtonPress={closeModal}
          onSwipeComplete={closeModal}
          onBackdropPress={closeModal}
          onSwipeCancel={closeModal}
          style={styles.iosModal}
          backdropOpacity={0.2}
          swipeDirection="down"
          useNativeDriver
          hideModalContentWhileAnimating>
          <View style={styles.container}>
            <FlatList
              data={data}
              ListHeaderComponent={
                <View style={styles.header}>
                  <TouchableOpacity activeOpacity={0.7} onPress={closeModal}>
                    <Icon
                      name={ICONS.close}
                      size={calcFont(25)}
                      style={styles.closeIcon}
                    />
                  </TouchableOpacity>
                  <AppText style={styles.titleText}>{title}</AppText>
                </View>
              }
              contentContainerStyle={styles.list}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.card}
                  onPress={() => {
                    onPress(item);
                    closeModal();
                  }}>
                  <AppText style={styles.nameText}>{item.name}</AppText>
                  <Icon
                    name={ICONS.check}
                    size={calcFont(25)}
                    color={selected === item ? COLORS.main : COLORS.white}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      ) : (
        <Modal
          isVisible={visible}
          onBackButtonPress={closeModal}
          onSwipeComplete={closeModal}
          onBackdropPress={closeModal}
          onSwipeCancel={closeModal}
          backdropOpacity={0.2}
          useNativeDriver
          hideModalContentWhileAnimating>
          <View style={styles.androidContainer}>
            <FlatList
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              data={data}
              ListHeaderComponent={
                <View style={styles.androidHeader}>
                  <AppText style={styles.titleText}>{title}</AppText>
                </View>
              }
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setAndroidSelected(item)}
                  style={styles.androidCard}>
                  <AppText style={styles.nameText}>{item.name}</AppText>
                  <View>
                    <Icon
                      name={
                        androidSelected === item
                          ? ICONS.checkBoxMarked
                          : ICONS.checkBox
                      }
                      size={calcFont(25)}
                      color={COLORS.main}
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={!androidSelected}
                onPress={() => {
                  onSelectItem(androidSelected);
                  closeModal();
                }}>
                <AppText style={styles.buttonText}>تاكيد</AppText>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={closeModal}>
                <AppText style={styles.buttonText}>الغاء</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default React.memo(DropDown);
