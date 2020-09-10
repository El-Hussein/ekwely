import React, { useState } from "react";
import { View, TouchableOpacity, FlatList, Platform } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AppText } from "../../../../../components/AppText";
import { calcFont } from "../../../../../utils/responsive";
import { colors } from "../../../../../constants/colors";
import icons from "../../../../../constants/icons";
import locale from "../../../../../locale";
import { styles } from "./styles";

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
      {Platform.OS === "ios" ? (
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
          hideModalContentWhileAnimating
        >
          <View style={styles.container}>
            <FlatList
              data={data}
              ListHeaderComponent={
                <View style={styles.header}>
                  <TouchableOpacity onPress={closeModal}>
                    <Icon
                      name={icons.close}
                      size={calcFont(25)}
                      style={styles.closeIcon}
                    />
                  </TouchableOpacity>
                  <AppText style={styles.titleText}>{title}</AppText>
                </View>
              }
              contentContainerStyle={styles.list}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    onPress(item);
                    closeModal();
                  }}
                >
                  <AppText style={styles.nameText}>{item.name}</AppText>
                  <Icon
                    name={icons.check}
                    size={calcFont(25)}
                    color={
                      selected === item ? colors.fillColor : colors.white01
                    }
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
          hideModalContentWhileAnimating
        >
          <View style={styles.androidContainer}>
            <FlatList
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              data={data}
              ListHeaderComponent={
                <View style={styles.androidHeader}>
                  <AppText style={styles.titleText}>{title}</AppText>
                </View>
              }
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setAndroidSelected(item)}
                  style={styles.androidCard}
                >
                  <AppText style={styles.nameText}>{item.name}</AppText>
                  <View>
                    <Icon
                      name={
                        androidSelected === item
                          ? icons.checkBoxMarked
                          : icons.checkBox
                      }
                      size={calcFont(25)}
                      color={colors.fillColor}
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                disabled={!androidSelected}
                onPress={() => {
                  onSelectItem(androidSelected);
                  closeModal();
                }}
              >
                <AppText style={styles.buttonText}>{locale.confirm}</AppText>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal}>
                <AppText style={styles.buttonText}>{locale.cancel}</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default React.memo(DropDown);
