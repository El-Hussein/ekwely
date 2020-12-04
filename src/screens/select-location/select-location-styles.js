import {Platform, StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {calcWidth, calcFont, calcHeight} from '../../common/styles';

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView: {
    width: '100%',
    height: '100%',
    // position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
  currentLocation: {
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  done: {
    color: COLORS.white,
    paddingHorizontal: calcWidth(10),
    fontSize: calcFont(18),
    fontWeight: 'bold',
  },
  headerView: {
    width: '100%',
    backgroundColor: COLORS.main,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: calcHeight(60),
    flexDirection: 'row',
  },
  titleEnText: {
    textAlign: 'center',
    color: COLORS.white,
    ...Platform.select({
      ios: {
        fontWeight: '500',
        fontSize: calcFont(17),
      },
      android: {
        fontWeight: '700',
        fontSize: calcFont(20),
      },
    }),
  },
  reloadIcon: {
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        marginRight: calcFont(16),
      },
      android: {
        marginRight: calcFont(16),
      },
    }),
  },
  backIcon: {
    alignSelf: 'center',
    marginHorizontal: calcWidth(10),
  },
  searchInput: {
    backgroundColor: '#FAFDFF',
    borderColor: '#E5E5EA',
    borderWidth: 1.6,
    height: calcHeight(45),
    marginHorizontal: calcFont(20),
    paddingLeft: calcFont(16),
    ...Platform.select({
      ios: {
        borderRadius: 10,
      },
      android: {
        borderRadius: 6,
      },
    }),
  },
  currentLocationStyle: {
    backgroundColor: COLORS.white,
    borderRadius: calcFont(4),
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    height: calcHeight(114),
    borderTopEndRadius: calcFont(22),
    borderTopStartRadius: calcFont(22),
    bottom: 0,
  },
  borderTopView: {
    backgroundColor: COLORS.lightGray,
    width: calcWidth(40),
    height: calcHeight(6),
    marginVertical: calcHeight(22),
    borderRadius: calcWidth(10),
  },
  iconCurrentLocationView: {
    alignItems: 'center',
    width: '100%',
    height: calcHeight(22),
    flexDirection: 'row',
  },
  currentLocationTextStyle: {
    color: COLORS.blackText,
    fontSize: 17,
    marginLeft: 20,
  },
  currentLocationIconStyle: {
    marginLeft: 20,
  },
  mapViewContainerStyle: {
    width: calcWidth(375),
    flex: 1,
    zIndex: -1,
  },
  flex1: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    paddingHorizontal: 20,
    fontSize: 15,
    color: COLORS.blackText,
    textAlign: 'right',
  },
  containerMap: {
    backgroundColor: COLORS.white,
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  listView: {
    backgroundColor: 'red',
    zIndex: 999,
  },
  description: {
    fontSize: 14,
  },
  textInputContainer: {
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.mainGreyText,
    borderBottomColor: COLORS.mainGreyText,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.mainGreyText,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: calcWidth(10),
    marginRight: calcWidth(10),
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  searchMapContainer: {
    height: calcHeight(40),
    width: '100%',
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapViewStyle: {flex: 1},
});

export default styles;
