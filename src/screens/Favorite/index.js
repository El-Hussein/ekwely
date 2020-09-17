import React, {useState, useRef} from 'react';
import {View, Dimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import Wash from './Wash';
import Product from './Product';

const initialLayout = {width: Dimensions.get('window').width};

const Pricing = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'المنتجات'},
    {key: 'second', title: 'غسيل ومكوى'},
  ]);

  const renderScene = SceneMap({
    first: Product,
    second: Wash,
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
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}>طلبات مفضلة</AppText>
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
    </View>
  );
};

export default Pricing;
