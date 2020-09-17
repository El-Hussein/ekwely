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
import PreviousRequests from './PreviousRequests';
import CurrentRequests from './CurrentRequests';

const initialLayout = {width: Dimensions.get('window').width};

const MyOrder = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'الطلبات السابقة'},
    {key: 'second', title: 'الطلبات الحالية'},
  ]);

  const renderScene = SceneMap({
    first: PreviousRequests,
    second: CurrentRequests,
  });
  const _renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        labelStyle={styles.labelStyle}
        tabStyle={styles.tabStyle}
        style={styles.tabBarStyle}
        indicatorStyle={styles.indicatorStyle}
        activeColor={COLORS.white}
        inactiveColor={COLORS.main}
        scrollEnabled={true}
        bounces={true}
      />
    );
  };
  return (
    <ScrollView style={{backgroundColor:COLORS.white,flex:1}}>
      <View style={styles.myOrder}>
        <AppText style={styles.myOrderText}>قائمة الطلبات</AppText>
      </View>
      <TabView
        style={styles.tabViewStyle}
        renderTabBar={(props) => _renderTabBar(props)}
        swipeEnabled={false}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </ScrollView>
  );
};

export default MyOrder;
