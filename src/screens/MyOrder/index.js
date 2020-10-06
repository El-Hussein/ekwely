import React, {useState} from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import Header from '../../components/atoms/Header';
import PreviousRequests from './PreviousRequests';
import CurrentRequests from './CurrentRequests';

const initialLayout = {width: Dimensions.get('window').width};

const MyOrder = () => {
  const [index, setIndex] = useState(1);
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
    <View style={{backgroundColor:COLORS.white,flex:1}}>
      <Header/>
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
      />
    </View>
  );
};

export default MyOrder;
