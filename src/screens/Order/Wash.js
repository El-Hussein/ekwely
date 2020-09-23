import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import DropDownModal from '../../components/atoms/DrobDownModal';
import DropDown from '../../components/atoms/DropDown';
import Button from '../../components/atoms/Button';
import CheckBox from '../../components/atoms/CheckBox';
import {useNavigation} from '@react-navigation/native';

const Wash = () => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(true);
  const [pieces, setPieces] = useState(false);
  const [counter, setCounter] = useState(1);
  const [favoriteDropDownVisible, setFavoriteDropDownVisible] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [serviceDropDownVisible, setServiceDropDownVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
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
    console.log('item');
    console.log(item);
    console.log('item');
    setSelectedPiece(item.value);
  };

  const closeServiceModal = () => {
    setServiceDropDownVisible(false);
  };

  const handleServiceSelect = (item) => {
    console.log('item');
    console.log(item);
    console.log('item');
    setSelectedService(item.value);
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
        placeholder="اختر القطعة"
      />

      <View style={styles.chooseService}>
        <AppText style={styles.chooseServiceText}>اختر الخدمة</AppText>
      </View>
      <DropDown
        onPress={() => {
          setServiceDropDownVisible(true);
        }}
        placeholder="اختر الخدمة"
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
          {id: 1, name: 'غاده', value: 1},
          {id: 2, name: 'حسين', value: 2},
          {id: 3, name: 'عبير', value: 3},
        ]}
        visible={favoriteDropDownVisible}
        onPress={(item) => handlePieceSelect(item)}
        closeModal={closeFavoriteModal}
        onPressConfirm={(item) => handlePieceSelect(item)}
        onSelectItem={(item) => handlePieceSelect(item)}
        selected={selectedPiece}
        title="اختر من المفضلة"
      />
      <DropDownModal
        data={[
          {id: 1, name: 'قطعه 1', value: 1},
          {id: 2, name: 'قطعه 2', value: 2},
          {id: 3, name: 'قطعه 3', value: 3},
        ]}
        visible={pieceDropDownVisible}
        onPress={(item) => handlePieceSelect(item)}
        closeModal={closePieceModal}
        onPressConfirm={(item) => handlePieceSelect(item)}
        onSelectItem={(item) => handlePieceSelect(item)}
        selected={selectedPiece}
        title="اختر القطعة"
      />
      <DropDownModal
        data={[
          {id: 1, name: 'خدمة 1', value: 1},
          {id: 2, name: 'خدمة 2', value: 2},
          {id: 3, name: 'خدمة 3', value: 3},
        ]}
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

export default Wash;
