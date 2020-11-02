import React, { useState, useEffect, useCallback, } from 'react';
import {
  View,
  Image,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import IMAGES from '../../common/images';
import COLORS from '../../common/colors';
import { calcHeight, calcWidth, calcFont } from '../../common/styles';
import { Line } from '../../components/atoms/Line';
import { connect, useSelector } from 'react-redux';
import Favorite from '../../components/atoms/Favorite';
import { bindActionCreators } from 'redux';
import { getServicesNoUser, getProducts } from '../../redux/actions/Products';
import { useFocusEffect } from '@react-navigation/native';

const Wash = ({
  getServicesNoUser,
  servicesDataNoUser,
  services,
  loading,
  getProducts,
}) => {
  useFocusEffect(
    useCallback(() => {
      if (user) {
        if (services.length === 0) {
          getProducts();
        }
      }
    }, []),
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const user = useSelector((state) => state.auth.user);

  const _renderProductItem = ({ item }) => {
    return (
      <View>
        <View style={styles.washItem}>
          <View style={styles.pieces}>
            <Favorite id={item.id} isFav={item.isFavourite} />
            <AppText style={styles.col1}>{item.arName}</AppText>
          </View>
          <AppText style={styles.col2}>{item.dryPrice} ج</AppText>
          <AppText style={styles.col3}>{item.dryCleanPrice} ج</AppText>
        </View>
        <Line width={calcWidth(345)} color={COLORS.midGray} />
      </View>
    );
  };
  useEffect(() => {
    if (!user) {
      getServicesNoUser();
    } else {
      getProducts();
    }
  }, []);



  console.log('services', services);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => {
              setSearchTerm(text);
              if (text === '') {
                setFilteredData(null);
                return;
              }
              if (text.length > 1) {
                setFilteredData(
                  services.filter((item) =>
                    item.arName.includes(searchTerm, 0),
                  ),
                );
              }
            }}
            placeholder="ابحث عن ..."
            placeholderTextColor={COLORS.mainText}
            value={searchTerm}
          />
          <Image source={IMAGES.search} style={styles.searchImage} />
        </View>
        <View style={styles.titles}>
          <View style={styles.pieces}>
            <View style={[styles.favoriteOut, { backgroundColor: COLORS.main }]}>
              <Image
                source={IMAGES.favorite}
                style={[styles.favoriteImage, { tintColor: COLORS.yellow }]}
              />
            </View>

            <AppText style={styles.col1Title}>القطع</AppText>
          </View>
          <AppText style={styles.col2Title}>مكوى</AppText>
          <AppText style={styles.col3Title}>غسيل ومكوى</AppText>
        </View>
      </View>
      {!user && loading ? (
        <ActivityIndicator
          color={COLORS.main}
          style={{ marginVertical: calcHeight(20), alignSelf: 'center' }}
          size={calcFont(30)}
        />
      ) : (
          !user && (
            <FlatList
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              data={servicesDataNoUser || []}
              renderItem={_renderProductItem}
              keyExtractor={(item, index) => `${item.id}`}
              ListEmptyComponent={
                <AppText style={styles.EmptyComponent}>لا توجد منتجات</AppText>
              }
            />
          )
        )}
      {user && loading ? (
        <ActivityIndicator
          color={COLORS.main}
          style={{ marginVertical: calcHeight(20), alignSelf: 'center' }}
          size={calcFont(30)}
        />
      ) : (
          user && (
            <FlatList
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              data={services || filteredData || []}
              renderItem={_renderProductItem}
              keyExtractor={(item, index) => `${item.id}`}
              ListEmptyComponent={
                <AppText style={styles.EmptyComponent}>لا توجد منتجات</AppText>
              }
            />
          )
        )}
    </>
  );
};
function mapStateToProps(state) {
  return {
    services: state.products.dryClean,
    loading: state.products.loading,
    servicesDataNoUser: state.products.dryCleanNoUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        getServicesNoUser,
        getProducts,
      },
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Wash);
