import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import DropDownModal from '../../components/atoms/DrobDownModal';
import DropDown from '../../components/atoms/DropDown';
import Button from '../../components/atoms/Button';
import CheckBox from '../../components/atoms/CheckBox';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';



const Product = ({ productsItem, loading ,productsFav}) => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(true);
  const [products, setProducts] = useState(false);
  const [counter, setCounter] = useState(1);
  const [favoriteDropDownVisible, setFavoriteDropDownVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productDropDownVisible, setProductDropDownVisible] = useState(false);

  const toggleFavorite = () => {
    if (favorite === false) {
      setFavorite(!favorite);
      setProducts(!products);
    }
  };
  const toggleProducts = () => {
    if (products === false) {
      setFavorite(!favorite);
      setProducts(!products);
    }
  };
  const changeCounter = (type) => {
    if (type === 'increase') {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const closeFavoriteModal = () => {
    setFavoriteDropDownVisible(false);
  };

  const closeProductModal = () => {
    setProductDropDownVisible(false);
  };

  const handleProductSelect = (item) => {
    setSelectedProduct(item);
  };

  const closeServiceModal = () => {
    setServiceDropDownVisible(false);
  };

  const handleServiceSelect = (item) => {
    setSelectedService(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.orderTime}>
        <TouchableOpacity onPress={toggleFavorite}>
          <CheckBox selected={favorite} />
        </TouchableOpacity>
        <AppText style={styles.orderTimeText}>اختر من المفضلة</AppText>
      </View>
      <DropDown
        onPress={() => {
          setFavoriteDropDownVisible(true);
        }}
        disabled={!favorite}
        placeholder="اختر من المفضلة"
      />
      <View style={styles.orderTime}>
        <TouchableOpacity onPress={toggleProducts}>
          <CheckBox selected={products} />
        </TouchableOpacity>
        <AppText style={styles.orderTimeText}>اختر المنتج</AppText>
      </View>
      <DropDown
        onPress={() => {
          setProductDropDownVisible(true);
        }}
        disabled={!products}
        placeholder="اختر المنتج"
      />

      

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
            onPress={() => changeCounter('increase')}
            titleStyle={styles.counterButtonText}
            style={styles.counterButton}
          />
          <AppText style={styles.counterText}>{counter}</AppText>
          <Button
            title={'-'}
            onPress={() => changeCounter('decrease')}
            titleStyle={styles.counterButtonText}
            style={styles.counterButton}
            disabled={counter < 2}
          />
        </View>
      </View>

      <View style={styles.confirmOrderButton}>
        <Button
          title={'تأكيد الطلب'}
          onPress={() => {
            navigation.popToTop();
            navigation.navigate('Cart');
          }}
          titleStyle={styles.confirmOrder}
          style={styles.button}
        />
      </View>
      {/* dropdown */}
      <DropDownModal
        data={[
          {id: 1, name: 'غاده', value: 1,},
          {id: 2, name: 'حسين', value: 2, },
          {id: 3, name: 'عبير', value: 3, },
        ]}
        visible={favoriteDropDownVisible}
        onPress={(item) => handleProductSelect(item)}
        closeModal={closeFavoriteModal}
        onPressConfirm={(item) => handleProductSelect(item)}
        onSelectItem={(item) => handleProductSelect(item)}
        selected={selectedProduct}
        title="اختر من المفضلة"
      />
      <DropDownModal
        data={[
          {id: 1, name: 'قطعه 1', value: 1, },
          {id: 2, name: 'قطعه 2', value: 2, },
          {id: 3, name: 'قطعه 3', value: 3, },
        ]}
        visible={productDropDownVisible}
        onPress={(item) => handleProductSelect(item)}
        closeModal={closeProductModal}
        onPressConfirm={(item) => handleProductSelect(item)}
        onSelectItem={(item) => handleProductSelect(item)}
        selected={selectedProduct}
        title="اختر المنتج"
      />
      
    </View>
  );
};

function mapStateToProps(state) {
  return {
    productsItem: state.products.products,
    productsFav: state.favorite.products,

  };
}


export default connect(mapStateToProps) (Product);