import React, {FC} from 'react';
import {View, TouchableOpacity, TextInput, ViewStyle} from 'react-native';
import AppText from '../../atoms/AppText';
import COLORS from '../../../common/colors';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import styles from './styles';

interface Props {
  style?: ViewStyle;
  placeholder: string;
  maxLength?: number;
  onEndEditing?: (event?: TouchEvent) => void;
  onSubmitEditing?: (event?: TouchEvent) => void;
  onChangeText?: (event?: TouchEvent) => void;
  onPress?: () => void;
  returnKeyType?: string;
  keyboardType?: string;
  returnKeyLabel?: string;
  ref?: string;
  value: any;
  multiline: number;
  password: any;
  text: any;
  error: string;
  textInputView: ViewStyle;
}
const Input: FC<Props> = ({
  placeholder,
  maxLength,
  onEndEditing,
  onSubmitEditing,
  onChangeText,
  returnKeyType,
  keyboardType,
  returnKeyLabel,
  ref,
  value,
  multiline,
  password,
  text,
  error,
  onPress,
  textInputView,
  style,
}) => {
  return (
    <View style={styles.inputContainer}>
      <AppText style={styles.inputHeader}>{placeholder}</AppText>
      <View style={[styles.textInputView, textInputView]}>
        <TextInput
          enablesReturnKeyAutomatically
          placeholder={placeholder}
          style={[styles.textInput, style]}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={COLORS.white}
          secureTextEntry={password && !text}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          returnKeyLabel={returnKeyLabel}
          keyboardType={keyboardType}
          ref={ref}
          value={value}
          multiline={multiline}
          onKeyPress={onSubmitEditing}
          onEndEditing={onEndEditing}
          maxLength={maxLength || 30}
          selectionColor={COLORS.main}
        />
        {password && (
          <TouchableOpacity onPress={onPress} style={styles.eyeIcon}>
            <AppIcon
              color={COLORS.white}
              name={!text ? ICONS.settings : ICONS.feed}
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <AppText style={styles.error}>{error}</AppText> : null}
    </View>
  );
};
export default React.memo(Input);
