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

import {
  getProductsFavorite,
  getWashFavorite,
} from '../../redux/actions/Favorite';
import COLORS from '../../common/colors';
const services = [
  {id: 1, name: 'مكوي', value: 0},
  {id: 2, name: 'غسيل', value: 1},
  {id: 3, name: 'غسيل ومكوي', value: 2},
  {id: 4, name: 'تصليح', value: 3},
];

const Wash = ({wash, washFav, getWashFavorite, getProducts, setCart}) => {
  // useFocusEffect(
  //   useCallback(() => {
  //     if (wash.length === 0) {
  //       getProducts();
  //     }
  //     if (washFav.length === 0) {
  //       getWashFavorite();
  //     }
  //   }, []),
  // );
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(washFav.length > 0);
  const [pieces, setPieces] = useState(washFav.length === 0);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [favoriteDropDownVisible, setFavoriteDropDownVisible] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [serviceDropDownVisible, setServiceDropDownVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const [pieceDropDownVisible, setPieceDropDownVisible] = useState(false);

  useEffect(() => {
    setFavorite(washFav.length > 0);
    setPieces(washFav.length === 0);
  }, [washFav]);

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
    setSelectedService(null);
    setDisabled(true);
  };

  const closeServiceModal = () => {
    setServiceDropDownVisible(false);
  };

  const handleServiceSelect = (item) => {
    setSelectedService(item);
    setDisabled(!selectedPiece);
  };

  const addToCart = () => {
    if (selectedPiece && selectedService) {
      setCart(selectedPiece.id, counter, selectedService.value, false);
      Toast.show('تم الاضافه الي السله');
      setDisabled(false);
      setAddedToCart(true);
      setCounter(1);
      setSelectedPiece(null);
      setSelectedService(null);
    } else if (!addedToCart) {
      Toast.show('من فضلك اختر القطعه او الخدمه');
    }
  };

  return (
    <View style={styles.container}>
      {washFav.length > 0 && (
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
        <AppText style={styles.orderTimeText}>اختر القطعة</AppText>
      </View>
      <DropDown
        onPress={() => {
          setPieceDropDownVisible(true);
        }}
        disabled={!pieces}
        placeholder={selectedPiece ? selectedPiece.name : 'اختر القطعة'}
      />

      <View style={styles.chooseService}>
        <AppText style={styles.chooseServiceText}>اختر الخدمة</AppText>
      </View>
      <DropDown
        onPress={() => {
          setServiceDropDownVisible(true);
        }}
        placeholder={selectedService ? selectedService.name : 'اختر الخدمة'}
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
        data={washFav.map((fav) => {
          return {
            id: fav.id,
            name: fav.arName,
            value: fav.id,
            serviceType: fav.serviceType,
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
        data={wash.map((fav) => {
          return {
            id: fav.id,
            name: fav.arName,
            value: fav.id,
            serviceType: fav.serviceType,
          };
        })}
        visible={pieceDropDownVisible}
        onPress={(item) => handlePieceSelect(item)}
        closeModal={closePieceModal}
        onPressConfirm={(item) => handlePieceSelect(item)}
        onSelectItem={(item) => handlePieceSelect(item)}
        selected={selectedPiece}
        title="اختر القطعة"
      />
      <DropDownModal
        data={
          !selectedPiece
            ? services
            : services.filter((service) =>
                selectedPiece?.serviceType?.includes(service.value),
              )
        }
        visible={serviceDropDownVisible}
        onPress={(item) => handleServiceSelect(item)}
        closeModal={closeServiceModal}
        onPressConfirm={(item) => handleServiceSelect(item)}
        onSelectItem={(item) => handleServiceSelect(item)}
        selected={selectedService}
        title="اختر الخدمة"
      />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    wash: state.products.dryClean,
    washFav: state.favorite.wash,
    loading: state.favorite.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {getProductsFavorite, getWashFavorite, getProducts, setCart},
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wash);
