import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ToastAndroid} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import DropDownModal from '../../components/atoms/DrobDownModal';
import DropDown from '../../components/atoms/DropDown';
import Button from '../../components/atoms/Button';
import CheckBox from '../../components/atoms/CheckBox';
import {useNavigation} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions/Products';
import {setCart, deleteCart} from '../../redux/actions/Cart';
import Toast from 'react-native-simple-toast';


const Product = ({products, productsFav, loading, setCart}) => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(true);
  const [pieces, setPieces] = useState(false);
  const [counter, setCounter] = useState(1);
  const [favoriteDropDownVisible, setFavoriteDropDownVisible] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [pieceDropDownVisible, setPieceDropDownVisible] = useState(false);

  const toggleFavorite = () => {
    if (favorite === false) {
      setFavorite(!favorite);
      setPieces(!pieces);
    }
  };
  const togglePieces = () => {
    if (pieces === false) {
      setFavorite(!favorite);
      setPieces(!pieces);
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

  const closePieceModal = () => {
    setPieceDropDownVisible(false);
  };

  const handlePieceSelect = (item) => {
    setSelectedPiece(item);
  };

  const addToCart = () => {
    if (selectedPiece) {
      setCart(selectedPiece.id, counter, null, true);
      Toast.show('تم بنجاح');
      setCounter(1);
      setSelectedPiece(null);
    } else {
      Toast.show('من فضلك اختر المنتج');
    }
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
        placeholder={selectedPiece ? selectedPiece.name : 'اختر من المفضلة'}
      />
      <View style={styles.orderTime}>
        <TouchableOpacity onPress={togglePieces}>
          <CheckBox selected={pieces} />
        </TouchableOpacity>
        <AppText style={styles.orderTimeText}>اختر المنتج</AppText>
      </View>
      <DropDown
        onPress={() => {
          setPieceDropDownVisible(true);
        }}
        disabled={!pieces}
        placeholder={selectedPiece ? selectedPiece.name : 'اختر المنتج'}
      />

      <View style={styles.addToCart}>
        <Button
          title={'اضف الى السلة'}
          onPress={() => addToCart()}
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
        data={productsFav.map((fav) => {
          return {
            id: fav.id,
            name: fav.arName,
            value: fav.id,
          };
        })}
        visible={favoriteDropDownVisible}
        onPress={(item) => handlePieceSelect(item)}
        closeModal={closeFavoriteModal}
        onPressConfirm={(item) => handlePieceSelect(item)}
        onSelectItem={(item) => handlePieceSelect(item)}
        selected={selectedPiece}
        title="اختر من المفضلة"
      />
      <DropDownModal
        data={products.map((fav) => {
          return {
            id: fav.id,
            name: fav.arName,
            value: fav.id,
          };
        })}
        visible={pieceDropDownVisible}
        onPress={(item) => handlePieceSelect(item)}
        closeModal={closePieceModal}
        onPressConfirm={(item) => handlePieceSelect(item)}
        onSelectItem={(item) => handlePieceSelect(item)}
        selected={selectedPiece}
        title="اختر المنتج"
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    products: state.products.products,
    productsFav: state.favorite.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({setCart}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
