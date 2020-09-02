import React, {useState, FC} from 'react';
import {TouchableOpacity, ImageBackground, ViewStyle} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import COLORS from '../../../common/colors';
import {calcFont} from '../../../common/styles';
import styles from './styles';

interface Props {
  image: any;
  style: ViewStyle;
}
const UploadAvatar: FC<Props> = ({image, style}) => {
  const [imagePath, setImagePath] = useState(image);

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const _showImagePicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        setImagePath(imagePath);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        setImagePath(source);
      }
    });
  };

  return (
    <ImageBackground
      source={imagePath}
      style={[styles.imageBacground, style]}
      imageStyle={styles.image}>
      <TouchableOpacity
        onPress={_showImagePicker}
        activeOpacity={0.7}
        style={styles.buttom}>
        <AppIcon color={COLORS.white} name={ICONS.feed} size={calcFont(15)} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default React.memo(UploadAvatar);
