import React, {useCallback, useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import styles from './styles';
import COLORS from '../../common/colors';
import AppText from '../../components/atoms/AppText';
import Wash from './Wash';
import Product from './Product';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts, getProductsNoUser} from '../../redux/actions/Products';
import {useFocusEffect} from '@react-navigation/native';

const initialLayout = {width: Dimensions.get('window').width};

const Pricing = ({getProducts, getProductsNoUser}) => {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    {key: 'first', title: 'المنتجات'},
    {key: 'second', title: 'غسيل ومكوى'},
  ]);
  const user = useSelector((state) => state.auth.user);

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
  useEffect(() => {
    if (user) {
      getProducts();
    } else {
      getProductsNoUser();
    }
  }, []);

  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}>التسعير</AppText>
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
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getProducts, getProductsNoUser}, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Pricing);
