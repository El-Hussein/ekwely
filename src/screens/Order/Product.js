import React, {useCallback, useEffect, useState} from 'react';
import {View, TouchableOpacity, ToastAndroid} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import DropDownModal from '../../components/atoms/DrobDownModal';
import DropDown from '../../components/atoms/DropDown';
import Button from '../../components/atoms/Button';
import CheckBox from '../../components/atoms/CheckBox';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions/Products';
import {setCart, deleteCart} from '../../redux/actions/Cart';
import Toast from 'react-native-simple-toast';
import {getProductsFavorite} from '../../redux/actions/Favorite';
import COLORS from '../../common/colors';

const Product = ({products, productsFav, setCart, getProductsFavorite}) => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(productsFav.length > 0);
  const [pieces, setPieces] = useState(productsFav.length === 0);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [favoriteDropDownVisible, setFavoriteDropDownVisible] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [pieceDropDownVisible, setPieceDropDownVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (products.length === 0) {
        getProducts();
      }
      if (productsFav.length === 0) {
        getProductsFavorite();
      }
    }, []),
  );
  useEffect(() => {
    setFavorite(productsFav.length > 0);
    setPieces(productsFav.length === 0);
  }, [productsFav]);

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
    setDisabled(false);
  };

  const addToCart = () => {
    if (selectedPiece) {
      setCart(selectedPiece.id, counter, null, true);
      Toast.show('تم الاضافه الي السله');
      setCounter(1);
      setAddedToCart(true);
      setDisabled(false);
      setSelectedPiece(null);
    } else if (!addedToCart) {
      Toast.show('من فضلك اختر المنتج');
    }
  };
  return (
    <View style={styles.container}>
      {productsFav.length > 0 && (
        <>
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
        </>
      )}
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
          loading={loading}
          title={'تأكيد الطلب'}
          onPress={() => {
            setLoading(true);
            addToCart();
            setTimeout(() => {
              setLoading(false);
              navigation.popToTop();
              navigation.navigate('Cart');
            }, 1000);
          }}
          titleStyle={{
            ...styles.confirmOrder,
            color: disabled ? COLORS.lightTextGray : COLORS.white,
          }}
          style={{
            ...styles.button,
            backgroundColor: disabled ? COLORS.lightGray : COLORS.main,
          }}
          disabled={disabled}
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
    ...bindActionCreators({setCart, getProductsFavorite}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
