import {StyleSheet} from 'react-native';
import {Colors, wScale} from '../../utils';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    borderRadius: wScale(5),
    backgroundColor: Colors.WHITE,
    flex: 1,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  img: {
    width: undefined,
    height: undefined,
    flex: 1,
    borderTopLeftRadius: wScale(5),
    borderTopRightRadius: wScale(5),
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  informationContainer: {flex: 0.9},
});

export {styles};
