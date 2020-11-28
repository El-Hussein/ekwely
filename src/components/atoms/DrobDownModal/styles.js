import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: calcFont(10),
    borderTopRightRadius: calcFont(10),
  },
  list: {
    flexGrow: 1,
    paddingBottom: calcFont(20),
  },
  androidContainer: {
    backgroundColor: COLORS.white,
    borderRadius: calcFont(5),
    maxHeight: '90%',
  },
  header: {
    height: calcHeight(60),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: calcFont(16),
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  androidHeader: {
    height: calcHeight(60),
    paddingHorizontal: calcFont(16),
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: calcHeight(50),
    width: '100%',
    paddingHorizontal: calcFont(16),
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  iosModal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
  },
  nameText: {
    fontSize: calcFont(17),
    width: '90%',
  },
  titleText: {
    fontSize: calcFont(17),
    textAlign: 'center',
    width: '100%',
  },
  closeIcon: {},
  androidCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: calcHeight(50),
    width: '100%',
    paddingHorizontal: calcFont(16),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: calcHeight(15)
  },
  buttonText: {
    width: calcWidth(100),
    height: calcHeight(50),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.main,
  },
  separator: {
    height: calcHeight(5),
  },
});
