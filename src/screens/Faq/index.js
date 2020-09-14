import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import COLORS from '../../common/colors';
import IMAGES from '../../common/images';
import AppText from '../../components/atoms/AppText';
import AnimatedList from '../../components/atoms/AnimatedList';

import {calcHeight, calcWidth, calcFont} from '../../common/styles';

import DropDown from '../../components/atoms/DropDown';
const questions = [
  {
    id: '1',
    tile: 'السؤال يكتب هنا لاحقا',
    text:
      'عاصمة لمصر حتى بداية الأسرة السادسة الفرعونية، حين انتقلت العاصمة إلى (منف) في الشمال. استُلهم اسم المحافظة من اسم عاصمتها الأقصر التي تعددت أسماؤها على مر العصور',
    e: true,
  },{
    id: '1',
    tile: 'السؤال يكتب هنا لاحقا',
    text:
      'عاصمة لمصر حتى بداية الأسرة السادسة الفرعونية، حين انتقلت العاصمة إلى (منف) في الشمال. استُلهم اسم المحافظة من اسم عاصمتها الأقصر التي تعددت أسماؤها على مر العصور',
    e: true,
  },{
    id: '1',
    tile: 'السؤال يكتب هنا لاحقا',
    text:
      'عاصمة لمصر حتى بداية الأسرة السادسة الفرعونية، حين انتقلت العاصمة إلى (منف) في الشمال. استُلهم اسم المحافظة من اسم عاصمتها الأقصر التي تعددت أسماؤها على مر العصور',
    e: true,
  },{
    id: '1',
    tile: 'السؤال يكتب هنا لاحقا',
    text:
      'عاصمة لمصر حتى بداية الأسرة السادسة الفرعونية، حين انتقلت العاصمة إلى (منف) في الشمال. استُلهم اسم المحافظة من اسم عاصمتها الأقصر التي تعددت أسماؤها على مر العصور',
    e: true,
  },
  
  
  
];

const _renderQuestionsItem = ({item}) => {
  return (
    <AnimatedList listTitle={item.tile}>
      <AppText style={styles.text}>{item.text}</AppText>
    </AnimatedList>
  );
};

const Faq = () => { 
  return (
    <View style={styles.container}>
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}>أسئلة شائعة</AppText>
      </View>
      <FlatList
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        data={questions}
        scrollEnabled={true}
        renderItem={_renderQuestionsItem}
        keyExtractor={(item, index) => `${index}`}
        ListEmptyComponent={
          <AppText style={styles.EmptyComponent}>لا توجد طلبات</AppText>
        }
      />
    </View>
  );
};

export default Faq;
