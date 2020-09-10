import React, {FC, useState} from 'react';
import {View, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {calcHeight, calcWidth, calcFont} from '../../../common/styles';
import styles from './styles';

const ImagesSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        layout="default"
        renderItem={({item}) => (
          <Image
            style={styles.swiperImageStyle}
            source={item.image_path}
            resizeMode="contain"
          />
        )}
        sliderWidth={calcWidth(250)}
        itemWidth={calcWidth(245)}
        onSnapToItem={(index) => setCurrentIndex(index)}
        keyExtractor={(item, index) => `${index}`}
        loop
      />
      <View style={styles.swiperPaginationStyle}>
        {slides.map((item, index) => {
          const check = index === currentIndex;
          return (
            <View
              key={`dot-${item.id}`}
              style={[
                styles.swiperDotStyle,
                check && styles.swiperActiveDotStyle,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ImagesSlider;
