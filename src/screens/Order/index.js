import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import DropDown from '../../components/atoms/DropDown';
import Button from '../../components/atoms/Button';
import ImagesSlider from '../../components/atoms/ImageSlider';
import IMAGES from '../../common/images';
import {calcHeight, calcWidth, calcFont} from '../../common/styles';
import {Line} from '../../components/atoms/Line';
import CheckBox from '../../components/atoms/CheckBox';

const initialLayout = {width: Dimensions.get('window').width};
const FirstRoute = () => (
  <View
    style={{
      backgroundColor: '#ff4081',
      flex: 1,
      height: calcHeight(250),
      width: calcWidth(375),
    }}
  />
);

const SecondRoute = () => (
  <View
    style={{
      backgroundColor: '#ff4081',
      flex: 1,
      height: calcHeight(250),
      width: calcWidth(375),
    }}
  />
);
const Order = () => {
  // const [favorite, setFavorite] = useState(true);
  // const [pieces, setPieces] = useState(false);

  // const Favorite = () => {
  //   if (favorite == false) {
  //     setFavorite(!favorite);
  //     setPieces(!pieces);
  //   }
  // };
  // const Pieces = () => {
  //   if (pieces == false) {
  //     setFavorite(!favorite);
  //     setPieces(!pieces);
  //   }
  // };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const _renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        labelStyle={styles.labelStyle}
        tabStyle={styles.tabStyle}
        style={styles.tabBarStyle}
        indicatorStyle={styles.indicatorStyle}
        activeColor={COLORS.dark}
        inactiveColor={COLORS.brownishGreyTwo}
        scrollEnabled={true}
        bounces={true}
      />
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.newOrder}>
          <AppText style={styles.newOrderText}>طلب جديد</AppText>
        </View> */}

        

        <TabView
          style={styles.tabViewStyle}
          renderTabBar={(props) => _renderTabBar(props)}
          swipeEnabled={false}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
        {/* 
        <View style={styles.orderTime}>
          <TouchableOpacity onPress={Favorite}>
            <CheckBox selected={favorite} />
          </TouchableOpacity>
          <AppText style={styles.orderTimeText}>اختر من المفضلة</AppText>
        </View>
        <DropDown placeholder="اختر من المفضلة" />
        <View style={styles.orderTime}>
          <TouchableOpacity onPress={Pieces}>
            <CheckBox selected={pieces} />
          </TouchableOpacity>
          <AppText style={styles.orderTimeText}>اختر القطعة</AppText>
        </View>
        <DropDown placeholder="اختر القطعة" />

        <View style={styles.orderTime}>
          <AppText style={styles.orderTimeText}>اختر الخدمة</AppText>
        </View>
        <DropDown placeholder="اختر الخدمة" />

        <View style={styles.addToCart}>
          <Button
            title={'اضف الى السلة'}
            onPress={() => console.log('pressed')}
            titleStyle={styles.addToCartText}
            style={styles.addToCartButton}
          />

          <View style={styles.counter}>
            <Button
              title={'+'}
              onPress={() => console.log('pressed')}
              titleStyle={styles.counterButtonText}
              style={styles.counterButton}
            />
            <AppText style={styles.counterText}>1</AppText>
            <Button
              title={'-'}
              onPress={() => console.log('pressed')}
              titleStyle={styles.counterButtonText}
              style={styles.counterButton}
            />
          </View>
        </View>
 */}
        {/* <View style={styles.confirmOrderButton}>
          <Button
            title={'تأكيد الطلب'}
            onPress={() => console.log('pressed')}
            titleStyle={styles.confirmOrder}
            style={styles.button}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Order;
