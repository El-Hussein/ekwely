import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import AppText from '../../components/atoms/AppText';
import AnimatedList from '../../components/atoms/AnimatedList';
import Header from '../../components/atoms/Header';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getFaq} from '../../redux/actions/Faq';
import COLORS from '../../common/colors';
import {calcHeight, calcFont} from '../../common/styles';

const Faq = ({getFaq, faq, loading}) => {
  useEffect(() => {
    getFaq();
  }, []);
  const _renderQuestionsItem = ({item}) => {
    return (
      <AnimatedList listTitle={item.arName}>
        <AppText style={styles.text}>{item.decription}</AppText>
      </AnimatedList>
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.newOrder}>
        <AppText style={styles.newOrderText}>أسئلة شائعة</AppText>
      </View>
      {loading ? (
        <ActivityIndicator
          color={COLORS.main}
          style={{marginVertical: calcHeight(20), alignSelf: 'center'}}
          size={calcFont(30)}
        />
      ) : (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data={faq}
          scrollEnabled={true}
          renderItem={_renderQuestionsItem}
          keyExtractor={(item, index) => `${Math.random() * 100}`}
          ListEmptyComponent={
            <AppText style={styles.EmptyComponent}>لا توجد أسئله</AppText>
          }
        />
      )}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    faq: state.faq.faq,
    loading: state.faq.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getFaq}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Faq);
