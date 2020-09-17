import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import Item from './Item';
import AppText from '../../components/atoms/AppText';
import {calcHeight, calcWidth} from '../../common/styles';

const Product = () => {
  const favorites = [
    // {
    //   id: '1',
    //   name: 'أسم المنتج',
    // },
    // {
    //   id: '2',
    //   name: 'أسم المنتج',
    // },
  ];

  const _renderFavoriteItem = ({item}) => {
    return <Item item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={_renderFavoriteItem}
        contentContainerStyle={{
          marginVertical: calcHeight(10),
          width: calcWidth(375),
        }}
        keyExtractor={(item, index) => `${index}`}
        ListEmptyComponent={
          <AppText style={styles.EmptyComponent}>لا توجد مفضله</AppText>
        }
      />
    </View>
  );
};

export default Product;
